import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'
import { omit } from 'lodash'

export interface IDropdownItemProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * set dropdown item become menu header.
   * @default false
   */
  header?: boolean

  /**
   * set dropdown item become divider.
   * @default false
   */
  divider?: boolean

  /**
   * set dropdown item active.
   * @default false
   */
  active?: boolean

  /**
   * set dropdown item disabled.
   * @default false
   */
  disabled?: boolean
}

const omitProps = ['active', 'disabled']
export const DropdownItem: React.StatelessComponent<IDropdownItemProps> = function (props: IDropdownItemProps) {
  const { tag, header, divider, ...others } = props
  const Tag = header ? 'h6' : divider ? 'div' : tag!
  const nextProps = {
    ...omit(others, omitProps),
    className: getDropdownClassName(props),
  }
  if (Tag === 'a') {
    (nextProps as any).href = '#'
  }
  return <Tag {...nextProps} />
}

function getDropdownClassName(props: IDropdownItemProps) {
  const { header, divider, active, disabled } = props
  return classNames(
    props.className,
    classes.DROPDOWN_ITEM,
    {
      [classes.DROPDOWN_HEADER]: !!header,
      [classes.DROPDOWN_DIVIDER]: !!divider,
      [classes.DISABLED]: !!disabled,
      [classes.ACTIVE]: !!active,
    },
  )
}

DropdownItem.displayName = 'xbrick.DropdownItem'
DropdownItem.defaultProps = {
  tag: 'a',
  header: false,
  divider: false,
  active: false,
  disabled: false,
}
