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
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={mediaClass({className})} />
}

Media.displayName = 'xbrick.Media'
Media.defaultProps = { tag: 'div' }

export function mediaClass({className}: any) {
  return classNames(className, MEDIA)
}
