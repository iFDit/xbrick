import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

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
  const { tag, flush, ...others } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    classes.LIST_GROUP,
    {[classes.LIST_GROUP_FLUSH]: !!flush},
  )
  return <Tag {...others} className={className} />
}

ListGroup.displayName = 'xbrick.ListGroup'
ListGroup.defaultProps = {
  tag: 'ul',
  flush: false,
}
