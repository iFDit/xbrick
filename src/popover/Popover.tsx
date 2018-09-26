import React, { createContext } from 'react'
import classNames from 'classnames'
import { Fade } from 'src/animate/Fade'
import * as cls from 'src/common/classes'
import { Popper } from 'src/tooltip/Popper'
import { PopoverPlacement } from 'src/common/props'
import { ITooltipProps, Tooltip } from 'src/tooltip/Tooltip'
import { PopoverBody, IPopoverBody } from 'src/popover/PopoverBody'
import { PopoverHeader, IPopoverHeaderProps } from 'src/popover/PopoverHeader'

export interface IPopoverProps extends Pick<ITooltipProps, Exclude<keyof ITooltipProps, 'placement' | 'noarrow'>> {
  /**
   * set popover placement.
   * @default top
   */
  placement?: PopoverPlacement
}

export const PopoverContext = createContext({
  getHeaderProps: (props: IPopoverHeaderProps = {}) => props,
  getBodyProps: (props: IPopoverBody = {}) => props,
})

const placementMap = {
  top: 'bottom',
  bottom: 'top',
  left: 'right',
  right: 'left',
}

export class Popover extends Tooltip {
  static displayName = 'xbrick.Popover'
  static defaultProps = {
    tag: 'div',
    placement: 'top',
    open: false,
    noarrow: false,
  }
  static Body = (props: IPopoverBody) => (
    <PopoverContext.Consumer>
      {({ getBodyProps }) => <PopoverBody {...getBodyProps(props)}/>}
    </PopoverContext.Consumer>
  )
  static Header: React.StatelessComponent<IPopoverHeaderProps> = (props: IPopoverHeaderProps) => (
    <PopoverContext.Consumer>
      {({getHeaderProps}) => <PopoverHeader {...getHeaderProps(props)}/>}
    </PopoverContext.Consumer>
  )
  static getDerivedStateFromProps(props: IPopoverProps, state: any) {
    if (props.open !== state.lastOpen) {
      return { ...state, lastOpen: props.open, active: true }
    }
    if (props.placement !== state.currentPlacement) {
      return { ...state, currentPlacement: props.placement }
    }
    return null
  }
  static popoverClass({className, open, currentPlacement}: any) {
    return classNames(
      className,
      cls.XPOPOVER,
      cls.POPOVER,
      cls.SHOW,
      {
        [cls.XPOPOVER_CLOSE]: !open,
        [cls.POPOVER_LEFT]: currentPlacement === 'left',
        [cls.POPOVER_RIGHT]: currentPlacement === 'right',
        [cls.POPOVER_TOP]: currentPlacement === 'top',
        [cls.POPOVER_BOTTOM]: currentPlacement === 'bottom',
      },
    )
  }

  public getHeaderProps = (props: IPopoverHeaderProps) => {
    const { open } = this.props
    return { ...props, open }
  }

  public getBodyProps = (props: IPopoverHeaderProps) => {
    const { open } = this.props
    return { ...props, open }
  }

  render () {
    // noarrow props no use but use for extends Tooltip.
    const { tag, open, noarrow, content, placement, children, className, ...others } = this.props
    const { currentPlacement, active } = this.state
    const Tag = tag!
    const from = open ? 0 : 1
    const to = open ? 1 : 0
    const classes = Popover.popoverClass({className, open, currentPlacement})
    const arrowStyleName = placementMap[currentPlacement!.split('-')[0]]
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
            <div ref={arrowProps.ref} className={classNames(cls.ARROW, cls.ARROW_WRAP)} style={{[arrowStyleName]: 0}}>
              <Fade from={from} to={to} className={cls.ARROW} style={arrowProps.style} afterStateChange={this.handleAnimateEnd}/>
            </div>
            <PopoverContext.Provider
              value={{
                getHeaderProps: this.getHeaderProps,
                getBodyProps: this.getBodyProps,
              }}
            >
              {content}
            </PopoverContext.Provider>
          </Tag>
        )}
      </Popper>
    )
  }
}
