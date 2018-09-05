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
  const { tag, color, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, {
    [`${TABLE}-${cls[String(color!).toUpperCase()]}`]: !!color,
  })

  return <Tag {...others} className={className}/>
}

TableCell.displayName = 'xbrick.TableCell'
TableCell.defaultProps = {
  tag: 'td',
}
