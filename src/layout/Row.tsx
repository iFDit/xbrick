import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { omit, isObject } from 'lodash'
import { IProps, IRowLayout } from 'src/common/props'

export interface IRowProps extends IProps, IRowLayout {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * if true, then will not render container component and pass down layout className to children.
   * @default false
   */
  nowrap?: boolean

  /**
   * set no gutter between columns.
   * @default false
   */
  noGutter?: boolean
}

const omitProps = ['xs', 'sm', 'md', 'lg', 'xl', 'noGutter']
export const Row: React.StatelessComponent<IRowProps> = function (props: IRowProps) {
  const { tag, nowrap, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.ROW, getRowClass(props))

  return nowrap ?
    React.cloneElement(props.children, {className})
    : <Tag {...omit(others, omitProps)} className={className} />
}

Row.displayName = 'xbrick.Row'
Row.defaultProps = {
  tag: 'div',
  nowrap: false,
  noGutter: false,
}

function getRowClass(props: IRowProps) {
  return omitProps.map(propName => {
    if (propName === 'noGutter') {
      return {[classes.NO_GUTTERS]: !!props[propName]}
    }
    const result = {}
    const size = props[propName]
    if (isObject(size)) {
      const align = size.align || ''
      const justify = size.justify || ''
      result[classes[`ALIGN_ITEMS_${propName.toUpperCase()}_${align.toUpperCase()}`]] = !!align
      result[classes[`JUSTIFY_CONTENT_${propName.toUpperCase()}_${justify.toUpperCase()}`]] = !!justify
    }
    return result
  }).reduce((o1, o2) => ({...o1, ...o2}), {})
}
