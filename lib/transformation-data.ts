export const initiativeStatuses = ['Pendiente', 'Planificada', 'En ejecución', 'En validación', 'Completada'] as const

export const transformationInitiatives = [
  { id: 1, name: 'Seguimiento de CLV, drop-off y costo de retención', description: 'Instrumentar métricas de valor y abandono para priorizar acciones.', problem: 'Decisiones fragmentadas sobre valor y retención.', objective: 'Monitorear tres KPI con corte semanal.', owner: 'Responsable demo', area: 'Analítica', start: '2026-07-06', target: '2026-08-28', status: 'En ejecución', progress: 62, dependencies: 'Eventos app/web; CRM', budget: 'No definido', risk: 'Calidad de eventos', kpi: 'CLV / drop-off', result: 'Priorización basada en datos', evidence: 'Pendiente de validación' },
  { id: 2, name: 'Tablero de analítica de navegación app/web', description: 'Visibilizar recorridos y puntos de salida en canales digitales.', problem: 'Baja visibilidad del comportamiento digital.', objective: 'Identificar los cinco principales puntos de abandono.', owner: 'Responsable demo', area: 'Producto digital', start: '2026-07-13', target: '2026-09-04', status: 'Planificada', progress: 18, dependencies: 'GA4/Firebase Analytics', budget: 'No definido', risk: 'Integración pendiente', kpi: 'Drop-off por paso', result: 'Backlog priorizado', evidence: 'Pendiente de validación' },
  { id: 3, name: 'Vista 360° del cliente', description: 'Unificar señales y productos para una atención contextual.', problem: 'Información distribuida entre canales.', objective: 'Reducir consultas repetidas y mejorar continuidad.', owner: 'Responsable demo', area: 'CRM', start: '2026-06-15', target: '2026-08-14', status: 'En validación', progress: 84, dependencies: 'CRM; Core bancario', budget: 'No definido', risk: 'Permisos de acceso', kpi: 'Resolución omnicanal', result: 'Contexto único para atención', evidence: 'Prototipo de demostración' },
  { id: 4, name: 'Continuidad omnicanal de solicitudes', description: 'Permitir retomar una solicitud al cambiar de canal.', problem: 'El cliente repite información al cambiar de canal.', objective: 'Reducir tiempo de resolución de 5,5 a 2,8 días en simulación.', owner: 'Responsable demo', area: 'Operaciones', start: '2026-08-03', target: '2026-09-25', status: 'Pendiente', progress: 0, dependencies: 'Vista 360°; Core bancario', budget: 'No definido', risk: 'Dependencias tecnológicas', kpi: 'Tiempo de resolución', result: 'Menor fricción', evidence: 'Sin evidencia' },
  { id: 5, name: 'Notificaciones proactivas', description: 'Avisar próximos pasos y documentos requeridos.', problem: 'Abandono por falta de claridad y seguimiento.', objective: 'Disminuir abandonos en momentos críticos.', owner: 'Responsable demo', area: 'Experiencia', start: '2026-08-10', target: '2026-09-18', status: 'Planificada', progress: 12, dependencies: 'Firebase Cloud Messaging; Twilio', budget: 'No definido', risk: 'Consentimiento', kpi: 'Abandono por etapa', result: 'Mayor claridad del proceso', evidence: 'Pendiente de validación' },
  { id: 6, name: 'Encuesta contextual de abandono', description: 'Capturar el motivo del abandono en contexto.', problem: 'No se conoce la razón declarada de salida.', objective: 'Obtener una razón accionable en cada abandono.', owner: 'Responsable demo', area: 'Investigación', start: '2026-08-17', target: '2026-09-11', status: 'Planificada', progress: 8, dependencies: 'Analítica de abandono', budget: 'No definido', risk: 'Tamaño de muestra', kpi: 'Respuesta a encuesta', result: 'Hipótesis priorizadas', evidence: 'Resultado hipotético' },
  { id: 7, name: 'Repositorio de Customer Journey Maps', description: 'Centralizar mapas, aprendizajes y decisiones.', problem: 'Artefactos dispersos y difíciles de consultar.', objective: 'Mantener un repositorio accesible al comité.', owner: 'Responsable demo', area: 'Transformación', start: '2026-07-20', target: '2026-08-21', status: 'Completada', progress: 100, dependencies: 'Miro; Figma', budget: 'No definido', risk: 'Gobierno de contenidos', kpi: 'Mapas vigentes', result: 'Memoria institucional', evidence: 'Estructura ilustrativa' },
  { id: 8, name: 'Sistema de alertas de abandono', description: 'Detectar señales tempranas para activar gestión.', problem: 'Las alertas llegan tarde o no están priorizadas.', objective: 'Clasificar alertas por severidad y etapa.', owner: 'Responsable demo', area: 'Riesgos', start: '2026-08-24', target: '2026-10-02', status: 'Pendiente', progress: 0, dependencies: 'Modelo de propensión; CRM', budget: 'No definido', risk: 'Falsos positivos', kpi: 'Alertas accionadas', result: 'Intervención temprana', evidence: 'Sin evidencia' },
]

export const pilotKpis = [
  { name: 'Drop-off en registro digital', before: 35, after: 24, unit: '%', direction: 'menor' },
  { name: 'CLV promedio a tres meses', before: 100, after: 118, unit: 'índice', direction: 'mayor' },
  { name: 'Costo de retención por cliente', before: 100, after: 88, unit: 'índice', direction: 'menor' },
  { name: 'Resolución de trámites que cambian de canal', before: 5.5, after: 2.8, unit: 'días', direction: 'menor' },
]

export const dataSources = [
  ['Aplicación móvil', 'Eventos y transacciones', 'Datos de ejemplo', '12.450', '18', 'Responsable demo', 'Integración pendiente'],
  ['Oficina virtual web', 'Navegación y formularios', 'Datos de ejemplo', '21.080', '12', 'Responsable demo', 'Estado ilustrativo'],
  ['CRM en la nube', 'Clientes y relaciones', 'Datos de ejemplo', '8.420', '4', 'Responsable demo', 'Integración pendiente'],
  ['Core bancario', 'Productos y operaciones', 'Datos de ejemplo', '5.930', '0', 'Responsable demo', 'Estado ilustrativo'],
  ['Sistema de cobranza', 'Gestión de cartera', 'Datos de ejemplo', '3.210', '7', 'Responsable demo', 'Integración pendiente'],
  ['Eventos analíticos app/web', 'Eventos de comportamiento', 'Datos de ejemplo', '44.110', '31', 'Responsable demo', 'Estado ilustrativo'],
  ['Encuestas de experiencia', 'Respuestas', 'Datos de ejemplo', '1.280', '2', 'Responsable demo', 'Integración pendiente'],
]

export const auditRows = [
  ['03 oct 2026 · 08:42', 'Usuario demo', 'Consultó', 'Gestión de iniciativas'],
  ['03 oct 2026 · 08:31', 'Gerencia demo', 'Exportó vista', 'Piloto y resultados'],
  ['02 oct 2026 · 17:15', 'Analista demo', 'Actualizó KPI', 'Gobierno de datos'],
  ['02 oct 2026 · 15:09', 'Asesor demo', 'Consultó', 'Vista 360°'],
]

export const changeHistory = [
  ['03 oct 2026', 'Avance actualizado', 'Responsable demo', '62%'],
  ['01 oct 2026', 'Bloqueo registrado', 'Responsable demo', 'Calidad de eventos'],
  ['25 sep 2026', 'Estado cambiado', 'Comité demo', 'En ejecución'],
]
