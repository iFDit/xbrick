import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { MEDIA_BODY } from 'src/common/classes'

export interface IMediaBodyProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const MediaBody: React.StatelessComponent<IMediaBodyProps> = function (props: IMediaBodyProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, MEDIA_BODY)
  return <Tag {...others} className={className} />
}

MediaBody.displayName = 'xbrick.MediaBody'
MediaBody.defaultProps = { tag: 'div' }
