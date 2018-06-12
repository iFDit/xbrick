import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface ICardBodyProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const CardBody: React.StatelessComponent<ICardBodyProps> = function (props: ICardBodyProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.CARD_BODY)
  return <Tag {...others} className={className} />
}

CardBody.displayName = 'xbrick.CardBody'
CardBody.defaultProps = {
  tag: 'div'
}
