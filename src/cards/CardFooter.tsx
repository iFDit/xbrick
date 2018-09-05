import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { CARD_FOOTER } from 'src/common/classes'

export interface ICardHeaderProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const CardFooter: React.StatelessComponent<ICardHeaderProps> = function (props: ICardHeaderProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, CARD_FOOTER)
  return <Tag {...others} className={className} />
}

CardFooter.displayName = 'xbrick.CardFooter'
CardFooter.defaultProps = { tag: 'div' }
