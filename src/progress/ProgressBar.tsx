import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { IProps, ProgressType } from 'src/common/props'
import { PROGRESS_BAR, PROGRESS_STRIPED, PROGRESS_ANIMATE } from 'src/common/classes'

export interface IProgressBarProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * Use percentages to set the length.
   */
  width?: number

  /**
   * toogle striped.
   * @default false
   */
  striped?: boolean

  /**
   * toggle animate.
   * @default false
   */
  animate?: boolean

  /**
   * set background color.
   */
  color?: ProgressType
}

export const ProgressBar: React.StatelessComponent<IProgressBarProps> = function (props: IProgressBarProps) {
  const { tag, width, style = {}, striped, animate, color, className, ...others } = props
  const Tag = tag!
  const styles = { ...style, width: `${width}%` }
  return <Tag {...others} className={progressBarClass({className, striped, animate, color})} style={styles}/>
}

ProgressBar.displayName = 'xbrick.ProgressBar'
ProgressBar.defaultProps = {
  tag: 'div',
  striped: false,
  animate: false,
}

export function progressBarClass({className, striped, animate, color}: any) {
  return classNames(
    className, 
    PROGRESS_BAR,
    {
      [PROGRESS_STRIPED]: striped,
      [PROGRESS_ANIMATE]: animate,
      [cls[`BG_${String(color).toUpperCase()}`]]: !!color,
    },
  )
}
