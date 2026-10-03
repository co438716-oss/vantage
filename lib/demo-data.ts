export const kpis = [
  { label: 'Usuarios digitales', value: '128.450', change: '+8,4%', tone: 'positive', formula: 'Usuarios únicos que visitaron app o web durante el período.' },
  { label: 'Conversión a desembolso', value: '4,8%', change: '+0,6 pp', tone: 'positive', formula: 'Desembolsos ÷ visitas digitales × 100.' },
  { label: 'Drop-off digital', value: '61,2%', change: '+3,1 pp', tone: 'negative', formula: 'Usuarios que abandonan el proceso ÷ usuarios que lo iniciaron × 100.' },
  { label: 'CLV promedio', value: '$ 4,8 M', change: '+6,2%', tone: 'positive', formula: 'Valor neto estimado de la relación con el cliente.' },
  { label: 'Costo de adquisición (CAC)', value: '$ 182 mil', change: '+4,7%', tone: 'negative', formula: 'Inversión comercial y de marketing ÷ clientes nuevos.' },
  { label: 'Costo de retención', value: '$ 46 mil', change: '-8,3%', tone: 'positive', formula: 'Inversión en retención ÷ clientes retenidos.' },
]

export const trendData = [
  { name: '01 jun', visitas: 18000, solicitudes: 4200, desembolsos: 790 }, { name: '08 jun', visitas: 21000, solicitudes: 4600, desembolsos: 860 }, { name: '15 jun', visitas: 19500, solicitudes: 4380, desembolsos: 825 }, { name: '22 jun', visitas: 24000, solicitudes: 5100, desembolsos: 1010 }, { name: '29 jun', visitas: 26000, solicitudes: 5480, desembolsos: 1120 }, { name: '06 jul', visitas: 27500, solicitudes: 5700, desembolsos: 1180 }, { name: '13 jul', visitas: 28500, solicitudes: 5900, desembolsos: 1240 },
]
export const funnel = [{ label: 'Visitas digitales', value: '128.450', percent: 100 }, { label: 'Solicitudes iniciadas', value: '24.860', percent: 19.4 }, { label: 'Solicitudes aprobadas', value: '9.420', percent: 7.3 }, { label: 'Desembolsos', value: '6.170', percent: 4.8 }]
export const channels = [{ name: 'App', value: 42, color: '#2563EB' }, { name: 'Web', value: 35, color: '#14B8A6' }, { name: 'Agencia', value: 23, color: '#F59E0B' }]
export const products = [{ name: 'Crédito de libre inversión', value: 38, color: '#102A43' }, { name: 'Crédito de vehículo', value: 27, color: '#2563EB' }, { name: 'Libranza', value: 21, color: '#14B8A6' }, { name: 'Tarjeta de crédito', value: 14, color: '#F59E0B' }]
export const initiatives = [{ name: 'Preaprobación digital en 3 minutos', owner: 'Equipo Producto', status: 'En curso', progress: 72 }, { name: 'Modelo de propensión a abandono', owner: 'Analítica & Riesgos', status: 'Piloto', progress: 48 }, { name: 'Vista 360° para agencias', owner: 'Transformación', status: 'Completada', progress: 100 }]
export const opportunities = ['Reducir el abandono entre aprobación y firma digital', 'Personalizar la oferta para clientes de alto CLV', 'Conectar el seguimiento de agencia con la sesión digital']
export const navItems = ['Resumen ejecutivo', 'Embudo de conversión', 'Valor del cliente y retención', 'Navegación digital', 'Experiencia omnicanal', 'Alertas de abandono', 'Customer Journey Maps', 'Piloto y resultados', 'Gestión de iniciativas', 'Configuración y calidad de datos']
export const formatNumber = (n: number) => new Intl.NumberFormat('es-CO').format(n)

export type FilterState = { period: string; product: string; channel: string; segment: string; agency: string }
export const filterOptions = { product: ['Todos los productos', 'Libre inversión', 'Vehículo', 'Libranza'], channel: ['Todos los canales', 'App', 'Web', 'Agencia'], segment: ['Todos los segmentos', 'Preferente', 'Masivo', 'Pyme'], agency: ['Todas las agencias', 'Bogotá Norte', 'Medellín Centro', 'Cali Sur'] }

export function scaleData(filters: FilterState) { const factor = filters.channel === 'App' ? 1.08 : filters.channel === 'Agencia' ? 0.91 : filters.product !== 'Todos los productos' ? 0.86 : 1; return { kpis: kpis.map((k, i) => i === 0 ? { ...k, value: formatNumber(Math.round(128450 * factor)) } : k), trend: trendData.map(d => ({ ...d, visitas: Math.round(d.visitas * factor), solicitudes: Math.round(d.solicitudes * factor), desembolsos: Math.round(d.desembolsos * factor) })) } }
