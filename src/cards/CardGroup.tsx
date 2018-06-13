import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface ICardGroupProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const CardGroup: React.StatelessComponent<ICardGroupProps> = function (props: ICardGroupProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.CARD_GROUP)
  return <Tag {...others} className={className} />
}

CardGroup.displayName = 'xbrick.CardGroup'
CardGroup.defaultProps = {
  tag: 'div'
}
