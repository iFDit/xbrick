import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { IProps, NavJustify } from 'src/common/props'
import { NAV, NAV_TAB, FLEX_COLUMN } from 'src/common/classes'

export interface INavProps extends IProps {
  /**
   * custom render component.
   * @default ul
   */
  tag?: string | React.Factory<any>

  /**
   * set nav justify.
   * @default start
   */
  justify?: NavJustify

  /**
   * stack navigation by set vertical true.
   * @default false
   */
  vertical?: boolean

  /**
   * toggle tabs styles.
   * @default false
   */
  tab?: boolean
}

export const Nav: React.StatelessComponent<INavProps> = function (props: INavProps) {
  const { tag, tab, justify, vertical, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={navClass({className, tab, vertical, justify})} />
}

Nav.displayName = 'xbrick.Nav'
Nav.defaultProps = {
  tag: 'ul',
  tab: false,
  justify: 'start',
  vertical: false,
}

export function navClass({className, tab, vertical, justify}: any) {
  const justifyMap = {
    center: 'CENTER',
    end: 'END',
    around: 'AROUND',
    between: 'BETWEEN',
  }

  return classNames(
    className,
    NAV,
    {
      [NAV_TAB]: !!tab,
      [FLEX_COLUMN]: !!vertical,
      [cls[`JUSTIFY_CONTENT_XS_${justifyMap[justify!]}`]]: !!justifyMap[justify!],
    },
  )
}
