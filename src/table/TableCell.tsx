import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { TABLE } from 'src/common/classes'
import { IProps, TableType, TableCellType } from 'src/common/props'

export interface ITableCellProps extends IProps {
  /**
   * set render tag.
   * @default td
   */
  tag?: TableCellType

  /**
   * set the cell background-color.
   */
  color?: TableType
}

export const TableCell: React.StatelessComponent<ITableCellProps> = function (props: ITableCellProps) {
  const { tag, color, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={tableCellClass({className, color})}/>
}

TableCell.displayName = 'xbrick.TableCell'
TableCell.defaultProps = { tag: 'td' }

export function tableCellClass({className, color}: {className?: string, color?: TableType} = {}) {
  return classNames(className, {
    [`${TABLE}-${cls[String(color!).toUpperCase()]}`]: !!color,
  })
}
