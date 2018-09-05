import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { JUMBOTRON, JUMBOTRON_FLUID } from 'src/common/classes'

export interface IJumbotronProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * make Jumbotron full width.
   * @default false
   */
  fluid?: boolean
}

export const Jumbotron: React.StatelessComponent<IJumbotronProps> = function (props: IJumbotronProps) {
  const { tag, fluid, ...others } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    JUMBOTRON,
    {[JUMBOTRON_FLUID]: !!fluid},
  )
  return <Tag {...others} className={className} />
}

Jumbotron.displayName = 'xbrick.Jumbotron'
Jumbotron.defaultProps = {
  tag: 'div',
  fluid: false,
}
