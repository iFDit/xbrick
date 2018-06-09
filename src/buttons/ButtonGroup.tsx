import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { omit } from 'lodash'
import { IProps, ButtonSize } from 'src/common/props'

export interface IButtonGroupProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * change Button size. The optional values are
   * `large`, `small` or `middle`.
   * @default middle
   */
  size?: ButtonSize

  /**
   * Button group layout (vertical or horizontal).
   * @default false
   */
  vertical?: boolean
}

const omitProps = ['size', 'vertical']
export const ButtonGroup: React.StatelessComponent<IButtonGroupProps> = function (props: IButtonGroupProps) {
  const { tag, ...others } = props
  const Tag = tag!
  return <Tag {...omit(others, omitProps)} className={buttonGroupClasses(props)} />
}

ButtonGroup.displayName = 'xbrick.ButtonGroup'
ButtonGroup.defaultProps = {
  tag: 'div',
  size: 'middle',
  vertical: false,
}

const sizeMap = {
  large: 'lg',
  small: 'sm',
}

function buttonGroupClasses(props: IButtonGroupProps) {
  const { size, vertical, className } = props
  const groupclass = vertical ?
    `${classes.BUTTON}-${classes.GROUP}-${classes.VERTICAL}`
    : `${classes.BUTTON}-${classes.GROUP}`
  return classNames(
    className,
    groupclass,
    {
      [`${classes.BUTTON}-${classes.GROUP}-${sizeMap[size!]}`]: !!sizeMap[size!],
    },
  )
}
