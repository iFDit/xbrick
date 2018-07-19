import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

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
  const className = classNames(props.className, classes.MEDIA)
  return <Tag {...others} className={className} />
}

Media.displayName = 'xbrick.Media'
Media.defaultProps = {
  tag: 'div',
}
