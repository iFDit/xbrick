import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { TOP, BOTTOM, CARD_IMG } from 'src/common/classes'

export interface ICardImgProps extends IProps {
  /**
   * set image component in the top of card.
   * If false, will set image in the bottom of card.
   * @default true
   */
  top?: boolean
}

export const CardImg: React.StatelessComponent<ICardImgProps> = function (props: ICardImgProps) {
  const { top, ...others } = props
  const className = classNames(
    props.className,
    `${CARD_IMG}-${top ? TOP : BOTTOM}`,
  )
  return <img {...others} className={className} />
}

CardImg.displayName = 'xbrick.CardImg'
CardImg.defaultProps = {
  top: true,
}
