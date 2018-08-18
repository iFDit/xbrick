import React from 'react'
import { IProps } from 'src/common/props'

export interface ITableBodyProps extends IProps {}

export const TableBody: React.StatelessComponent<ITableBodyProps> = function (props: ITableBodyProps) {
  return <tbody {...props} />
}

TableBody.displayName = 'xbrick.TableBody'
