import React from 'react'
import classNames from 'classnames'
import { IProps, TableSize, TableBoder } from 'src/common/props'
import { TABLE, TABLE_SMALL, TABLE_BORDER, TABLE_BORDERLESS, TABLE_HOVER, TABLE_STRIPED } from 'src/common/classes'

export interface ITableProps extends IProps {
  /**
   * toggle table body row striped.
   * @default false
   */
  striped?: boolean

  /**
   * set table border.
   * @default normal
   */
  border?: TableBoder

  /**
   * set table size.
   * @default middle
   */
  size?: TableSize

  /**
   * enable a hover state on table rows.
   * @default false
   */
  hover?: boolean
}

export const Table: React.StatelessComponent<ITableProps> = function (props: ITableProps) {
  const { striped, border, size, hover, ...others } = props
  const className = classNames(props.className, TABLE, {
    [TABLE_SMALL]: size === 'small',
    [TABLE_HOVER]: hover,
    [TABLE_BORDERLESS]: border === 'none',
    [TABLE_BORDER]: border === 'full',
    [TABLE_STRIPED]: striped,
  })
  return <table {...others} className={className}/>
}

Table.displayName = 'xbrick.Table'
Table.defaultProps = {
  striped: false,
  border: 'normal',
  size: 'middle',
  hover: false,
}
