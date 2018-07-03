import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'
import { Slide, ISlideProps } from 'src/animate/Slide'

export interface IDropdownMenuProps extends IProps, Pick<ISlideProps, 'children'> {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * if true that will set menu alignment to the right.
   * @default false
   */
  right?: boolean
}

export const DropdownMenu: React.StatelessComponent<IDropdownMenuProps> = function (props: IDropdownMenuProps) {
  const { right, ...others } = props
  const className = classNames(
    props.className,
    classes.MENU,
    classes.DROPDOWN_MENU,
    {[`${classes.DROPDOWN_MENU}-right`]: right},
  )
  return <Slide {...others} className={className} />
}

DropdownMenu.displayName = 'xbrick.DropdownMenu'
DropdownMenu.defaultProps = {
  tag: 'div',
  right: false,
}
