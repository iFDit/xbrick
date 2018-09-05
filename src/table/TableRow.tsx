import React from 'react'
import classNames from 'classnames'
import { TABLE } from 'src/common/classes'
import * as classes from 'src/common/classes'
import { IProps, TableType } from 'src/common/props'

export interface ITableRow extends IProps {
  /**
   * set the row background-color.
   */
  bstype?: TableType
}

export const TableRow: React.StatelessComponent<ITableRow> = function (props: ITableRow) {
  const { bstype = '', ...others } = props
  const className = classNames(props.className, {
    [`${TABLE}-${classes[String(bstype!).toUpperCase()]}`]: !!bstype,
  })

  return <tr {...others} className={className} />
}

TableRow.displayName = 'xbrick.TableRow'
