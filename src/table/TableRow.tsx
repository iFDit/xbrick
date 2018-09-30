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
  const { color, className, ...others } = props
  return <tr {...others} className={tableRowClass({className, color})} />
}

TableRow.displayName = 'xbrick.TableRow'

export function tableRowClass({className, color}: {className?: string, color?: TableType} = {}) {
  return classNames(className, {
    [`${TABLE}-${classes[String(color!).toUpperCase()]}`]: !!color,
  })
}
