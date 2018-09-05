import React from 'react'
import { IProps, MediaObjectAlign } from 'src/common/props'
import { Col } from 'src/layout/Col'

export interface IMediaObjectProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * render wrap node or not.
   * @default true
   */
  render?: boolean

  /**
   * set MediaObject align.There are 3 options: 'start', 'center' and 'end'.
   * @default start
   */
  align?: MediaObjectAlign
}

export const MediaObject: React.StatelessComponent<IMediaObjectProps> = function (props: IMediaObjectProps) {
  const { render, align, ...others } = props
  return <Col render={render} xs={{align}} {...others} />
}

MediaObject.displayName = 'xbrick.MediaObject'
MediaObject.defaultProps = {
  tag: 'div',
  render: true,
  align: 'start',
}
