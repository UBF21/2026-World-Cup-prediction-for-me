import { animate, inView, scroll } from 'motion'

const EASE_OUT: [number, number, number, number] = [0.2, 0.8, 0.2, 1]
const SPRING:   [number, number, number, number] = [0.34, 1.56, 0.64, 1]

const FADE_MARGIN    = '-80px'
const PARALLAX_BG    = 80
const PARALLAX_MID   = 120
const PARALLAX_FRONT = 40
const SLIDE_PARALLAX = 20

function fadeIn(target: Element, x = 0, y = 0, delay = 0) {
  animate(
    target as HTMLElement,
    { opacity: [0, 1], x: [x, 0], y: [y, 0] },
    { duration: 0.55, delay, easing: EASE_OUT }
  )
  return () => {}
}

function initFadeAnimations() {
  inView('.fade-up', ({ target }) => {
    const siblings = [...(target.parentElement?.querySelectorAll<HTMLElement>('.fade-up') ?? [target])]
    return fadeIn(target, 0, 28, siblings.indexOf(target as HTMLElement) * 0.06)
  }, { margin: FADE_MARGIN })

  inView('.fade-left',  ({ target }) => fadeIn(target, -24, 0), { margin: '-60px' })
  inView('.fade-right', ({ target }) => fadeIn(target,  24, 0), { margin: '-60px' })

  inView('.scale-in', ({ target }) => {
    animate(target as HTMLElement, { opacity: [0, 1], scale: [0.94, 1] }, { duration: 0.5, easing: EASE_OUT })
    return () => {}
  }, { margin: '-60px' })

  inView('.divider', ({ target }) => {
    animate(target as HTMLElement, { scaleX: [0, 1], opacity: [0, 1] }, { duration: 0.8, easing: EASE_OUT })
    return () => {}
  }, { margin: '-40px' })
}

function initHeroParallax() {
  const hero   = document.querySelector<HTMLElement>('.hero')
  const bg     = document.querySelector<HTMLElement>('.parallax-bg')
  const floats = document.querySelector<HTMLElement>('.hero-floats')
  const front  = document.querySelector<HTMLElement>('.parallax-front')
  if (!hero || !bg) return

  // Native scroll listener — avoids Motion's container positioning requirement
  window.addEventListener('scroll', () => {
    const scrollY    = window.scrollY
    const heroHeight = hero.offsetHeight
    if (scrollY > heroHeight) return
    const p = scrollY / heroHeight
    bg.style.transform = `translateY(${p * PARALLAX_BG}px)`
    if (floats) floats.style.transform = `translateY(${p * PARALLAX_MID}px)`
    if (front)  front.style.transform  = `translateY(${p * PARALLAX_FRONT}px)`
  }, { passive: true })
}

function initSlideParallax() {
  const slider = document.querySelector<HTMLElement>('.why-slider')
  if (!slider) return

  // Track the slider section, not individual slides
  const offset = SLIDE_PARALLAX
  scroll(({ y }) => {
    if (!y) return
    const p = y.progress
    document.querySelectorAll<HTMLElement>('.slide-bg').forEach((bg, i) => {
      const dir = i % 2 === 0 ? 1 : -1
      bg.style.backgroundPositionY = `${50 + p * offset * dir}%`
    })
  }, { target: slider, offset: ['start end', 'end start'] })
}

function initBars() {
  const optaCard = document.getElementById('opta-card')
  if (!optaCard) return

  inView(optaCard, () => {
    document.querySelectorAll<HTMLElement>('.bar-fill').forEach(bar => {
      const w = parseFloat(bar.dataset.w ?? '0')
      animate(bar, { width: ['0%', `${w}%`] }, { duration: 1.1, easing: EASE_OUT })
    })
    animate('.bar-val', { opacity: [0, 1], y: [6, 0] }, { duration: 0.4, delay: 0.3 })
    return () => {}
  }, { margin: FADE_MARGIN })
}

function initCardHover() {
  document.querySelectorAll<HTMLElement>('.card').forEach(card => {
    card.addEventListener('mouseenter', () => animate(card, { y: -4 }, { duration: 0.25, easing: SPRING }))
    card.addEventListener('mouseleave', () => animate(card, { y:  0 }, { duration: 0.20, easing: 'ease-out' }))
  })
}

export function initAnimations(): void {
  initFadeAnimations()
  initHeroParallax()
  initSlideParallax()
  initBars()
  initCardHover()
}
