import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { CARD_COLUMNS } from 'src/common/classes'

export interface ICardColumnsProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const CardColumns: React.StatelessComponent<ICardColumnsProps> = function (props: ICardColumnsProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, CARD_COLUMNS)
  return <Tag {...others} className={className} />
}

CardColumns.displayName = 'xbrick.CardDeck'
CardColumns.defaultProps = { tag: 'div' }
