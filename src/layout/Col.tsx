import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps, IColumn } from 'src/common/props'
import { cloneWithClassName } from 'src/common/util'
import { omit, isObject, isString, isNumber, isBoolean } from 'lodash'

export interface IColProps extends IProps, IColumn {
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
}

const omitProps = ['xs', 'sm', 'md', 'lg', 'xl']
export const Col: React.StatelessComponent<IColProps> = function (props: IColProps) {
  const { tag, render, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, getColClass(props))
  return render ?
    <Tag {...omit(others, omitProps)} className={className}/>
    : cloneWithClassName(props.children, className)
}

Col.displayName = 'xbrick.Col'
Col.defaultProps = {
  tag: 'div',
  xs: 0,
  render: true,
}

function getColClass(props: IColProps) {
  return omitProps.map(propName => {
    const result = {}
    const size = props[propName]
    if (isString(size)) {
      result[`${classes[`COL_${propName.toUpperCase()}`]}-${size}`] = !!size
      return result
    }
    if (isNumber(size)) {
      result[`${classes[`COL_${propName.toUpperCase()}`]}${+size === 0 ? '' : `-${size}`}`] = true
      return result
    }
    if (isBoolean(size)) {
      result[`${classes[`COL_${propName.toUpperCase()}`]}`] = true
      return result
    }
    if (isObject(size)) {
      const align = size.align || ''
      const offset = size.offset || 0
      const order = size.order || 0
      const col = size.col
      result[classes[`ALIGN_SELF_${propName.toUpperCase()}_${align.toUpperCase()}`]] = !!align
      result[`${classes[`OFFSET_${propName.toUpperCase()}`]}-${offset}`] = !!offset
      result[`${classes[`ORDER_${propName.toUpperCase()}`]}-${order}`] = !!order
      result[`${classes[`COL_${propName.toUpperCase()}`]}${+col === 0 ? '' : `-${col}`}`] = !!col || col === 0
    }
    return result
  }).reduce((o1, o2) => ({...o1, ...o2}), {})
}
