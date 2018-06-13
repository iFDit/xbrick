import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

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
  const { CARD_IMG, TOP, BOTTOM } = classes
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
