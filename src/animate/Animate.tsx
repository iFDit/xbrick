import React from 'react'
import { IProps } from 'src/common/props'
import { get, omit, isObject } from 'src/common/minLodash'
import { spring, Motion, presets, PlainStyle } from 'react-motion'
import { formatTransformProps } from 'src/common/util'

export interface IAnimateProps extends IProps {
  /**
   * Set transition style start props.
   */
  from?: { [prop: string]: number | { value: number, transition?: boolean, config?: {[props: string]: any} } }

  /**
   * Set transition style end props.
   */
  to?: { [prop: string]: number }

  /**
   * Custom render tag.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * Set the state trigger value for animation.
   * @default show
   */
  trigger?: string

  /**
   * Handle invoked afer state change.
   */
  afterStateChange? (): void

  /**
   * toggle transition.
   * @default true
   */
  transition?: boolean
}

export class Animate extends React.Component<IAnimateProps, any> {

  public static getDerivedStateFromProps(props: IAnimateProps) {
    return {
      [props.trigger!]: !!props[props.trigger!],
    }
  }

  public static displayName = 'xbrick.Animate'

  public static defaultProps = {
    tag: 'div',
    from: {},
    to: {},
    trigger: 'show',
    transition: true,
  }

  public state = {
    [this.props.trigger!]: !!this.props[this.props.trigger!],
  }

  public render() {
    const { from, to, trigger, afterStateChange: onRest, ...others } = this.props
    const Tag = this.props.tag!
    const defaultStyle = this.createDefaultStyle()
    const style = this.createStyle()
    const motionProps = { defaultStyle, style, onRest }
    return (
      <Motion {...motionProps} key={`${JSON.stringify(defaultStyle)}${JSON.stringify(style)}`}>
        {(interpolatingStyle: PlainStyle) => (
          // custom render component
          <Tag
            {...omit(others, [trigger!, 'tag', 'transition'])}
            style={{ ...(isObject(others.style) ? others.style : {}), ...formatTransformProps(interpolatingStyle) }}
          >
            {this.props.children}
          </Tag>
        )}
      </Motion>
    )
  }

  private createDefaultStyle() {
    const { from } = this.props
    const styleKeys = Object.keys(from!)
    return styleKeys
      .map(key => ({[key]: isObject(from![key]) ? (from![key] as any).value : from![key]}))
      .reduce((initial, next) => ({...initial, ...next}), {})
  }

  private createStyle() {
    const { from } = this.props
    const styleKeys = Object.keys(from!)

    return styleKeys
      .map(this.createSpring)
      .reduce((initial, next) => ({...initial, ...next}), {})
  }

  private createSpring = (key: string) => {
    const { from, to, trigger, transition } = this.props
    const show = this.state[trigger!]
    const fromVal = isObject(from![key]) ? (from![key] as any).value : from![key]
    const config =  isObject(from![key]) ? (from![key] as any).config : presets.noWobble
    const propTransition = isObject(from![key]) ? (from![key] as any).transition : true
    const finalValue = show ? get(to, key, fromVal) : fromVal
    const tr = propTransition == null ? transition : propTransition

    return { [key]: tr ? spring(finalValue, config) : finalValue }
  }
}
