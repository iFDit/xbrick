import React from 'react'
import classNames from 'classnames'
import { omit, isObject } from 'lodash'
import * as cls from 'src/common/classes'
import { cloneWithClassName } from 'src/common/util'
import { IProps, IRowLayout } from 'src/common/props'

export interface IRowProps extends IProps, IRowLayout {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * if false, then will not render container component and pass down layout className to children.
   * @default true
   */
  render?: boolean

  /**
   * set no gutter between columns.
   * @default false
   */
  noGutter?: boolean
}

const omitProps = ['xs', 'sm', 'md', 'lg', 'xl', 'noGutter']
export const Row: React.StatelessComponent<IRowProps> = function (props: IRowProps) {
  const { tag, render, className, ...others } = props
  const Tag = tag!

  return render ?
    <Tag {...omit(others, omitProps)} className={rowClass({className, ...others})} />
    : cloneWithClassName(props.children, rowClass({className, ...others}))
}

Row.displayName = 'xbrick.Row'
Row.defaultProps = {
  tag: 'div',
  render: true,
  noGutter: false,
}

export function rowClass({className, ...others}: {className?: string, [prop: string]: any} = {}) {
  return classNames(className, cls.ROW, omitProps.map(propName => {
    if (propName === 'noGutter') {
      return {[cls.NO_GUTTERS]: !!others[propName]}
    }
    const result = {}
    const size = others[propName]
    if (isObject(size)) {
      const align = size.align || ''
      const justify = size.justify || ''
      result[cls[`ALIGN_ITEMS_${propName.toUpperCase()}_${align.toUpperCase()}`]] = !!align
      result[cls[`JUSTIFY_CONTENT_${propName.toUpperCase()}_${justify.toUpperCase()}`]] = !!justify
    }
    return result
  }).reduce((o1, o2) => ({...o1, ...o2}), {}))
}
