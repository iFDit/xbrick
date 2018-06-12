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
  const className = classNames(props.className, classes.CARD_IMG)
  return <img {...props} className={className} />
}

CardImg.displayName = 'xbrick.CardImg'
CardImg.defaultProps = {
  top: true,
}
