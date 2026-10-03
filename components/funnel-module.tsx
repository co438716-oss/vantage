'use client'
import { useState } from 'react'
import { Download, TriangleAlert } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { funnel, type FilterState } from '@/lib/demo-data'

export function FunnelModule({ filters }: { filters: FilterState }) {
  const [selected, setSelected] = useState(1)
  const scale = filters.channel === 'App' ? 1.08 : filters.channel === 'Agencia' ? 0.91 : 1
  const exportCsv = () => {
    const csv = [['Etapa', 'Usuarios'], ...funnel.map(stage => [stage.label, Math.round(stage.value * scale)])].map(row => row.join(',')).join('\n')
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); const link = document.createElement('a'); link.href = url; link.download = 'embudo-financaribe.csv'; link.click(); URL.revokeObjectURL(url)
  }
  return <div className="flex flex-col gap-5"><div className="flex items-center justify-between"><div><p className="text-sm text-[#2563EB]">Analítica de recorrido</p><h2 className="text-2xl font-bold">Embudo de Conversión Digital</h2><p className="text-sm text-slate-500">Cohorte mensual simulada · 10.000 visitantes iniciales</p></div><Button onClick={exportCsv} variant="outline"><Download data-icon="inline-start" />Exportar CSV</Button></div><Alert className="border-[#FCD34D] bg-[#FFFBEB]"><TriangleAlert className="size-4" /><AlertTitle>Área que requiere investigación</AlertTitle><AlertDescription>El tramo entre visita y carga de documentos requiere análisis posterior; no se afirma una causa comprobada.</AlertDescription></Alert><Card><CardHeader><CardTitle>Embudo principal</CardTitle></CardHeader><CardContent><div className="flex flex-col gap-3">{funnel.map((stage, index) => <button key={stage.label} onClick={() => setSelected(index)} className="flex items-center gap-3 text-left"><span className={`rounded-r-lg px-4 py-3 text-xs font-semibold text-white ${selected === index ? 'ring-2 ring-[#F59E0B]' : ''}`} style={{ width: `${Math.max(stage.value / funnel[0].value * 100, 26)}%`, backgroundColor: index < 2 ? '#2563EB' : '#0D9488' }}>{stage.label}</span><b className="text-xs">{Math.round(stage.value * scale).toLocaleString('es-CO')}</b></button>)}</div><div className="mt-5 rounded-lg bg-[#F0FDFA] p-3 text-sm font-semibold text-[#0F766E]">Conversión final: 26% · Abandono acumulado: 74%</div><p className="mt-4 text-xs text-slate-500">Etapa seleccionada: {funnel[selected].label}</p></CardContent></Card></div>
}
