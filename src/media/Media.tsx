import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { MEDIA } from 'src/common/classes'

export interface IMediaProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const Media: React.StatelessComponent<IMediaProps> = function (props: IMediaProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, MEDIA)
  return <Tag {...others} className={className} />
}

Media.displayName = 'xbrick.Media'
Media.defaultProps = { tag: 'div' }
