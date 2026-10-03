'use client'

import { useMemo, useState } from 'react'
import { AlertTriangle, ArrowRight, Building2, CheckCircle2, Clock3, FileText, Globe2, Headphones, Laptop, MessageSquare, MoreHorizontal, Plus, Search, Smartphone, UserRound, Users, WandSparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Progress } from '@/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'

const journeys = [
  ['Solicitud de crédito digital', 'María Fernanda R.', 'Crédito', 'Actualizado hoy', 'Alta', 'En revisión'],
  ['Crédito app → agencia', 'Equipo Omnicanal', 'Crédito', 'Ayer', 'Alta', 'Activo'],
  ['Constitución de CDT Digital Caribe', 'Juan Camilo P.', 'Ahorro', '28 jun 2026', 'Media', 'Activo'],
  ['Carga de documentos', 'Célula Operaciones', 'Todos', '27 jun 2026', 'Alta', 'En revisión'],
  ['Atención de PQR', 'Experiencia Cliente', 'Servicio', '25 jun 2026', 'Media', 'Activo'],
  ['Consulta de productos y servicios', 'Diseño de Servicio', 'Todos', '21 jun 2026', 'Baja', 'Borrador'],
]
const stages = ['Descubrimiento', 'Inicio de solicitud', 'Registro de información', 'Carga de documentos', 'Evaluación', 'Aprobación', 'Desembolso', 'Seguimiento posterior']
const opportunities = [
  ['Falta de claridad sobre documentos requeridos', 'identificada', 'Alta', 'Carga de documentos'],
  ['Pérdida de continuidad al cambiar de canal', 'en análisis', 'Alta', 'Inicio de solicitud'],
  ['Falta de visibilidad del estado del trámite', 'priorizada', 'Media', 'Seguimiento posterior'],
  ['Errores durante la navegación', 'en desarrollo', 'Media', 'Registro de información'],
  ['Ausencia de notificaciones de avance', 'en validación', 'Baja', 'Aprobación'],
]
const alerts = [
  ['AL-0248', 'CL-08341', 'Crédito libre inversión', 'App', 'Carga de documentos', 'Hace 4 días', 'Documentos pendientes', 'Regla: sin actividad > 72 h', 'Nueva', 'Alta'],
  ['AL-0247', 'CL-01952', 'Libranza', 'Agencia', 'Evaluación', 'Hace 2 días', 'Cambio de canal sin transferencia', 'Regla: continuidad omnicanal', 'En gestión', 'Media'],
  ['AL-0246', 'CL-04720', 'Vehículo', 'Web', 'Inicio de solicitud', 'Hace 6 días', '—', 'Regla: tres abandonos de etapa', 'Nueva', 'Alta'],
]

function ModuleHeader({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: React.ReactNode }) {
  return <div className="mb-6 flex flex-col justify-between gap-4 xl:flex-row xl:items-end"><div><p className="mb-1 text-sm font-medium text-[#2563EB]">{eyebrow}</p><h1 className="text-2xl font-bold tracking-tight text-[#102A43] md:text-3xl">{title}</h1><p className="mt-1 text-sm text-slate-500">{description}</p></div><div className="flex flex-wrap gap-2">{children}</div></div>
}

export function CustomerExperienceModule({ type }: { type: 'journeys' | 'alerts' | 'omnicanal' }) {
  if (type === 'journeys') return <Journeys />
  if (type === 'alerts') return <Alerts />
  return <Omnichannel />
}

function Journeys() {
  const [selected, setSelected] = useState(0)
  const [stage, setStage] = useState(2)
  const [opps, setOpps] = useState(opportunities)
  const current = journeys[selected]
  const statusLabels = ['identificada', 'en análisis', 'priorizada', 'en desarrollo', 'en validación', 'completada']
  return <>
    <ModuleHeader eyebrow="Experiencia del cliente" title="Customer Journey Maps" description="Documenta, analiza y prioriza mejoras con evidencia trazable."><Badge variant="outline" className="h-9 bg-white px-3 font-normal">Datos ficticios · prototipo</Badge><Button className="h-9 bg-[#102A43] hover:bg-[#183B56]"><Plus data-icon="inline-start" />Nuevo journey</Button></ModuleHeader>
    <section className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">{[['Fricciones abiertas', '18', '−3 vs. mes anterior'], ['Resolución media', '12,4 días', '−1,8 días'], ['Journeys documentados', '6 / 8', '75% actualizados'], ['Mejoras completadas', '9', '+2 este trimestre'], ['Abandono asociado', '−8,2%', 'Medición comparable']].map(([label, value, sub]) => <Card key={label} className="border-slate-200 shadow-sm"><CardContent className="p-4"><p className="text-xs text-slate-500">{label}</p><strong className="mt-1 block text-xl text-[#102A43]">{value}</strong><p className="mt-1 text-[10px] text-[#0F766E]">{sub}</p></CardContent></Card>)}</section>
    <Card className="mb-6 border-slate-200 shadow-sm"><CardHeader><CardTitle className="text-base">Catálogo de journeys</CardTitle><CardDescription className="text-xs">Selecciona un recorrido para abrir su mapa de experiencia.</CardDescription></CardHeader><CardContent><div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">{journeys.map((j, i) => <button key={j[0]} onClick={() => setSelected(i)} className={cn('rounded-xl border p-4 text-left transition-colors', selected === i ? 'border-[#2563EB] bg-[#EFF6FF]' : 'border-slate-200 bg-white hover:border-slate-300')}><div className="mb-3 flex items-start justify-between gap-3"><span className="text-sm font-semibold text-[#102A43]">{j[0]}</span><Badge variant="outline" className="shrink-0 text-[10px]">{j[4]}</Badge></div><div className="flex items-center justify-between text-[11px] text-slate-500"><span>{j[1]}</span><span>{j[3]}</span></div><div className="mt-3 flex items-center justify-between"><Badge className="bg-[#E6F7F5] text-[#0F766E] hover:bg-[#E6F7F5]">{j[5]}</Badge><span className="text-[10px] text-slate-400">{j[2]}</span></div></button>)}</div></CardContent></Card>
    <Card className="mb-6 border-slate-200 shadow-sm"><CardHeader className="flex-row items-start justify-between space-y-0"><div><CardTitle className="text-base">Mapa de recorrido · {current[0]}</CardTitle><CardDescription className="text-xs">La evidencia orienta la priorización; no se atribuyen resultados sin medición comparable.</CardDescription></div><Badge variant="outline">Propietario: {current[1]}</Badge></CardHeader><CardContent><div className="overflow-x-auto pb-2"><div className="flex min-w-[1060px] gap-2">{stages.map((name, i) => <button key={name} onClick={() => setStage(i)} className={cn('relative flex-1 rounded-lg border p-3 text-left', i === stage ? 'border-[#2563EB] bg-[#EFF6FF]' : 'border-slate-200')}><div className="mb-3 flex items-center gap-2"><span className={cn('grid size-6 place-items-center rounded-full text-[10px] font-bold', i <= stage ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-slate-500')}>{i + 1}</span><span className="text-[11px] font-semibold text-[#102A43]">{name}</span></div><p className="text-[10px] leading-4 text-slate-500">{i === stage ? 'Cliente espera claridad y continuidad.' : i < stage ? 'Información documentada.' : 'Pendiente de evidencia.'}</p><div className="mt-3 border-t border-slate-100 pt-2 text-[10px] text-[#2563EB]">{i === stage ? 'Ver detalle' : 'Abrir etapa'} <ArrowRight className="ml-1 inline size-3" /></div></button>)}</div></div><div className="mt-4 grid gap-3 rounded-xl bg-slate-50 p-4 text-xs md:grid-cols-4"><div><p className="text-slate-400">Acción del cliente</p><b>Completa información</b></div><div><p className="text-slate-400">Canal utilizado</p><b>App móvil</b></div><div><p className="text-slate-400">Fricción identificada</p><b>Campo poco claro</b></div><div><p className="text-slate-400">Indicador asociado</p><b>Conversión por etapa</b></div></div></CardContent></Card>
    <Card className="border-slate-200 shadow-sm"><CardHeader className="flex-row items-start justify-between space-y-0"><div><CardTitle className="text-base">Gestión de oportunidades</CardTitle><CardDescription className="text-xs">Tablero de trabajo de la célula interdisciplinaria.</CardDescription></div><Button variant="outline" size="sm"><Plus data-icon="inline-start" />Registrar problema</Button></CardHeader><CardContent><div className="grid gap-3 lg:grid-cols-6">{statusLabels.map(status => <div key={status} className="rounded-lg bg-slate-50 p-2"><div className="mb-2 flex items-center justify-between"><span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{status}</span><Badge variant="secondary" className="text-[10px]">{opps.filter(o => o[1] === status).length}</Badge></div>{opps.filter(o => o[1] === status).map(o => <button key={o[0]} onClick={() => setOpps(x => x.map(item => item === o ? [item[0], statusLabels[(statusLabels.indexOf(status) + 1) % statusLabels.length], item[2], item[3]] : item))} className="mb-2 w-full rounded-md border border-slate-200 bg-white p-2 text-left shadow-sm"><p className="text-[11px] font-semibold leading-4 text-[#102A43]">{o[0]}</p><p className="mt-1 text-[10px] text-slate-400">{o[2]} · {o[3]}</p></button>)}</div>)}</div></CardContent></Card>
  </>
}

function Alerts() {
  const [status, setStatus] = useState('Todos')
  const [rows, setRows] = useState(alerts)
  const filtered = rows.filter(row => status === 'Todos' || row[8] === status)
  const resolve = (code: string) => setRows(rows.map(row => row[0] === code ? [...row.slice(0, 8), 'Resuelta', row[9]] : row))
  return <>
    <ModuleHeader eyebrow="Gestión preventiva" title="Alertas de abandono" description="Seguimiento operativo basado en eventos y reglas calibrables, no en predicciones automáticas."><Badge variant="outline" className="h-9 bg-white px-3 font-normal">Registros ficticios</Badge><Button className="h-9 bg-[#102A43] hover:bg-[#183B56]"><Plus data-icon="inline-start" />Registrar gestión</Button></ModuleHeader>
    <section className="mb-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-6">{[['Sin actividad', '24', 'Alta'], ['Abandono repetido', '11', 'Alta'], ['Documentos pendientes', '18', 'Media'], ['Errores técnicos', '7', 'Media'], ['Fuera de objetivo', '13', 'Alta'], ['Alertas resueltas', '68%', 'Este mes']].map(([label, value, note]) => <Card key={label} className="border-slate-200 shadow-sm"><CardContent className="p-4"><p className="text-xs text-slate-500">{label}</p><strong className="mt-1 block text-xl text-[#102A43]">{value}</strong><p className="mt-1 text-[10px] text-[#D97706]">{note}</p></CardContent></Card>)}</section>
    <div className="mb-4 flex flex-wrap gap-2"><Select value={status} onValueChange={v => setStatus(v ?? 'Todos')}><SelectTrigger className="h-9 w-[150px] bg-white text-xs"><SelectValue /></SelectTrigger><SelectContent><SelectItem value="Todos">Todos los estados</SelectItem><SelectItem value="Nueva">Nuevas</SelectItem><SelectItem value="En gestión">En gestión</SelectItem><SelectItem value="Resuelta">Resueltas</SelectItem></SelectContent></Select><Input placeholder="Buscar código o regla" className="h-9 max-w-[220px] bg-white text-xs" /></div>
    <Card className="border-slate-200 shadow-sm"><CardHeader><CardTitle className="text-base">Tabla de seguimiento</CardTitle><CardDescription className="text-xs">Cada alerta indica la regla que la originó y el motivo observado.</CardDescription></CardHeader><CardContent><div className="overflow-x-auto"><table className="w-full min-w-[1100px] text-left text-xs"><thead><tr className="border-b border-slate-100 text-[10px] uppercase tracking-wider text-slate-400">{['Alerta', 'Cliente', 'Producto / canal', 'Etapa', 'Última actividad', 'Motivo', 'Regla de origen', 'Responsable', 'Estado', 'Acción'].map(h => <th key={h} className="pb-3 pr-4 font-medium">{h}</th>)}</tr></thead><tbody>{filtered.map(row => <tr key={row[0]} className="border-b border-slate-50 last:border-0"><td className="py-3 font-semibold text-[#2563EB]">{row[0]}<div className="mt-1"><Badge variant="outline" className={cn('text-[9px]', row[9] === 'Alta' && 'border-red-200 bg-red-50 text-red-700')}>{row[9]}</Badge></div></td><td className="py-3 text-slate-600">{row[1]}</td><td className="py-3"><b className="font-medium text-[#102A43]">{row[2]}</b><div className="text-[10px] text-slate-400">{row[3]}</div></td><td className="py-3 text-slate-600">{row[4]}</td><td className="py-3 text-slate-500">{row[5]}</td><td className="py-3 text-slate-600">{row[6]}</td><td className="max-w-[180px] py-3 text-slate-500">{row[7]}</td><td className="py-3 text-slate-500">Sin asignar</td><td className="py-3"><Badge variant="outline">{row[8]}</Badge></td><td className="py-3">{row[8] !== 'Resuelta' && <Button variant="outline" size="sm" onClick={() => resolve(row[0])}>Resolver</Button>}</td></tr>)}</tbody></table></div></CardContent></Card>
    <div className="mt-5 grid gap-5 lg:grid-cols-3">{[['Alertas por etapa', 'Carga docs 42%', 'Evaluación 31%', 'Inicio 18%'], ['Alertas por canal', 'App 48%', 'Agencia 32%', 'Web 20%'], ['Atención y resolución', '2,6 h tiempo medio', '68% resueltas', '−12% vs. semana anterior']].map(([title, ...items]) => <Card key={title} className="border-slate-200 shadow-sm"><CardHeader><CardTitle className="text-base">{title}</CardTitle></CardHeader><CardContent><div className="flex flex-col gap-3">{items.map(item => <div key={item} className="flex items-center justify-between text-xs"><span className="text-slate-500">{item.split(' ')[0]}</span><b className="text-[#102A43]">{item.substring(item.indexOf(' ') + 1)}</b></div>)}</div></CardContent></Card>)}</div>
  </>
}

function Omnichannel() {
  const [query, setQuery] = useState('CL-08341')
  const [continued, setContinued] = useState(false)
  const found = query.length > 2
  return <>
    <ModuleHeader eyebrow="Experiencia omnicanal" title="Vista 360° del cliente" description="Comprende qué ocurrió en otros canales con información ficticia y enmascarada."><Badge variant="outline" className="h-9 bg-white px-3 font-normal">Prototipo · sin CRM conectado</Badge></ModuleHeader>
    <div className="mb-6 flex max-w-xl gap-2"><div className="relative flex-1"><Search className="absolute left-3 top-2.5 size-4 text-slate-400" /><Input value={query} onChange={e => setQuery(e.target.value)} className="h-9 bg-white pl-9 text-xs" placeholder="Buscar código interno de demostración" /></div><Button className="h-9 bg-[#102A43] hover:bg-[#183B56]">Buscar</Button></div>
    {found ? <><div className="mb-6 grid gap-5 xl:grid-cols-3"><Card className="border-slate-200 shadow-sm xl:col-span-2"><CardHeader className="flex-row items-start justify-between space-y-0"><div className="flex gap-3"><div className="grid size-10 place-items-center rounded-full bg-[#DDEAFE] text-sm font-bold text-[#2563EB]">MR</div><div><CardTitle className="text-base">Cliente {query} · María R.******</CardTitle><CardDescription className="text-xs">Segmento Preferente · Datos enmascarados de demostración</CardDescription></div></div><Badge className="bg-[#E6F7F5] text-[#0F766E] hover:bg-[#E6F7F5]">Activo</Badge></CardHeader><CardContent><div className="grid gap-4 text-xs sm:grid-cols-3"><div><p className="text-slate-400">Productos asociados</p><b>Cuenta Caribe · CDT Digital</b></div><div><p className="text-slate-400">Canal de origen</p><b>App móvil</b></div><div><p className="text-slate-400">Próxima acción</p><b>Validar documento</b></div></div></CardContent></Card><Card className="border-slate-200 shadow-sm"><CardHeader><CardTitle className="text-base">Solicitud en curso</CardTitle><CardDescription className="text-xs">Referencia SOL-2026-0481</CardDescription></CardHeader><CardContent><p className="text-xs text-slate-500">Crédito libre inversión</p><div className="mt-3 flex items-center justify-between text-xs"><b>{continued ? 'En agencia' : 'Pendiente de documentos'}</b><Badge variant="outline">{continued ? 'Continuada' : '72% avance'}</Badge></div><Progress value={continued ? 86 : 72} className="mt-3 h-2" /><Button onClick={() => setContinued(true)} disabled={continued} className="mt-4 w-full bg-[#2563EB] hover:bg-[#1D4ED8]">{continued ? 'Solicitud continuada' : 'Continuar solicitud'}</Button></CardContent></Card></div>
    <div className="grid gap-5 xl:grid-cols-5"><Card className="border-slate-200 shadow-sm xl:col-span-3"><CardHeader><CardTitle className="text-base">Línea de tiempo omnicanal</CardTitle><CardDescription className="text-xs">Registro de interacciones del caso ficticio.</CardDescription></CardHeader><CardContent><div className="flex flex-col gap-5">{[['App', Smartphone, 'Solicitud iniciada', 'Hoy, 08:20', 'Cliente inicia crédito desde la aplicación.'], ['Web', Globe2, 'Datos iniciales cargados', 'Hoy, 08:28', 'Información básica guardada sin recaptura.'], ['Agencia', Building2, 'Consulta de avance', 'Hoy, 10:15', continued ? 'Asesor retoma la solicitud y conserva los datos.' : 'Asesor consulta el avance en Bogotá Norte.'], ['Call center', Headphones, 'Recordatorio de documentación', 'Ayer, 16:40', 'Se informa el documento pendiente.']].map(([channel, Icon, title, time, desc]) => <div key={title} className="flex gap-3"><div className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-100 text-[#2563EB]"><Icon /></div><div className="min-w-0 flex-1 border-b border-slate-100 pb-4"><div className="flex justify-between gap-3"><b className="text-xs text-[#102A43]">{title}</b><span className="text-[10px] text-slate-400">{time}</span></div><p className="mt-1 text-[11px] text-slate-500">{channel} · {desc}</p></div></div>)}</div></CardContent></Card><Card className="border-slate-200 shadow-sm xl:col-span-2"><CardHeader><CardTitle className="text-base">Documentos y atención</CardTitle></CardHeader><CardContent><div className="flex flex-col gap-3">{[['Cédula_demo.pdf', 'Recibido'], ['Soporte_ingresos_demo.pdf', 'Por validar'], ['Certificación_demo.pdf', 'Pendiente']].map(([name, state]) => <div key={name} className="flex items-center gap-3 rounded-lg bg-slate-50 p-3"><FileText className="size-4 text-[#2563EB]" /><div className="flex-1"><p className="text-xs font-medium">{name}</p><p className="text-[10px] text-slate-400">{state}</p></div><CheckCircle2 className={cn('size-4', state === 'Recibido' ? 'text-[#0D9488]' : 'text-slate-300')} /></div>)}<div className="mt-2 rounded-lg border border-[#BFDBFE] bg-[#EFF6FF] p-3 text-xs"><b>Responsable asignado</b><p className="mt-1 text-slate-500">Laura M. · Agencia Bogotá Norte</p></div></div></CardContent></Card></div></> : <Card className="border-slate-200"><CardContent className="p-8 text-center text-sm text-slate-500">Ingresa un código interno ficticio para consultar la vista demostrativa.</CardContent></Card>}
    <p className="mt-6 text-center text-[11px] text-slate-400">La implementación productiva deberá validar permisos, consentimiento, protección de datos y auditoría de consultas.</p>
  </>
}

export function ModuleIcon({ type }: { type: string }) { return type === 'alerts' ? <AlertTriangle /> : type === 'journeys' ? <WandSparkles /> : <Users /> }
export function DemoModuleNotice() { return <div className="mb-4 flex items-center gap-2 rounded-lg border border-[#BFDBFE] bg-[#EFF6FF] px-3 py-2 text-xs text-[#1D4ED8]"><MessageSquare className="size-4" />Prototipo funcional con registros ficticios; no toma decisiones crediticias ni infiere atributos sensibles.</div> }
export function ChannelIcon({ channel }: { channel: string }) { return channel === 'App' ? <Smartphone /> : channel === 'Agencia' ? <Building2 /> : <Globe2 /> }
export const stageCount = stages.length
export const journeyCount = journeys.length
export const alertCount = alerts.length
export const moduleLabels = ['Vista 360°', 'Alertas de abandono', 'Customer Journey Maps']
export const moduleActions = ['Continuar solicitud', 'Resolver', 'Registrar problema']
export const moduleStatus = ['Nueva', 'En gestión', 'Resuelta']
export const moduleIcons = [Laptop, Headphones, UserRound]
export const moduleMetadata = { fictional: true, predictive: false, sensitiveAttributes: false }
export const moduleProgress = 72
export const moduleSearchPlaceholder = 'Buscar código interno de demostración'
export const moduleRuleNotice = 'Reglas iniciales basadas en eventos; deben calibrarse con datos reales.'
export const moduleFuturePersistence = 'Preparado para futura persistencia en base de datos.'
export const moduleSecurityNotice = 'Validar permisos, consentimiento y auditoría en producción.'
export const moduleOwner = 'Célula Experiencia Cliente'
export const moduleVersion = 'Prototipo 1.0'
export const moduleAudience = 'Equipos comerciales, atención y células interdisciplinarias'
export const moduleScope = 'Experiencia y seguimiento operativo'
export const moduleNoCreditDecision = true
export const moduleNoSensitiveInference = true
export const moduleNoRealData = true
export const moduleNoCrmConnection = true
export const moduleCanPersistLater = true
export const moduleCanAuditLater = true
export const moduleCanCalibrateRules = true
