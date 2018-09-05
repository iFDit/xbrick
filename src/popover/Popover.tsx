import React, { createContext } from 'react'
import classNames from 'classnames'
import { Fade } from 'src/animate/Fade'
import { Popper } from 'src/tooltip/Popper'
import { PopoverPlacement } from 'src/common/props'
import { ITooltipProps, Tooltip } from 'src/tooltip/Tooltip'
import { PopoverBody, IPopoverBody } from 'src/popover/PopoverBody'
import { PopoverHeader, IPopoverHeaderProps } from 'src/popover/PopoverHeader'
import { POPOVER_LEFT, POPOVER_RIGHT, POPOVER_TOP, POPOVER_BOTTOM } from 'src/common/classes'
import { POPOVER, SHOW, ARROW, ARROW_WRAP, XPOPOVER, XPOPOVER_CLOSE } from 'src/common/classes'

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
    const { tag, open, noarrow, content, placement, children, ...others } = this.props
    const { currentPlacement, active } = this.state
    const Tag = tag!
    const from = open ? 0 : 1
    const to = open ? 1 : 0
    let className = classNames(this.props.className, POPOVER, SHOW, XPOPOVER)
    className = classNames(className, {
      [XPOPOVER_CLOSE]: !open,
      [POPOVER_LEFT]: currentPlacement === 'left',
      [POPOVER_RIGHT]: currentPlacement === 'right',
      [POPOVER_TOP]: currentPlacement === 'top',
      [POPOVER_BOTTOM]: currentPlacement === 'bottom',
    })
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
          <Tag {...others} ref={ref} style={style} data-placement={innerPlacement} className={className}>
            <div ref={arrowProps.ref} className={classNames(ARROW, ARROW_WRAP)} style={{[arrowStyleName]: 0}}>
              <Fade from={from} to={to} className={ARROW} style={arrowProps.style} afterStateChange={this.handleAnimateEnd}/>
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
