import * as classes from 'src/common/classes'
import { getcss } from 'src/common/util'

// const defaultConfig = { precision: 5, stiffness: 100, damping: 94 }
const defaultConfig = { precision: 5 }
const heightConfig = { ...defaultConfig, precision: 50 }
const marginConfig = { ...defaultConfig, precision: 10 }
const paddingConfig = { ...defaultConfig, precision: 10 }
const opacityConfig = { ...defaultConfig, precision: 0.5 }

export function getSlideDownFromStyle() {
  return {
    height: { value: 0, config: heightConfig },
    opacity: { value: 0, config: opacityConfig },
    marginTop: { value: 0, config: marginConfig },
    paddingTop: { value: 0, config: paddingConfig },
    marginBottom: { value: 0, config: marginConfig },
    paddingBottom: { value: 0, config: paddingConfig },
  }
}

export function getDOMOffsetHeight(dom: HTMLElement) {
  dom.classList.add(classes.ANIMATE_INIT)
  const { height } = dom.getBoundingClientRect ? dom.getBoundingClientRect() : {height: 0}
  const styles = {
    height,
    opacity: 1,
    marginTop: getcss(dom, 'margin-top', 0),
    paddingTop: getcss(dom, 'padding-top', 0),
    marginBottom: getcss(dom, 'margin-bottom', 0),
    paddingBottom: getcss(dom, 'padding-bottom', 0),
  }
  dom.classList.remove(classes.ANIMATE_INIT)
  return styles
}

export function getDOMHiddenStyle() {
  return {
    height: 0,
    opacity: 0,
    marginTop: 0,
    paddingTop: 0,
    marginBottom: 0,
    paddingBottom: 0,
  }
}

export function getSlideDownToStyle(dom: HTMLElement, active: boolean = false) {
  if (dom && active) {
    return getDOMOffsetHeight(dom)
  } else {
    return {} as any
  }
}

export function getSlideUpToStyle() {
  return getDOMHiddenStyle()
}

export function getSlideUpFromStyle(dom: HTMLElement, active: boolean = false) {
  if (dom && active) {
    const { height, opacity, marginTop, paddingTop, marginBottom, paddingBottom } = getDOMOffsetHeight(dom)
    return {
      height: { value: height, config: heightConfig },
      opacity: { value: opacity, config: opacityConfig },
      marginTop: { value: marginTop, config: marginConfig },
      paddingTop: { value: paddingTop, config: paddingConfig },
      marginBottom: { value: marginBottom, config: marginConfig },
      paddingBottom: { value: paddingBottom, config: paddingConfig },
    }
  } else {
    return {} as any
  }
}
