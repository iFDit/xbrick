import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface ICardHeaderProps extends IProps {
  tag?: string | React.Factory<any>
}

export const CardHeader: React.StatelessComponent<ICardHeaderProps> = function (props: ICardHeaderProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.CARD_HEADER)
  return <Tag {...others} className={className} />
}

CardHeader.displayName = 'xbrick.CardHeader'
CardHeader.defaultProps = {
  tag: 'div',
}
