import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Fade } from 'src/animate/Fade'
import * as cls from 'src/common/classes'
import { Popper } from 'src/tooltip/Popper'
import { IProps, tooltipPlacement } from 'src/common/props'

export interface IUncontrolledTooltipProps extends IProps {
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
}

export class UncontrolledTooltip extends React.Component<IUncontrolledTooltipProps> {
  static displayName = 'xbrick.UncontrolledTooltip'
  static defaultProps = {
    tag: 'div',
    noarrow: false,
    placement: 'top',
  }
  static getDerivedStateFromProps(props: IUncontrolledTooltipProps, state: any) {
    if (props.placement !== state.currentPlacement) {
      return { ...state, currentPlacement: props.placement }
    }
    return null
  }
  static tooltipClass({className, currentPlacement}: any) {
    return classNames(className, cls.TOOLTIP, cls.SHOW, {
      [cls.TOOLTIP_LEFT]: currentPlacement === 'left',
      [cls.TOOLTIP_RIGHT]: currentPlacement === 'right',
      [cls.TOOLTIP_TOP]: currentPlacement === 'top',
      [cls.TOOLTIP_BOTTOM]: currentPlacement === 'bottom',
    })
  }

  public state = {
    active: false,
    open: false,
    currentPlacement: this.props.placement,
  }

  public componentDidMount() {
    const dom = ReactDOM.findDOMNode(this) as HTMLElement
    dom!.addEventListener('mouseenter', this.handleMouseEnter)
    dom!.addEventListener('mouseleave', this.handleMouseLeave)
  }

  public handleMouseEnter = () => {
    this.setState({ open: true, active: true })
  }

  public handleMouseLeave = () => {
    this.setState({ open: false, active: true })
  }

  public handleAnimateEnd = () => {
    const { open } = this.state
    this.setState({ active: open })
  }

  public handleUpdate = (data: any) => {
    const { currentPlacement } = this.state
    const { placement: changePlacement } = data
    changePlacement !== currentPlacement && this.setState({ currentPlacement: changePlacement })
  }

  render () {
    const { tag, noarrow, content, placement, children, className, ...others } = this.props
    const { active, open, currentPlacement } = this.state
    const Tag = tag!
    const from = open ? 0 : 1
    const to = open ? 1 : 0
    const classes = UncontrolledTooltip.tooltipClass({className, currentPlacement})
    const modifiers: any = {
      update: {
        enabled: true,
        order: 950,
        fn: this.handleUpdate,
      },
    }

    return (
      <Popper reference={children as React.ReactElement<any>} open={active} placement={placement} modifiers={modifiers}>
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
