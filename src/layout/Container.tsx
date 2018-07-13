import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IContainerProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * set full width container.
   */
  fluid?: boolean
}

export const Container: React.StatelessComponent<IContainerProps> = function (props: IContainerProps) {
  const { tag, fluid, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, fluid ? classes.CONTAINER_FLUID : classes.CONTAINER)
  return <Tag {...others} className={className} />
}

Container.displayName = 'xbrick.Container'
Container.defaultProps = {
  tag: 'div',
  fluid: false,
}
