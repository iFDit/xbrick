import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { CARD_LINK } from 'src/common/classes'

export interface ICardLinkProps extends IProps {
  /**
   * custom render component.
   * @default a
   */
  tag?: string | React.Factory<any>
}

export const CardLink: React.StatelessComponent<ICardLinkProps> = function (props: ICardLinkProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={cardLinkClass({className})} />
}

CardLink.displayName = 'xbrick.CardLink'
CardLink.defaultProps = { tag: 'a' }

export function cardLinkClass({className}: {className?: string} = {}) {
  return classNames(className, CARD_LINK)
}
