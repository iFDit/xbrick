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

