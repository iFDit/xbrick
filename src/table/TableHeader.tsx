import React from 'react'
import { IProps } from 'src/common/props'

export interface ITableHeaderProps extends IProps {}

export const TableHeader: React.StatelessComponent<ITableHeaderProps> = function (props: ITableHeaderProps) {
  return <thead {...props}/>
}

TableHeader.displayName = 'xbrick.TableHeader'
