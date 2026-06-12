export async function loadFlags(): Promise<void> {
  const badges = document.querySelectorAll<HTMLElement>('.badge[data-iso]')
  if (!badges.length) return

  const isos = [...new Set([...badges].map(b => b.dataset.iso!).filter(Boolean))]
  const standard = isos.filter(c => !c.includes('-'))
  const map: Record<string, string> = {}

  try {
    const r = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${standard.join(',')}&fields=cca2,flags`
    )
    if (r.ok) {
      const data = await r.json() as Array<{ cca2: string; flags: { svg?: string; png?: string } }>
      data.forEach(c => {
        if (c?.cca2 && c.flags) {
          map[c.cca2.toLowerCase()] = c.flags.svg || c.flags.png || ''
        }
      })
    }
  } catch {
    // offline → fallback below
  }

  // Fill gaps and subdivisions via flagcdn
  isos.forEach(c => {
    if (!map[c]) map[c] = `https://flagcdn.com/${c}.svg`
  })

  badges.forEach(el => {
    const url = map[el.dataset.iso!]
    if (!url) return
    const img = new Image()
    img.onload = () => {
      el.style.backgroundImage = `url("${url}")`
      el.classList.add('hasflag')
    }
    img.onerror = () => {
      const fallback = `https://flagcdn.com/${el.dataset.iso}.svg`
      if (url !== fallback) {
        el.style.backgroundImage = `url("${fallback}")`
        el.classList.add('hasflag')
      }
    }
    img.src = url
  })
}
