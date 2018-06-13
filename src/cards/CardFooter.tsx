import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface ICardHeaderProps extends IProps {
  tag?: string | React.Factory<any>
}

export const CardFooter: React.StatelessComponent<ICardHeaderProps> = function (props: ICardHeaderProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.CARD_FOOTER)
  return <Tag {...others} className={className} />
}

CardFooter.displayName = 'xbrick.CardFooter'
CardFooter.defaultProps = {
  tag: 'div'
}
