const FLAGCDN = 'https://flagcdn.com'

function flagUrl(isoCode: string): string {
  return `${FLAGCDN}/${isoCode.toLowerCase()}.svg`
}

function applyFlag(el: HTMLElement, url: string) {
  const img = new Image()
  img.onload = () => {
    el.style.backgroundImage = `url("${url}")`
    el.classList.add('hasflag')
  }
  img.src = url
}

export async function loadFlags(): Promise<void> {
  const badges = document.querySelectorAll<HTMLElement>('.badge[data-iso]')
  if (!badges.length) return

  // Phase 1: instant load via flagcdn (no CORS, no API call)
  badges.forEach(el => applyFlag(el, flagUrl(el.dataset.iso!)))

  // Phase 2: upgrade to restcountries SVG where available
  const isos = [...new Set([...badges].map(b => b.dataset.iso!).filter(Boolean))]
  const standard = isos.filter(c => !c.includes('-'))

  try {
    const r = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${standard.join(',')}&fields=cca2,flags`
    )
    if (!r.ok) return
    const data = await r.json() as Array<{ cca2: string; flags: { svg?: string; png?: string } }>
    const map: Record<string, string> = {}
    data.forEach(c => {
      if (c?.cca2 && c.flags?.svg) map[c.cca2.toLowerCase()] = c.flags.svg
    })
    badges.forEach(el => {
      const url = map[el.dataset.iso!]
      if (url) applyFlag(el, url)
    })
  } catch {
    // flagcdn already loaded — silent fallback
  }
}
