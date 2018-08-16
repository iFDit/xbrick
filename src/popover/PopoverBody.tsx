import React from 'react'
import classNames from 'classnames'
import { Fade } from 'src/animate/Fade'
import { PopoverContext } from 'src/popover/Popover'
import { POPOVER_BODY, XPOPOVER_BODY } from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IPopoverBody extends IProps {
  /**
   * custom render component.
   * @default h3
   */
  tag?: string | React.Factory<any>

  /**
   * open/close component.
   * @default false
   */
  open?: boolean
}

const Body: React.StatelessComponent<IPopoverBody> = function (props: IPopoverBody) {
  const { open, ...others } = props
  const from = open ? 0 : 1
  const to = open ? 1 : 0
  const className = classNames(props.className, POPOVER_BODY, XPOPOVER_BODY)
  return (
    <Fade {...others} from={from} to={to} className={className}/>
  )
}

export const PopoverBody: React.StatelessComponent<IPopoverBody> = (props: IPopoverBody) => (
  <PopoverContext.Consumer>
    {({ getBodyProps }) => <Body {...getBodyProps(props)}/>}
  </PopoverContext.Consumer>
)

PopoverBody.displayName = 'xbrick.PopoverBody'
PopoverBody.defaultProps = {
  tag: 'div',
}
