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
  const { tag, overlay, ...others } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    {
      [CARD_BODY]: !overlay,
      [`${CARD_IMG}-${OVERLAY}`]: !!overlay,
    },
  )
  return <Tag {...others} className={className} />
}

CardBody.displayName = 'xbrick.CardBody'
CardBody.defaultProps = {
  tag: 'div',
  overlay: false,
}
