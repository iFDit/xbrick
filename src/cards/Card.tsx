import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { IProps, CardType, CardAlign } from 'src/common/props'
import { CARD, CARD_BG, CARD_BORDER, CARD_INVERSE } from 'src/common/classes'

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
  // shortcut of ignore others props.
  // @ts-ignore
  const { tag, align, color, inverse, outline, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={cardClasses(props)} />
}

Card.displayName = 'xbrick.Card'
Card.defaultProps = {
  tag: 'div',
  inverse: false,
  outline: false,
}

function cardClasses(props: ICardProps) {
  const { align, color, inverse, outline } = props
  const cardColor = outline ?
    `${CARD_BORDER}-${color}`
    : `${CARD_BG}-${color}`
  
  return classNames(
    props.className,
    CARD,
    {
      [cardColor]: !!color,
      [CARD_INVERSE]: inverse,
      [`${cls['CARD_ALIGN_' + String(align).toUpperCase()]}`]: !!align,
    },
  )
}
