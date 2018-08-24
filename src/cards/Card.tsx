import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { omit } from 'lodash'
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
  bstype?: CardType

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

const omitProps = ['inverse', 'bstype', 'align', 'outline']
export const Card: React.StatelessComponent<ICardProps> = function (props: ICardProps) {
  const { tag, ...others } = props
  const Tag = tag!
  return <Tag {...omit(others, omitProps)} className={cardClasses(props)} />
}

Card.displayName = 'xbrick.Card'
Card.defaultProps = {
  tag: 'div',
  inverse: false,
  outline: false,
}

function cardClasses(props: ICardProps) {
  const { align, bstype, inverse, outline } = props
  const color = outline ?
    `${classes.CARD_BORDER}-${bstype}`
    : `${classes.CARD_BG}-${bstype}`
  
  return classNames(
    props.className,
    classes.CARD,
    {
      [color]: !!bstype,
      [classes.CARD_INVERSE]: inverse,
      [`${classes['CARD_ALIGN_' + String(align).toUpperCase()]}`]: !!align,
    }
  )
}
