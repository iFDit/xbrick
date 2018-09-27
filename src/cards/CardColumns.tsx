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
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={cardColumnsClass({className})} />
}

CardColumns.displayName = 'xbrick.CardColumns'
CardColumns.defaultProps = { tag: 'div' }

export function cardColumnsClass({className}: {className?: string} = {}) {
  return classNames(className, CARD_COLUMNS)
}
