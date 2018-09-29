import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { CONTAINER_FLUID, CONTAINER} from 'src/common/classes'

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
  const { tag, fluid, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={containerClass({className, fluid})} />
}

Container.displayName = 'xbrick.Container'
Container.defaultProps = {
  tag: 'div',
  fluid: false,
}

export function containerClass({className, fluid}: {className?: string, fluid?: boolean} = {}) {
  return classNames(className, fluid ? CONTAINER_FLUID : CONTAINER)
}
