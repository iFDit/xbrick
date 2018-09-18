import React from 'react'
import classNames from 'classnames'
import { TABLE } from 'src/common/classes'
import * as classes from 'src/common/classes'
import { IProps, TableType } from 'src/common/props'

export interface ITableRow extends IProps {
  /**
   * set the row background-color.
   */
  color?: TableType
}

export const TableRow: React.StatelessComponent<ITableRow> = function (props: ITableRow) {
  const { color = '', ...others } = props
  const className = classNames(props.className, {
    [`${TABLE}-${classes[String(color!).toUpperCase()]}`]: !!color,
  })

  return <tr {...others} className={className} />
}

TableRow.displayName = 'xbrick.TableRow'
