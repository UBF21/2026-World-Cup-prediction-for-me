const FLAGCDN = 'https://flagcdn.com'
const RESTCOUNTRIES = 'https://restcountries.com/v3.1/alpha'

export function loadFlags(): void {
  const badges = [...document.querySelectorAll<HTMLElement>('.badge[data-iso]')]
  if (!badges.length) return

  // Paso 1: flagcdn.com inmediato (sin CORS, siempre funciona)
  badges.forEach(el => {
    const iso = el.dataset.iso
    if (!iso) return
    el.style.backgroundImage = `url("${FLAGCDN}/${iso.toLowerCase()}.svg")`
    el.style.backgroundSize = 'cover'
    el.style.backgroundPosition = 'center'
    el.classList.add('hasflag')
  })

  // Paso 2: restcountries.com en segundo plano — reemplaza con SVGs oficiales
  const codes = [...new Set(
    badges.map(el => el.dataset.iso).filter((c): c is string => Boolean(c))
  )]
  fetch(`${RESTCOUNTRIES}?codes=${codes.join(',')}&fields=cca2,flags`)
    .then(r => (r.ok ? r.json() : Promise.reject()))
    .then((data: Array<{ cca2: string; flags: { svg: string } }>) => {
      const map: Record<string, string> = {}
      data.forEach(c => { map[c.cca2.toLowerCase()] = c.flags.svg })
      badges.forEach(el => {
        const iso = el.dataset.iso?.toLowerCase()
        if (iso && map[iso]) el.style.backgroundImage = `url("${map[iso]}")`
      })
    })
    .catch(() => { /* flagcdn.com se mantiene como fallback */ })
}
