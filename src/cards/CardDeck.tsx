import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface ICardDeckProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const CardDeck: React.StatelessComponent<ICardDeckProps> = function (props: ICardDeckProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.CARD_DECK)
  return <Tag {...others} className={className} />
}

CardDeck.displayName = 'xbrick.CardDeck'
CardDeck.defaultProps = {
  tag: 'div'
}
