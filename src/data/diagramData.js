// Decorative background diagrams, one per section. Labels are plain strings or { es, en }.

export const projectsDiagram = {
  type: 'sequence',
  gap: 440,
  participants: [{ es: 'Usuario', en: 'User' }, 'Frontend', 'API', { es: 'BaseDeDatos', en: 'Database' }],
  messages: [
    { from: 0, to: 1, label: 'login()' },
    { from: 1, to: 2, label: 'POST /auth' },
    { from: 2, to: 3, label: 'SELECT user' },
    { from: 3, to: 2, label: 'user', kind: 'return' },
    { from: 2, to: 1, label: 'JWT', kind: 'return' },
    { from: 0, to: 1, label: { es: 'conciliar()', en: 'reconcile()' } },
    { from: 1, to: 2, label: 'GET /reports' },
    { from: 2, to: 2, label: 'match()', kind: 'self' },
    { from: 2, to: 1, label: '200 OK', kind: 'return' },
  ],
};

export const aboutDiagram = {
  type: 'bpmn',
  spread: 2,
  width: 720,
  height: 170,
  nodes: [
    { id: 'start', kind: 'start', x: 30, y: 60, label: { es: 'Problema', en: 'Problem' } },
    { id: 'analyze', kind: 'task', x: 150, y: 60, label: { es: 'Analizar', en: 'Analyze' } },
    { id: 'viable', kind: 'gateway', x: 280, y: 60, label: { es: '¿Viable?', en: 'Viable?' } },
    { id: 'design', kind: 'task', x: 400, y: 60, label: { es: 'Diseñar', en: 'Design' } },
    { id: 'build', kind: 'task', x: 550, y: 60, label: { es: 'Construir', en: 'Build' } },
    { id: 'end', kind: 'end', x: 670, y: 60, label: { es: 'Solución', en: 'Solution' } },
  ],
  flows: [
    { from: 'start', to: 'analyze' },
    { from: 'analyze', to: 'viable' },
    { from: 'viable', to: 'design', label: { es: 'sí', en: 'yes' } },
    { from: 'viable', to: 'analyze', label: 'no', points: [[280, 82], [280, 140], [150, 140], [150, 84]], labelAt: [288, 110] },
    { from: 'design', to: 'build' },
    { from: 'build', to: 'end' },
  ],
};

export const experienceDiagram = {
  type: 'bpmn',
  spread: 1.5,
  width: 980,
  height: 230,
  lanes: [
    { label: { es: 'Cliente', en: 'Client' }, y: 1, h: 110 },
    { label: { es: 'Ingeniería', en: 'Engineering' }, y: 111, h: 118 },
  ],
  nodes: [
    { id: 'need', kind: 'start', x: 75, y: 55, label: { es: 'Necesidad', en: 'Need' } },
    { id: 'gather', kind: 'task', x: 190, y: 55, label: { es: 'Relevamiento', en: 'Discovery' } },
    { id: 'design', kind: 'task', x: 335, y: 160, label: { es: 'Diseño', en: 'Design' } },
    { id: 'develop', kind: 'task', x: 480, y: 160, label: { es: 'Desarrollo', en: 'Build' } },
    { id: 'tests', kind: 'gateway', x: 600, y: 160, label: { es: '¿Tests OK?', en: 'Tests OK?' } },
    { id: 'deploy', kind: 'task', x: 710, y: 160, label: 'Deploy' },
    { id: 'review', kind: 'task', x: 845, y: 55, label: { es: 'Validación', en: 'Review' } },
    { id: 'value', kind: 'end', x: 945, y: 55, label: { es: 'Valor', en: 'Value' } },
  ],
  flows: [
    { from: 'need', to: 'gather' },
    { from: 'gather', to: 'design' },
    { from: 'design', to: 'develop' },
    { from: 'develop', to: 'tests' },
    { from: 'tests', to: 'deploy', label: { es: 'sí', en: 'yes' } },
    { from: 'tests', to: 'develop', label: 'no', points: [[600, 182], [600, 215], [480, 215], [480, 184]], labelAt: [608, 202] },
    { from: 'deploy', to: 'review' },
    { from: 'review', to: 'value' },
  ],
};

export const skillsDiagram = {
  type: 'sequence',
  gap: 440,
  participants: ['UI', 'Backend', 'Data', 'Security'],
  messages: [
    { from: 0, to: 1, label: 'request()' },
    { from: 1, to: 3, label: 'validate(token)' },
    { from: 3, to: 1, label: 'ok', kind: 'return' },
    { from: 1, to: 2, label: 'query()' },
    { from: 2, to: 2, label: 'normalize()', kind: 'self' },
    { from: 2, to: 1, label: 'rows', kind: 'return' },
    { from: 1, to: 3, label: 'audit(event)' },
    { from: 1, to: 0, label: 'response', kind: 'return' },
  ],
};

export const educationDiagram = {
  type: 'bpmn',
  spread: 1.8,
  width: 820,
  height: 170,
  nodes: [
    { id: 'start', kind: 'start', x: 30, y: 85, label: { es: 'Inicio', en: 'Start' } },
    { id: 'utn', kind: 'task', x: 150, y: 85, label: { es: 'Carrera UTN', en: 'UTN degree' } },
    { id: 'years', kind: 'timer', x: 270, y: 85, label: { es: '5 años', en: '5 years' } },
    { id: 'courses', kind: 'task', x: 390, y: 85, label: { es: 'Cursos', en: 'Courses' } },
    { id: 'split', kind: 'gateway', parallel: true, x: 510, y: 85 },
    { id: 'certs', kind: 'task', x: 630, y: 35, label: { es: 'Certificaciones', en: 'Certifications' } },
    { id: 'projects', kind: 'task', x: 630, y: 135, label: { es: 'Proyectos', en: 'Projects' } },
    { id: 'end', kind: 'end', x: 775, y: 85, label: { es: 'Aprendizaje', en: 'Learning' } },
  ],
  flows: [
    { from: 'start', to: 'utn' },
    { from: 'utn', to: 'years' },
    { from: 'years', to: 'courses' },
    { from: 'courses', to: 'split' },
    { from: 'split', to: 'certs' },
    { from: 'split', to: 'projects' },
    { from: 'certs', to: 'end' },
    { from: 'projects', to: 'end' },
  ],
};

export const contactDiagram = {
  type: 'sequence',
  gap: 900,
  participants: [{ es: 'Vos', en: 'You' }, 'Leonardo'],
  messages: [
    { from: 0, to: 1, label: { es: 'mensaje()', en: 'message()' } },
    { from: 1, to: 1, label: { es: 'analizar()', en: 'analyze()' }, kind: 'self' },
    { from: 1, to: 0, label: { es: 'respuesta', en: 'reply' }, kind: 'return' },
    { from: 0, to: 1, label: { es: 'agendarLlamada()', en: 'scheduleCall()' } },
    { from: 1, to: 0, label: '✓', kind: 'return' },
  ],
};

export const terminalDiagram = {
  type: 'sequence',
  gap: 520,
  participants: ['visitor', 'shell', 'portfolio'],
  messages: [
    { from: 0, to: 1, label: '$ help' },
    { from: 1, to: 2, label: 'lookup(cmd)' },
    { from: 2, to: 1, label: 'data', kind: 'return' },
    { from: 1, to: 0, label: 'stdout', kind: 'return' },
  ],
};
