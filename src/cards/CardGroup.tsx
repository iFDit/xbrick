import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { CARD_GROUP } from 'src/common/classes'

export interface ICardGroupProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const CardGroup: React.StatelessComponent<ICardGroupProps> = function (props: ICardGroupProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, CARD_GROUP)
  return <Tag {...others} className={className} />
}

CardGroup.displayName = 'xbrick.CardGroup'
CardGroup.defaultProps = {
  tag: 'div',
}
