import { getIconData, iconToSVG, replaceIDs } from '@iconify/utils'
import solar from '@iconify-json/solar/icons.json'

type Props = {
  icon: string
  width?: string | number
  height?: string | number
  className?: string
}

// Matches <iconify-icon> 1.0.7: a 1em box unless sized, sitting on the text baseline.
// Preflight makes svg `display:block; vertical-align:middle`, so inline-block + baseline are restated.
export function Icon({ icon, width, height, className = '' }: Props) {
  const data = getIconData(solar, icon.replace(/^solar:/, ''))
  if (!data) throw new Error(`Unknown Solar icon: ${icon}`)
  const { attributes, body } = iconToSVG(data, {
    ...(width !== undefined && { width }),
    ...(height !== undefined && { height }),
  })
  return (
    <svg
      {...attributes}
      aria-hidden="true"
      className={`inline-block align-baseline ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: replaceIDs(body) }}
    />
  )
}
