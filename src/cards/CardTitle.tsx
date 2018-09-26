import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { CARD_TITLE, CARD_SUBTITLE } from 'src/common/classes'

export interface ICardTitleProps extends IProps {
  /**
   * custom render component.
   * @default h5
   */
  tag?: string | React.Factory<any>

  /**
   * If true, will render small title.
   */
  subtitle?: boolean
}

export const CardTitle: React.StatelessComponent<ICardTitleProps> = function (props: ICardTitleProps) {
  const { tag, subtitle, className, ...others } = props
  const Tag = subtitle && tag === 'h5' ? 'h6' : tag!
  return <Tag {...others} className={cardTitleClass({className})} />
}

CardTitle.displayName = 'xbrick.CardTitle'
CardTitle.defaultProps = {
  tag: 'h5',
  subtitle: false,
}

export function cardTitleClass({className, subtitle}: any) {
  return classNames(className, subtitle ? CARD_SUBTITLE : CARD_TITLE)
}
