import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { OVERLAY, CARD_IMG, CARD_BODY } from 'src/common/classes'

export interface ICardBodyProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
  
  /**
   * Turn an image into a card background and overlay card's text.
   * @default false
   */
  overlay?: boolean
}

export const CardBody: React.StatelessComponent<ICardBodyProps> = function (props: ICardBodyProps) {
  const { tag, overlay, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={cardBodyClass({className, overlay})} />
}

CardBody.displayName = 'xbrick.CardBody'
CardBody.defaultProps = {
  tag: 'div',
  overlay: false,
}

export function cardBodyClass({className, overlay}: any) {
  return classNames(
    className,
    {
      [CARD_BODY]: !overlay,
      [`${CARD_IMG}-${OVERLAY}`]: !!overlay,
    },
  )
}
