import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { ROW, FORM_GROUP, FORM_CHECK, FORM_CHECK_INLINE } from 'src/common/classes'

export interface IFormGroupProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * use for checkbox or radio components.
   * @default false
   */
  check?: boolean

  /**
   * display FormGroup one line.
   * @default false
   */
  row?: boolean

  /**
   * use with check, show check item one line.
   * @default false
   */
  inline?: boolean
}

export const FormGroup: React.StatelessComponent<IFormGroupProps> = function (props: IFormGroupProps) {
  const { tag, row, check, inline, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, {
    [ROW]: !!row,
    [FORM_GROUP]: !check,
    [FORM_CHECK]: !!check,
    [FORM_CHECK_INLINE]: !!check && !!inline,
  })
  return <Tag {...others} className={className} />
}

FormGroup.displayName = 'xbrick.FormGroup'
FormGroup.defaultProps = {
  tag: 'div',
  row: false,
  check: false,
  inline: false,
}
