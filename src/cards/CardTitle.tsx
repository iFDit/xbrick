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
  const { tag, subtitle, ...others } = props
  const { CARD_SUBTITLE, CARD_TITLE } = classes
  const Tag = subtitle && tag === 'h5' ? 'h6' : tag!
  const className = classNames(props.className, subtitle ? CARD_SUBTITLE: CARD_TITLE)
  return <Tag {...others} className={className} />
}

CardTitle.displayName = 'xbrick.CardTitle'
CardTitle.defaultProps = {
  tag: 'h5',
  subtitle: false,
}
