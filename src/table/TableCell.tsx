import React from 'react'
import classNames from 'classnames'
import { IProps, TableType, TableCellType } from 'src/common/props'
import { TABLE } from 'src/common/classes'
import * as classes from 'src/common/classes'

export interface ITableCellProps extends IProps {
  /**
   * set render tag.
   * @default td
   */
  tag?: TableCellType

  /**
   * set the cell background-color.
   */
  bstype?: TableType
}

export const TableCell: React.StatelessComponent<ITableCellProps> = function (props: ITableCellProps) {
  const { tag, bstype, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, {
    [`${TABLE}-${classes[String(bstype!).toUpperCase()]}`]: !!bstype,
  })

  return <Tag {...others} className={className}/>
}

TableCell.displayName = 'xbrick.TableCell'
TableCell.defaultProps = {
  tag: 'td',
}
