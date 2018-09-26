import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { CARD_DECK } from 'src/common/classes' 

export interface ICardDeckProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const CardDeck: React.StatelessComponent<ICardDeckProps> = function (props: ICardDeckProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={cardDeckClass({className})} />
}

CardDeck.displayName = 'xbrick.CardDeck'
CardDeck.defaultProps = { tag: 'div' }

export function cardDeckClass({className}: any) {
  return classNames(className, CARD_DECK)
}
