import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { CARD_TEXT } from 'src/common/classes'

export interface ICardTextProps extends IProps {
  /**
   * custom render component.
   * @default p
   */
  tag?: string | React.Factory<any>
}

export const CardText: React.StatelessComponent<ICardTextProps> = function (props: ICardTextProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, CARD_TEXT)
  return <Tag {...others} className={className} />
}

CardText.displayName = 'xbrick.CardText'
CardText.defaultProps = { tag: 'p' }
