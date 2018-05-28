import * as React from 'react'
import { IProps } from 'src/common/props'
import { get, omit, isObject } from 'lodash'
import { spring, Motion, presets, PlainStyle } from 'react-motion'

export interface IAnimateProps extends IProps {
  /**
   * Set transition style start props.
   */
  from?: { [prop: string]: number | { value: number, config: {[props: string]: number} } }

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
}

export class Animate extends React.Component<IAnimateProps, any> {

  public static getDerivedStateFromProps(props: IAnimateProps) {
    return {
      [props.trigger!]: !!props[props.trigger!],
    }
  }

  public static defaultProps = {
    tag: 'div',
    from: {},
    to: {},
    trigger: 'show',
  }

  public state = {
    [this.props.trigger!]: !!this.props[this.props.trigger!],
  }

  public render() {
    const { from, to, trigger, afterStateChange: onRest, ...rest } = this.props
    const Tag = this.props.tag!
    const defaultStyle = this.createDefaultStyle()
    const style = this.createStyle()
    const motionProps = { defaultStyle, style, onRest }

    return (
      <Motion {...motionProps} key={JSON.stringify(defaultStyle)}>
        {(interpolatingStyle: PlainStyle) => (
          // custom render component
          <Tag {...omit(rest, [trigger!, 'tag'])} style={{ ...(isObject(rest.style) ? rest.style : {}), ...interpolatingStyle }}>
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
    const { from, to, trigger } = this.props
    const show = this.state[trigger!]
    const fromVal = isObject(from![key]) ? (from![key] as any).value : from![key]
    const config =  isObject(from![key]) ? (from![key] as any).config : presets.noWobble
    return { [key]: spring(show ? get(to, key, fromVal) : fromVal, config) }
  }
}
