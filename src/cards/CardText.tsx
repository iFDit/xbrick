import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

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
  const className = classNames(props.className, classes.CARD_TEXT)
  return <Tag {...others} className={className} />
}

CardText.displayName = 'xbrick.CardText'
CardText.defaultProps = {
  tag: 'p'
}