import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { CARD_TEXT } from 'src/common/classes'

export interface ICardTextProps extends IProps {
  /**
   * custom render component.
   * @default p
   */
  tag?: string | React.Factory<any>
}

export const CardText: React.StatelessComponent<ICardTextProps> = function (props: ICardTextProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={cardTextClass({className})} />
}

CardText.displayName = 'xbrick.CardText'
CardText.defaultProps = { tag: 'p' }

export function cardTextClass({className}: {className?: string} = {}) {
  return classNames(className, CARD_TEXT)
}
