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
  const { tag, fluid, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={jumbotronClass({className, fluid})} />
}

Jumbotron.displayName = 'xbrick.Jumbotron'
Jumbotron.defaultProps = {
  tag: 'div',
  fluid: false,
}

export function jumbotronClass({className, fluid}: any) {
  return classNames(
    className,
    JUMBOTRON,
    {[JUMBOTRON_FLUID]: !!fluid},
  )
}
