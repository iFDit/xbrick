import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { CARD_HEADER, CARD_HEADER_TAB } from 'src/common/classes'

export interface ICardHeaderProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const CardHeader: React.StatelessComponent<ICardHeaderProps> = function (props: ICardHeaderProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={cardHeaderClass({className})} />
}

CardHeader.displayName = 'xbrick.CardHeader'
CardHeader.defaultProps = {
  tag: 'div',
}

export const CardHeaderStyle = {
  headerTab: CARD_HEADER_TAB,
}

export function cardHeaderClass({className}: any) {
  return classNames(className, CARD_HEADER)
}
