const FLAGCDN = 'https://flagcdn.com'

export function loadFlags(): void {
  document.querySelectorAll<HTMLElement>('.badge[data-iso]').forEach(el => {
    const iso = el.dataset.iso
    if (!iso) return
    el.style.backgroundImage = `url("${FLAGCDN}/${iso.toLowerCase()}.svg")`
    el.classList.add('hasflag')
  })
}
