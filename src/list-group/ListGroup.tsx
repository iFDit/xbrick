import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { LIST_GROUP, LIST_GROUP_FLUSH } from 'src/common/classes'

export interface IListGroupProps extends IProps {
  /**
   * custom render component.
   * @default ul
   */
  tag?: string | React.Factory<any>

  /**
   * remove ListGroup components border and rounded corners.
   * @default false
   */
  flush?: boolean
}

export const ListGroup: React.StatelessComponent<IListGroupProps> = function (props: IListGroupProps) {
  const { tag, flush, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={listGroupClass({className, flush})} />
}

ListGroup.displayName = 'xbrick.ListGroup'
ListGroup.defaultProps = {
  tag: 'ul',
  flush: false,
}

export function listGroupClass({className, flush}: {className?: string, flush?: boolean} = {}) {
  return classNames(
    className,
    LIST_GROUP,
    {[LIST_GROUP_FLUSH]: !!flush},
  )
}
