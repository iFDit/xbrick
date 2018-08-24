import React from 'react'
import { IProps } from 'src/common/props'
import * as cls from 'src/common/classes'

export interface IBadgeProps extends IProps {
  /**
   * Badge render element.
   * @default span
   */
  tag?: string | React.Factory<any>
}

export const Badge: React.StatelessComponent<IBadgeProps> = function (props: IBadgeProps) {
  const { tag, ...others } = props
  const Tag = tag!
  return (
    <Tag {...others}/>
  )
}

Badge.displayName = 'xbrick.Badge'
Badge.defaultProps = {
  tag: 'span',
}

export const BadgeStyles = {
  BADGE: cls.BADGE,
  PRIMARY: cls.B_PRIMARY,
  SECONDARY: cls.B_SECONDARY,
  SUCCESS: cls.B_SUCCESS,
  DANGER: cls.B_DANGER,
  WARNING: cls.B_WARNING,
  INFO: cls.B_INFO,
  LIGHT: cls.B_LIGHT,
  DARK: cls.B_DARK,
  PILL: cls.BADGE_PILL,
}
