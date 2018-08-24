import React from 'react'
import classNames from 'classnames'
import { Popper } from 'src/tooltip/Popper'
import { Fade } from 'src/animate/Fade'
import { TOOLTIP, SHOW, TOOLTIP_INNER, ARROW, ARROW_WRAP } from 'src/common/classes'
import { TOOLTIP_LEFT, TOOLTIP_RIGHT, TOOLTIP_TOP, TOOLTIP_BOTTOM } from 'src/common/classes'
import { IProps, tooltipPlacement } from 'src/common/props'

export interface ITooltipProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * tooltip content
   */
  content?: React.ReactNode

  /**
   * show/hide arrow.
   * @default false
   */
  noarrow?: boolean

  /**
   * set tooltip placement.
   * @default top
   */
  placement?: tooltipPlacement

  /**
   * show/hide tooltip.
   * @default false
   */
  open?: boolean
}

export class Tooltip extends React.Component<ITooltipProps> {
  static displayName = 'xbrick.Tooltip'
  static defaultProps = {
    tag: 'div',
    noarrow: false,
    placement: 'top',
    open: false,
  }
  static getDerivedStateFromProps(props: ITooltipProps, state: any) {
    if (props.open !== state.lastOpen) {
      return { ...state, lastOpen: props.open, active: true }
    }
    if (props.placement !== state.currentPlacement) {
      return { ...state, currentPlacement: props.placement }
    }
    return null
  }

  public state = {
    active: false,
    lastOpen: this.props.open,
    currentPlacement: this.props.placement,
  }

  public handleAnimateEnd = () => {
    this.setState({ active: false })
  }

  public handleUpdate = (data: any) => {
    const { currentPlacement } = this.state
    const { placement: changePlacement } = data
    changePlacement !== currentPlacement && this.setState({ currentPlacement: changePlacement })
  }

  render () {
    const { tag, open, noarrow, content, placement, children, ...others } = this.props
    const { currentPlacement, active } = this.state
    const Tag = tag!
    const from = open ? 0 : 1
    const to = open ? 1 : 0
    let className = classNames(this.props.className, TOOLTIP, SHOW)
    className = classNames(className, {
      [TOOLTIP_LEFT]: currentPlacement === 'left',
      [TOOLTIP_RIGHT]: currentPlacement === 'right',
      [TOOLTIP_TOP]: currentPlacement === 'top',
      [TOOLTIP_BOTTOM]: currentPlacement === 'bottom',
    })

    const modifiers: any = {
      update: {
        enabled: true,
        order: 950,
        fn: this.handleUpdate,
      },
    }

    return (
      <Popper reference={children as React.ReactElement<any>} open={open || active} placement={placement} modifiers={modifiers}>
        {({ ref, style, placement: innerPlacement, arrowProps }) => (
          <Tag {...others} ref={ref} style={style} data-placement={innerPlacement} className={className}>
            {!noarrow && (
              <div ref={arrowProps.ref} className={classNames(ARROW, ARROW_WRAP)}>
                <Fade from={from} to={to} className={ARROW} style={arrowProps.style}/>
              </div>
            )}
            <Fade className={TOOLTIP_INNER} from={from} to={to} afterStateChange={this.handleAnimateEnd}>
              {content}
            </Fade>
          </Tag>
        )}
      </Popper>
    )
  }
}
