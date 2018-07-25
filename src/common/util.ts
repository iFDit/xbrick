/**
 * Get HTMLElement css value.
 * @param dom HTMLElement
 * @param props CSS Property name
 * @param defaultValue 
 * @return {any} CSS Value
 */ 
export function getcss(dom: HTMLElement, props: string, defaultValue: any = null) {
  if (!dom) { return }
  const value = getComputedStyle(dom).getPropertyValue(props)
  const returnValue = typeof value === 'boolean' ? value : (value || defaultValue)

  return typeof defaultValue === 'string' ?
    String(returnValue)
    : typeof defaultValue === 'number' ?
      parseInt(returnValue, 10)
      : typeof defaultValue === 'boolean' ?
        !!returnValue
        : returnValue
}

export function uniqId() {
  return new Date().getTime() + String(Math.random() * new Date().getTime())
}

export function mergeCall(fn1: any, fn2: any) {
  return () => {
    fn1 && fn1()
    fn2 && fn2()
  }
}

// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
export function getScrollbarWidth() {
  const div = document.createElement('div')
  div.style.position = 'absolute'
  div.style.top = '-99999px'
  div.style.width = '50px'
  div.style.height = '50px'
  div.style.overflow = 'scroll'
  document.body.appendChild(div)
  const scrollbarWidth = div.offsetWidth - div.clientWidth
  document.body.removeChild(div)
  return scrollbarWidth
}

export function setScrollbarWidth(padding: number) {
  document.body.style.paddingRight = padding > 0 ? `${padding}px` : null
}

export function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth
}

export function conditionallyUpdateScrollbar() {
  const scrollbarWidth = getScrollbarWidth()
  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433
  const fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0] as HTMLElement
  const bodyPadding = fixedContent ? parseInt(
    fixedContent.style.paddingRight || '0',
    10,
  ) : 0

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth)
  }
}

export function getOriginalBodyPadding() {
  const style = window.getComputedStyle(document.body, null)
  return parseInt(
    style ? style.getPropertyValue('padding-right') : '0',
    10,
  )
}
