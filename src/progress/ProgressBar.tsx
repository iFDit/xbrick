import React from 'react'
import classNames from 'classnames'
import { PROGRESS_BAR, PROGRESS_STRIPED, PROGRESS_ANIMATE } from 'src/common/classes'
import { IProps, ProgressType } from 'src/common/props'
import * as classes from 'src/common/classes'

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
  bgColor?: ProgressType
}

export const ProgressBar: React.StatelessComponent<IProgressBarProps> = function (props: IProgressBarProps) {
  const { tag, width, style = {}, striped, animate, bgColor = '', ...others } = props
  const Tag = tag!
  const styles = { ...style, width: `${width}%` }
  const className = classNames(
    props.className, 
    PROGRESS_BAR,
    {
      [PROGRESS_STRIPED]: striped,
      [PROGRESS_ANIMATE]: animate,
      [classes[`BG_${String(bgColor).toUpperCase()}`]]: !!bgColor,
    },
  )
  return <Tag {...others} className={className} style={styles}/>
}

ProgressBar.displayName = 'xbrick.ProgressBar'
ProgressBar.defaultProps = {
  tag: 'div',
  striped: false,
  animate: false,
}
