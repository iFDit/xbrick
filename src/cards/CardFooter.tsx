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
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={cardFooterClass({className})} />
}

CardFooter.displayName = 'xbrick.CardFooter'
CardFooter.defaultProps = { tag: 'div' }

export function cardFooterClass({className}: any) {
  return classNames(className, CARD_FOOTER)
}
