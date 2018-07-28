import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps, NavJustify } from 'src/common/props'

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
   * use in narbar components.
   * @default false
   */
  navbar?: boolean
}

const justifyMap = {
  center: 'CENTER',
  end: 'END',
  around: 'AROUND',
  between: 'BETWEEN',
}

export const Nav: React.StatelessComponent<INavProps> = function (props: INavProps) {
  const { tag, navbar, justify, vertical, ...others } = props
  const Tag = tag!
  const className = classNames(
    props.className,
    navbar ? classes.NAVBAR_NAV : classes.NAV,
    {
      [classes.FLEX_COLUMN]: !!vertical,
      [classes[`JUSTIFY_CONTENT_XS_${justifyMap[justify!]}`]]: !!justifyMap[justify!],
    },
  )
  return <Tag {...others} className={className} />
}

Nav.displayName = 'xbrick.Nav'
Nav.defaultProps = {
  tag: 'ul',
  justify: 'start',
  vertical: false,
  navbar: false,
}
