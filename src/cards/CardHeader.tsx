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
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, CARD_HEADER)
  return <Tag {...others} className={className} />
}

CardHeader.displayName = 'xbrick.CardHeader'
CardHeader.defaultProps = {
  tag: 'div',
}

export const CardHeaderStyle = {
  headerTab: CARD_HEADER_TAB,
}
