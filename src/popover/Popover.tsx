import React, { createContext } from 'react'
import classNames from 'classnames'
import { Fade } from 'src/animate/Fade'
import { Popper } from 'src/tooltip/Popper'
import { PopoverPlacement } from 'src/common/props'
import { ITooltipProps, Tooltip } from 'src/tooltip/Tooltip'
import { IPopoverHeaderProps } from 'src/popover/PopoverHeader'
import { POPOVER, SHOW, ARROW, ARROW_WRAP } from 'src/common/classes'
import { POPOVER_LEFT, POPOVER_RIGHT, POPOVER_TOP, POPOVER_BOTTOM } from 'src/common/classes'

export interface IPopoverProps extends Pick<ITooltipProps, Exclude<keyof ITooltipProps, 'placement' | 'noarrow'>> {
  /**
   * set popover placement.
   * @default top
   */
  placement?: PopoverPlacement
}

export const PopoverContext = createContext({
  getHeaderProps: (props: IPopoverHeaderProps) => props,
  getBodyProps: (props: IPopoverHeaderProps) => props,
})

export class Popover extends Tooltip {
  static displayName = 'xbrick.Popover'
  static defaultProps = {
    tag: 'div',
    noarrow: false,
    placement: 'top',
    open: false,
  }

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
    const { tag, noarrow, content, placement, children, ...others } = this.props
    const { currentPlacement, active } = this.state
    const Tag = tag!
    const from = open ? 0 : 1
    const to = open ? 1 : 0
    let className = classNames(this.props.className, POPOVER, SHOW)
    className = classNames(className, {
      [POPOVER_LEFT]: currentPlacement === 'left',
      [POPOVER_RIGHT]: currentPlacement === 'right',
      [POPOVER_TOP]: currentPlacement === 'top',
      [POPOVER_BOTTOM]: currentPlacement === 'bottom',
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
            <div ref={arrowProps.ref} className={classNames(ARROW, ARROW_WRAP)}>
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
