import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

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
  const className = classNames(props.className, classes.MEDIA_BODY)
  return <Tag {...others} className={className} />
}

MediaBody.displayName = 'xbrick.MediaBody'
MediaBody.defaultProps = {
  tag: 'div',
}
