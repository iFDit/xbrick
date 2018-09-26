import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { IProps, BadgeType } from 'src/common/props'
import { BADGE, BADGE_PILL } from 'src/common/classes'

export interface IBadgeProps extends IProps {
  /**
   * Badge render element.
   * @default span
   */
  tag?: string | React.Factory<any>

  /**
   * use more radiu badge.
   * @default false
   */
  pill?: boolean

  /**
   * shortcut of setting badge background color.
   * @default primary
   */
  color?: BadgeType
}

export const Badge: React.StatelessComponent<IBadgeProps> = function (props: IBadgeProps) {
  const { tag, pill, color, className, ...others } = props
  const Tag = tag!
  return (
    <Tag {...others} className={badgeClass({className, pill, color})}/>
  )
}

Badge.displayName = 'xbrick.Badge'
Badge.defaultProps = {
  tag: 'span',
  pill: false,
  color: 'primary',
}

export type BadgeClass = {
  className?: string,
  pill?: boolean,
  color?: BadgeType,
}

export function badgeClass({ className, pill, color = '' }: BadgeClass = {}) {
  return classNames(className, BADGE, {
    [BADGE_PILL]: !!pill,
    [cls[`B_${color!.toUpperCase()}`]]: !!color,
  })
}
