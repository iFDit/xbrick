import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { IProps, CardType, CardAlign } from 'src/common/props'

export interface ICardProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * Set the color difference between the text and the background.
   * @default false
   */
  inverse?: boolean

  /**
   * set card type.
   */
  color?: CardType

  /**
   * change the card content aligin.
   */
  align?: CardAlign

  /**
   * If true, the type only influence card border.
   * @default false
   */
  outline?: boolean
}

export const Card: React.StatelessComponent<ICardProps> = function (props: ICardProps) {
  const { tag, align, color, inverse, outline, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={cardClass({className, align, color, inverse, outline})} />
}

Card.displayName = 'xbrick.Card'
Card.defaultProps = {
  tag: 'div',
  inverse: false,
  outline: false,
}

export type CardClass = {
  className?: string,
  align?: CardAlign,
  color?: CardType,
  inverse?: boolean,
  outline?: boolean,
}

export function cardClass({className, align = '', color, inverse, outline}: CardClass = {}) {
  const cardColor = outline ? `${cls.CARD_BORDER}-${color}` : `${cls.CARD_BG}-${color}`
  return classNames(
    className,
    cls.CARD,
    {
      [cardColor]: !!color,
      [cls.CARD_INVERSE]: inverse,
      [`${cls['CARD_ALIGN_' + String(align).toUpperCase()]}`]: !!align,
    },
  )
}
