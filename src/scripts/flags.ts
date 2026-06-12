const FLAGCDN = 'https://flagcdn.com'

function flagUrl(isoCode: string): string {
  return `${FLAGCDN}/${isoCode.toLowerCase()}.svg`
}

function applyFlag(el: HTMLElement, url: string) {
  el.style.backgroundImage = `url("${url}")`
  el.classList.add('hasflag')
}

export async function loadFlags(): Promise<void> {
  const badges = document.querySelectorAll<HTMLElement>('.badge[data-iso]')
  if (!badges.length) return

  // Phase 1: set flagcdn.com immediately — no preload check, no CORS
  badges.forEach(el => applyFlag(el, flagUrl(el.dataset.iso!)))

  // Phase 2: upgrade to restcountries.com SVG (higher quality) where available
  const isos = [...new Set([...badges].map(b => b.dataset.iso!).filter(Boolean))]
  const standard = isos.filter(c => !c.includes('-'))
  if (!standard.length) return

  try {
    const r = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${standard.join(',')}&fields=cca2,flags`
    )
    if (!r.ok) return
    const data = await r.json() as Array<{ cca2: string; flags: { svg?: string } }>
    data.forEach(c => {
      if (!c?.cca2 || !c.flags?.svg) return
      document.querySelectorAll<HTMLElement>(`.badge[data-iso="${c.cca2.toLowerCase()}"]`).forEach(el => {
        applyFlag(el, c.flags.svg!)
      })
    })
  } catch {
    // flagcdn already applied — silent
  }
}
