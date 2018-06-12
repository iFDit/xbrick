import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface ICardTitleProps extends IProps {
  /**
   * custom render component.
   * @default h5
   */
  tag?: string | React.Factory<any>

  /**
   * If true, will render small title.
   */
  subtitle?: boolean
}

export const CardTitle: React.StatelessComponent<ICardTitleProps> = function (props: ICardTitleProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.CARD_BODY)
  return <Tag {...others} className={className} />
}

CardTitle.displayName = 'xbrick.CardBody'
CardTitle.defaultProps = {
  tag: 'h5',
  subtitle: false,
}
