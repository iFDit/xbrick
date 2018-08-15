import React from 'react'
import classNames from 'classnames'
import { Fade } from 'src/animate/Fade'
import { PopoverContext } from 'src/popover/Popover'
import { POPOVER_HEADER } from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IPopoverHeaderProps extends IProps {
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

const Header: React.StatelessComponent<IPopoverHeaderProps> = function (props: IPopoverHeaderProps) {
  const { open, ...others } = props
  const from = open ? 0 : 1
  const to = open ? 1 : 0
  const className = classNames(props.className, POPOVER_HEADER)
  return (
    <Fade {...others} from={from} to={to} className={className}/>
  )
}

export const PopoverHeader: React.StatelessComponent<IPopoverHeaderProps> = (props: IPopoverHeaderProps) => (
  <PopoverContext.Consumer>
    {({getHeaderProps}) => <Header {...getHeaderProps(props)}/>}
  </PopoverContext.Consumer>
)

PopoverHeader.displayName = 'xbrick.PopoverHeader'
PopoverHeader.defaultProps = {
  tag: 'h3',
}
