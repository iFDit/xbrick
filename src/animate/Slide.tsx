import * as React from 'react'
import { SlideDown } from 'src/animate/SlideDown'
import { SlideUp } from 'src/animate/SlideUp'
import { IProps } from 'src/common/props'
import { get, omit } from 'lodash'

export interface ISlideProps extends IProps {
  /**
   * initial hidden or showed(uncontrol component).
   * @default false
   */
  defaultOpen?: boolean

  /**
   * control component show/hide.
   */
  open?: boolean

  /**
   * Handle invoked afer state change.
   */
  afterStateChange? (show: boolean): void

  /**
   * render props.
   * @param props 
   */
  children?(props: {slidedown: any, slideup: any}): React.ReactNode
}

export class Slide extends React.Component<ISlideProps> {
  static displayName = 'xbrick.Slide'
  static defaultProps = {
    defaultOpen: false,
    tag: 'div',
  }

  static getDerivedStateFromProps(props: ISlideProps, state: any) {
    const open = get(props, 'open', props.defaultOpen)
    if (state.open !== open) {
      const nextState = {...state}
      if (props.open != null) {
        nextState.active = true
      } else {
        Reflect.deleteProperty(nextState, 'active')
        nextState.defaultActive = true
      }
      return { ...nextState }
    }
    return state
  }

  public state = {
    open: !!get(this.props, 'open', this.props.defaultOpen),
    active: this.props.open ? false : void 0,
    defaultActive: false,
  }

  render() {
    const { children, open: propsOpen, defaultOpen, ...others } = this.props
    const { open, active, defaultActive } = this.state
    const Wrap = open ? SlideUp : SlideDown
    const noop = () => {/**/}
    const nextProps = omit(others, ['afterStateChange', 'show'])
    return (
      <Wrap {...nextProps} afterStateChange={this.handleAfterStateChange} active={active} defaultActive={defaultActive}>
        {(slideFn: any) => children && children({
          slidedown: open ? noop : slideFn,
          slideup: open ? slideFn : noop,
        })}
      </Wrap>
    )
  }

  private handleAfterStateChange = () => {
    const { afterStateChange } = this.props
    const { open, active } = this.state

    this.setState(
      {
        open: !open,
        active: active == null ? active : !active,
        defaultActive: false,
      },
      () => afterStateChange && afterStateChange(!open),
    )
  }
}