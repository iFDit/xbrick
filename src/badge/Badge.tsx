import * as React from 'react'
import { omit } from 'lodash'
import { IProps, BadgeType } from 'src/common/props'
import * as classes from 'src/common/classes'
import * as classNames from 'classnames'

export interface IBadgeProps extends IProps {
  /**
   * Set Badge component type.
   * @default primary
   */
  bstype?: BadgeType

  /**
   * Badge render element.
   * @default span
   */
  tag?: string | React.Factory<any>

  /**
   * Set the border radius style of the badge. If pill is true,
   * then the border of badge is ellipse.
   * @default false
   */
  pill?: boolean

  /**
   * Set the badge to like a link.This props is shortcut of { tag: 'a', href: '#' }.
   * @default false
   */
  link?: boolean

  /**
   * Determines whether the badge is displayed in the upper left corner.
   * If top is true, you shuld set the props of children so that the badge
   * is displayed in the correct position.
   * @default false
   */
  top?: boolean

  /**
   * Badge displayed number (used when top is true).
   * @default 0
   */
  count?: number

  /**
   * Show the max number.
   * @default 99
   */
  maxCount?: number
}

const omitProps = ['bstype', 'pill']

export const Badge: React.StatelessComponent<IBadgeProps> = function (props: IBadgeProps) {
  const { tag, top, link, count, maxCount, children, ...others } = props
  const Tag = link ? 'a' : tag!
  const Wrap = top ? 'span' : Tag
  const wrapProps = { className: classes.BADGE_WRAP }
  const nextProps = {
    ...omit(others, omitProps),
    href: '#',
    className: badgeClasses(props),
  }
  if (!link) { Reflect.deleteProperty(nextProps, 'href') }
  return (
    <Wrap {...(top ? wrapProps : nextProps)}>
      {children}
      {top ?
        <Tag {...nextProps}>{count! > maxCount! ? `${maxCount}+` : count}</Tag>
        : null}
    </Wrap>
  )
}

Badge.displayName = 'xbrick.Badge'
Badge.defaultProps = {
  count: 0,
  maxCount: 99,
  tag: 'span',
  bstype: 'primary',
  pill: false,
  link: false,
  top: false,
}

function badgeClasses(props: IBadgeProps) {
  const { bstype, pill, top } = props
  return classNames(
    classes.BADGE,
    top ? classes.BADGE_TOP : null,
    pill ? classes.BADGE_PILL : null,
    `${classes.BADGE}-${classes[bstype!.toUpperCase()]}`,
  )
}