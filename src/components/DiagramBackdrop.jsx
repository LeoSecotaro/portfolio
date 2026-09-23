import { useRef } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../i18n/LanguageContext';

// Decorative UML sequence / BPMN diagrams drawn behind each section.
const text = (label, language) => (typeof label === 'string' ? label : label?.[language] ?? label?.es ?? '');

const toPath = (points) => points.map(([x, y], index) => `${index ? 'L' : 'M'}${x} ${y}`).join('');

function ArrowHead({ from, to, open = false, className, style }) {
  const [x1, y1] = from;
  const [x2, y2] = to;
  const length = Math.hypot(x2 - x1, y2 - y1) || 1;
  const [dx, dy] = [(x2 - x1) / length, (y2 - y1) / length];
  const size = 8;
  const left = [x2 - dx * size - dy * 4, y2 - dy * size + dx * 4];
  const right = [x2 - dx * size + dy * 4, y2 - dy * size - dx * 4];
  return open
    ? <polyline className={className} style={style} points={`${left} ${x2},${y2} ${right}`} />
    : <polygon className={`${className} dg-solid`} style={style} points={`${left} ${x2},${y2} ${right}`} />;
}

/* ---------- Sequence diagram ---------- */
const SEQ = { gap: 170, left: 80, top: 8, boxW: 124, boxH: 34, firstMessage: 82, step: 46 };

function SequenceDiagram({ spec, language }) {
  const { participants, messages, gap = SEQ.gap } = spec;
  const x = (index) => SEQ.left + index * gap;
  const width = SEQ.left * 2 + (participants.length - 1) * gap;
  const height = SEQ.firstMessage + messages.length * SEQ.step;
  const lifelineTop = SEQ.top + SEQ.boxH;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
      {participants.map((participant, index) => (
        <g key={index} className="dg-fade" style={{ '--i': 0 }}>
          <rect x={x(index) - SEQ.boxW / 2} y={SEQ.top} width={SEQ.boxW} height={SEQ.boxH} rx="3" />
          <text x={x(index)} y={SEQ.top + SEQ.boxH / 2 + 4} textAnchor="middle" className="dg-title">{text(participant, language)}</text>
          <line className="dg-dashed" x1={x(index)} y1={lifelineTop} x2={x(index)} y2={height - 6} />
        </g>
      ))}
      {messages.map((message, index) => {
        const y = SEQ.firstMessage + index * SEQ.step;
        const style = { '--i': index + 1 };
        const x1 = x(message.from);
        const label = text(message.label, language);

        if (message.kind === 'self') {
          const points = [[x1 + 5, y], [x1 + 40, y], [x1 + 40, y + 18], [x1 + 6, y + 18]];
          return (
            <g key={index}>
              <path className="dg-draw" style={style} pathLength="1" d={toPath(points)} />
              <ArrowHead className="dg-head" style={style} from={points[2]} to={points[3]} />
              <text className="dg-head" style={style} x={x1 + 48} y={y + 13}>{label}</text>
            </g>
          );
        }

        const x2 = x(message.to);
        const direction = Math.sign(x2 - x1);
        const start = [x1 + direction * 5, y];
        const end = [x2 - direction * 5, y];
        const isReturn = message.kind === 'return';
        return (
          <g key={index}>
            {!isReturn && <rect className="dg-fade dg-activation" style={style} x={x2 - 5} y={y - 4} width="10" height="30" />}
            {isReturn
              ? <path className="dg-fade dg-dashed" style={style} d={toPath([start, end])} />
              : <path className="dg-draw" style={style} pathLength="1" d={toPath([start, end])} />}
            <ArrowHead className="dg-head" style={style} from={start} to={end} open={isReturn} />
            <text className="dg-head" style={style} x={(x1 + x2) / 2} y={y - 7} textAnchor="middle">{label}</text>
          </g>
        );
      })}
    </svg>
  );
}

/* ---------- BPMN process ---------- */
const halfSize = (node) => {
  if (node.kind === 'task') return [60, 24];
  if (node.kind === 'gateway') return [22, 22];
  if (node.kind === 'timer') return [18, 18];
  return [16, 16];
};

function routeFlow(from, to) {
  const start = [from.x + halfSize(from)[0], from.y];
  const end = [to.x - halfSize(to)[0], to.y];
  if (from.y === to.y) return [start, end];
  const mid = Math.round((start[0] + end[0]) / 2);
  return [start, [mid, start[1]], [mid, end[1]], end];
}

function BpmnNode({ node, label, style }) {
  const { x, y, kind } = node;
  const labelBelow = <text x={x} y={y + 34} textAnchor="middle">{label}</text>;

  switch (kind) {
    case 'task':
      return <g className="dg-fade" style={style}><rect x={x - 60} y={y - 24} width="120" height="48" rx="10" /><text x={x} y={y + 4} textAnchor="middle" className="dg-title">{label}</text></g>;
    case 'gateway':
      return (
        <g className="dg-fade" style={style}>
          <path d={`M${x} ${y - 22}L${x + 22} ${y}L${x} ${y + 22}L${x - 22} ${y}Z`} />
          <text x={x} y={y + 6} textAnchor="middle" className="dg-mark">{node.parallel ? '+' : '×'}</text>
          {label && <text x={x} y={y - 30} textAnchor="middle">{label}</text>}
        </g>
      );
    case 'timer':
      return (
        <g className="dg-fade" style={style}>
          <circle cx={x} cy={y} r="18" /><circle cx={x} cy={y} r="14" />
          <path d={`M${x} ${y - 9}V${y}L${x + 6} ${y + 4}`} />
          {labelBelow}
        </g>
      );
    case 'end':
      return <g className="dg-fade" style={style}><circle className="dg-end" cx={x} cy={y} r="16" />{labelBelow}</g>;
    default:
      return <g className="dg-fade" style={style}><circle cx={x} cy={y} r="16" />{labelBelow}</g>;
  }
}

// `spread` widens the process horizontally without scaling shapes or text.
const spreadSpec = ({ spread = 1, ...spec }) => ({
  ...spec,
  width: spec.width * spread,
  nodes: spec.nodes.map((node) => ({ ...node, x: node.x * spread })),
  flows: spec.flows.map((flow) => ({
    ...flow,
    points: flow.points?.map(([x, y]) => [x * spread, y]),
    labelAt: flow.labelAt && [flow.labelAt[0] * spread, flow.labelAt[1]],
  })),
});

function BpmnDiagram({ spec: rawSpec, language }) {
  const spec = spreadSpec(rawSpec);
  const { width, height, lanes = [], nodes, flows } = spec;
  const byId = Object.fromEntries(nodes.map((node) => [node.id, node]));
  const order = Object.fromEntries(nodes.map((node, index) => [node.id, index]));

  return (
    <svg viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
      {lanes.map((lane, index) => (
        <g key={index} className="dg-fade dg-lane" style={{ '--i': 0 }}>
          <rect x="1" y={lane.y} width={width - 2} height={lane.h} />
          <line x1="30" y1={lane.y} x2="30" y2={lane.y + lane.h} />
          <text transform={`translate(20 ${lane.y + lane.h / 2}) rotate(-90)`} textAnchor="middle" className="dg-title">{text(lane.label, language)}</text>
        </g>
      ))}
      {flows.map((flow, index) => {
        const points = flow.points ?? routeFlow(byId[flow.from], byId[flow.to]);
        const style = { '--i': order[flow.from] + 1 };
        const [labelX, labelY] = flow.labelAt ?? [points[0][0] + 8, points[0][1] - 7];
        return (
          <g key={index}>
            <path className="dg-draw" style={style} pathLength="1" d={toPath(points)} />
            <ArrowHead className="dg-head" style={style} from={points.at(-2)} to={points.at(-1)} />
            {flow.label && <text className="dg-head" style={style} x={labelX} y={labelY}>{text(flow.label, language)}</text>}
          </g>
        );
      })}
      {nodes.map((node, index) => <BpmnNode key={node.id} node={node} label={text(node.label, language)} style={{ '--i': index }} />)}
    </svg>
  );
}

export default function DiagramBackdrop({ spec, className = '' }) {
  const { language } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const shouldReduceMotion = useReducedMotion();
  const state = shouldReduceMotion ? 'is-static' : isInView ? 'is-drawing' : '';
  const Diagram = spec.type === 'sequence' ? SequenceDiagram : BpmnDiagram;

  return (
    <div ref={ref} className={`diagram-backdrop diagram-${spec.type} ${state} ${className}`} aria-hidden="true">
      <Diagram spec={spec} language={language} />
    </div>
  );
}
