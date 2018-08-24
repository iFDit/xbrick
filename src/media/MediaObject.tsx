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
   * set not wrap.
   * @default false
   */
  nowrap?: boolean

  /**
   * set MediaObject align.There are 3 options: 'start', 'center' and 'end'.
   * @default start
   */
  align?: MediaObjectAlign
}

export const MediaObject: React.StatelessComponent<IMediaObjectProps> = function (props: IMediaObjectProps) {
  const { nowrap, align, ...others } = props
  return <Col nowrap={nowrap} xs={{align}} {...others} />
}

MediaObject.displayName = 'xbrick.MediaObject'
MediaObject.defaultProps = {
  tag: 'div',
  nowrap: false,
  align: 'start',
}
