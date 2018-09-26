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
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={mediaBodyClass({className})} />
}

MediaBody.displayName = 'xbrick.MediaBody'
MediaBody.defaultProps = { tag: 'div' }

export function mediaBodyClass({className}: any) {
  return classNames(className, MEDIA_BODY)
}
