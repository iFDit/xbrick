import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { CARD_LINK } from 'src/common/classes'

export interface ICardLinkProps extends IProps {
  /**
   * custom render component.
   * @default a
   */
  tag?: string | React.Factory<any>
}

export const CardLink: React.StatelessComponent<ICardLinkProps> = function (props: ICardLinkProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, CARD_LINK)
  const nextProps = others
  if (Tag === 'a') {
    nextProps.href = '#'
  }
  return <Tag {...nextProps} className={className} />
}

CardLink.displayName = 'xbrick.CardLink'
CardLink.defaultProps = {
  tag: 'a',
}
