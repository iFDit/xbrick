import React from 'react'
import classNames from 'classnames'
import { Fade } from 'src/animate/Fade'
import * as cls from 'src/common/classes'
import { Popper } from 'src/tooltip/Popper'
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
    children: <span/>,
  }
  static getDerivedStateFromProps(props: ITooltipProps, state: any) {
    const { lastPropsPlacement } = state
    let newState = null
    if (props.open !== state.lastOpen) {
      newState = { ...state, lastOpen: props.open, active: true }
    }
    if (lastPropsPlacement !== state.currentPlacement) {
      const nextPlacement = lastPropsPlacement !== props.placement ? props.placement : state.currentPlacement
      newState = { ...(newState || state), currentPlacement: nextPlacement, lastPropsPlacement: props.placement }
    }
    return newState
  }

  public state = {
    active: false,
    lastOpen: this.props.open,
    lastPropsPlacement: this.props.placement,
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
    const { tag, open, noarrow, content, placement, children, className, ...others } = this.props
    const { currentPlacement, active } = this.state
    const Tag = tag!
    const from = open ? 0 : 1
    const to = open ? 1 : 0
    const classes = tooltipClass({className, currentPlacement})
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
          <Tag {...others} ref={ref} style={style} data-placement={innerPlacement} className={classes}>
            {!noarrow && (
              <div ref={arrowProps.ref} className={classNames(cls.ARROW, cls.ARROW_WRAP)}>
                <Fade from={from} to={to} className={cls.ARROW} style={arrowProps.style}/>
              </div>
            )}
            <Fade className={cls.TOOLTIP_INNER} from={from} to={to} afterStateChange={this.handleAnimateEnd}>
              {content}
            </Fade>
          </Tag>
        )}
      </Popper>
    )
  }
}

export type TooltipClass = {
  className?: string,
  currentPlacement?: tooltipPlacement,
}

export function tooltipClass({className, currentPlacement}: TooltipClass = {}) {
  return classNames(className, cls.TOOLTIP, cls.SHOW, {
    [cls.TOOLTIP_LEFT]: currentPlacement === 'left',
    [cls.TOOLTIP_RIGHT]: currentPlacement === 'right',
    [cls.TOOLTIP_TOP]: currentPlacement === 'top',
    [cls.TOOLTIP_BOTTOM]: currentPlacement === 'bottom',
  })
}
