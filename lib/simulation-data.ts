export type SimulationParams = {
  visits: number
  startRate: number
  docsRate: number
  approvalRate: number
  disbursementRate: number
  cac: number
  clv: number
  retentionCost: number
  retentionRate: number
  resolutionTime: number
  documentIssueRate: number
}

export const baseSimulation: SimulationParams = {
  visits: 128450,
  startRate: 50.8,
  docsRate: 64.2,
  approvalRate: 73.6,
  disbursementRate: 83.9,
  cac: 182000,
  clv: 4800000,
  retentionCost: 46000,
  retentionRate: 78.6,
  resolutionTime: 2.8,
  documentIssueRate: 38,
}

export type SimulationResult = SimulationParams & {
  applications: number
  documents: number
  approvals: number
  disbursements: number
  finalConversion: number
  dropOff: number
}

export function calculateSimulation(params: SimulationParams): SimulationResult {
  const applications = Math.round(params.visits * params.startRate / 100)
  const documents = Math.round(applications * params.docsRate / 100)
  const approvals = Math.round(documents * params.approvalRate / 100)
  const disbursements = Math.round(approvals * params.disbursementRate / 100)
  return { ...params, applications, documents, approvals, disbursements, finalConversion: params.visits ? disbursements / params.visits * 100 : 0, dropOff: applications ? (applications - disbursements) / applications * 100 : 0 }
}

export const formatCOP = (value: number) => `$ ${new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(value)}`
export const formatPeople = (value: number) => new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(value)
export const percent = (value: number) => `${value.toFixed(1).replace('.', ',')}%`

export const scenarioPresets: Record<string, SimulationParams> = {
  'Escenario base': baseSimulation,
  'Mejora de registro': { ...baseSimulation, startRate: 58, docsRate: 76, documentIssueRate: 25 },
  'Mejora omnicanal': { ...baseSimulation, resolutionTime: 1.6, retentionRate: 81.5 },
  'Campaña de retención': { ...baseSimulation, retentionCost: 39000, retentionRate: 85.2 },
}

export const comparisonRows = [
  ['Visitas app/web', 'visits', 'personas'], ['Solicitudes iniciadas', 'applications', 'personas'], ['Documentos cargados', 'documents', 'personas'], ['Créditos aprobados', 'approvals', 'personas'], ['Desembolsos estimados', 'disbursements', 'personas'], ['Conversión final', 'finalConversion', '%'], ['Drop-off del proceso', 'dropOff', '%'], ['CLV promedio', 'clv', 'COP'], ['Tasa de retención', 'retentionRate', '%'], ['Tiempo de resolución', 'resolutionTime', 'días']
] as const

export function difference(current: number, base: number) { return current - base }
export function variation(current: number, base: number) { return base === 0 ? 0 : (current - base) / base * 100 }

export function exportScenarioCsv(name: string, result: SimulationResult) {
  const rows = [['Escenario', name], ...comparisonRows.map(([label, key, unit]) => [label, String(result[key]), unit])]
  return rows.map(row => row.map(cell => `"${cell.replaceAll('"', '""')}"`).join(',')).join('\n')
}

export const designThinkingPhases = [
  { id: 'empatizar', name: 'Empatizar', color: '#3B82F6', description: 'Comprender necesidades, emociones y fricciones reales del cliente.', icon: 'HeartHandshake', objective: 'Escuchar la voz del cliente', progress: 82 },
  { id: 'definir', name: 'Definir', color: '#FACC15', description: 'Sintetizar evidencia y formular el problema prioritario.', icon: 'ScanSearch', objective: 'Enfocar el reto correcto', progress: 68 },
  { id: 'idear', name: 'Idear', color: '#A855F7', description: 'Generar alternativas y priorizar oportunidades de solución.', icon: 'Lightbulb', objective: 'Crear opciones accionables', progress: 54 },
  { id: 'prototipar', name: 'Prototipar', color: '#F97316', description: 'Convertir ideas en experiencias visuales para aprender rápido.', icon: 'PanelsTopLeft', objective: 'Hacer tangible la solución', progress: 40 },
  { id: 'evaluar', name: 'Evaluar / Testear', color: '#22C55E', description: 'Contrastar hipótesis y decidir las próximas mejoras.', icon: 'FlaskConical', objective: 'Aprender antes de escalar', progress: 26 },
]

export const demoIdeas = [
  ['Indicador de avance de solicitud', 'Dar visibilidad del estado del crédito.', 'Alta', 'Producto'],
  ['Notificaciones proactivas', 'Avisar cambios de estado por el canal preferido.', 'Media', 'CRM'],
  ['Claridad de documentos requeridos', 'Reducir dudas y reprocesos en la carga.', 'Alta', 'Experiencia'],
  ['Simulador de crédito', 'Ayudar a decidir antes de iniciar.', 'Media', 'Digital'],
  ['Continuidad omnicanal', 'Retomar la solicitud sin perder contexto.', 'Alta', 'Transformación'],
]

export const prototypeCards = ['Pantalla de documentos requeridos', 'Indicador de avance del crédito', 'Vista 360° del cliente', 'Panel de documentos pendientes', 'Notificaciones de estado']

export const evaluationRows = [
  ['Conversión a desembolso', '4,8%', '6,1%', '+1,3 pp', 'Simulado'],
  ['Documentos sin errores', '62%', '78%', '+16 pp', 'Simulado'],
  ['Tiempo de resolución', '2,8 días', '1,9 días', '−0,9 días', 'Simulado'],
]

export const stageLabels = ['Empatizar', 'Definir', 'Idear', 'Prototipar', 'Evaluar / Testear']

export const clampNumber = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export type SimulationScenario = { name: string; params: SimulationParams }

export const initialScenarios: SimulationScenario[] = [{ name: 'Escenario base', params: baseSimulation }]

export function displayValue(key: string, value: number) {
  if (key === 'clv' || key === 'cac' || key === 'retentionCost') return formatCOP(value)
  if (['startRate', 'docsRate', 'approvalRate', 'disbursementRate', 'retentionRate', 'documentIssueRate', 'finalConversion', 'dropOff'].includes(key)) return percent(value)
  if (key === 'resolutionTime') return `${value.toFixed(1).replace('.', ',')} días`
  return formatPeople(value)
}

export function validateParams(params: SimulationParams) {
  return params.visits >= 0 && [params.startRate, params.docsRate, params.approvalRate, params.disbursementRate, params.retentionRate, params.documentIssueRate].every(value => value >= 0 && value <= 100) && params.cac >= 0 && params.clv >= 0 && params.retentionCost >= 0 && params.resolutionTime >= 0
}

export function trendFromResult(result: SimulationResult) {
  return ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'].map((name, index) => ({ name, visitas: Math.round(result.visits * (0.78 + index * 0.08)), solicitudes: Math.round(result.applications * (0.78 + index * 0.08)), desembolsos: Math.round(result.disbursements * (0.78 + index * 0.08)) }))
}

export const phaseActivities: Record<string, string[]> = { empatizar: ['Entrevistas y encuestas de experiencia', 'Comentarios de clientes y asesores', 'Mapa de fricciones por canal'], definir: ['Enunciado del problema', 'Evidencia y usuarios afectados', 'Indicador objetivo'], idear: ['Lluvia de ideas', 'Priorización por impacto y esfuerzo', 'Validación con equipos'], prototipar: ['Flujo de solicitud digital', 'Panel de documentos', 'Notificaciones de estado'], evaluar: ['Prueba comparativa', 'Observaciones y participantes', 'Próximas mejoras'] }

export const impactLabels = ['Alto', 'Medio', 'Bajo']

export const simulatedNotice = 'DATOS SIMULADOS — NO CORRESPONDEN A RESULTADOS REALES'
