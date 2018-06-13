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
  
  /**
   * Turn an image into a card background and overlay card's text.
   * @default false
   */
  overlay?: boolean
}

export const CardBody: React.StatelessComponent<ICardBodyProps> = function (props: ICardBodyProps) {
  const { tag, overlay, ...others } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    {
      [classes.CARD_BODY]: !overlay,
      [`${classes.CARD_IMG}-${classes.OVERLAY}`]: !!overlay,
    }
  )
  return <Tag {...others} className={className} />
}

CardBody.displayName = 'xbrick.CardBody'
CardBody.defaultProps = {
  tag: 'div',
  overlay: false,
}
