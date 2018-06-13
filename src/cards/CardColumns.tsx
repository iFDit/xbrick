import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

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
  const className = classNames(props.className, classes.CARD_COLUMNS)
  return <Tag {...others} className={className} />
}

CardColumns.displayName = 'xbrick.CardDeck'
CardColumns.defaultProps = {
  tag: 'div'
}
