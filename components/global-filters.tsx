'use client'

import { Filter, RotateCcw } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { filterOptions, type FilterState } from '@/lib/demo-data'

type GlobalFiltersProps = {
  filters: FilterState
  onChange: (key: keyof FilterState, value: string) => void
  onReset: () => void
}

const labels: Record<keyof FilterState, string> = {
  period: 'Periodo',
  product: 'Producto',
  channel: 'Canal',
  segment: 'Segmento',
  agency: 'Agencia',
}

export function GlobalFilters({ filters, onChange, onReset }: GlobalFiltersProps) {
  const activeCount = Object.entries(filters).filter(([key, value]) => value !== (key === 'period' ? '30 días' : filterOptions[key as keyof typeof filterOptions]?.[0])).length

  return (
    <section aria-label="Filtros globales" className="mb-6 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Filter className="size-4 text-[#2563EB]" aria-hidden="true" />
          <span className="text-xs font-semibold text-[#102A43]">Filtros globales</span>
          <Badge variant="secondary" className={cn('text-[10px]', activeCount === 0 && 'text-slate-500')}>{activeCount ? `${activeCount} activos` : 'Sin filtros adicionales'}</Badge>
        </div>
        <Button type="button" variant="ghost" size="sm" onClick={onReset} disabled={activeCount === 0} className="h-7 text-xs text-slate-500">
          <RotateCcw data-icon="inline-start" />Limpiar filtros
        </Button>
      </div>
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {(Object.keys(labels) as (keyof FilterState)[]).map((key) => {
          const values = key === 'period' ? ['7 días', '30 días', '90 días', 'Personalizado'] : filterOptions[key]
          return <Select key={key} value={filters[key]} onValueChange={(value) => onChange(key, value ?? '')}>
            <SelectTrigger aria-label={labels[key]} className="h-9 bg-slate-50 text-xs"><SelectValue placeholder={labels[key]} /></SelectTrigger>
            <SelectContent>{values.map((value) => <SelectItem key={value} value={value}>{value}</SelectItem>)}</SelectContent>
          </Select>
        })}
      </div>
      <p className="mt-2 text-[10px] text-slate-400">Aplicados a las métricas y visualizaciones disponibles · Datos simulados de demostración</p>
    </section>
  )
}
