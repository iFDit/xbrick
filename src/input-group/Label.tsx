import React from 'react'
import classNames from 'classnames'
import { IProps, InputSize } from 'src/common/props'
import { SR_ONLY, COL_FORM_LABEL, FORM_CHECK_LABEL } from 'src/common/classes'

export interface ILabelProps extends IProps {
  /**
   * set label size, usual the same as Input size.
   * @default middle
   */
  size?: InputSize

  /**
   * hide/show label.
   * @default false
   */
  hiddren?: boolean

  /**
   * if it is Checkbox or Radio label, set this props true.
   * @default false
   */
  check?: boolean

  /**
   * use with the FormGroup row.
   * @default false
   */
  col?: boolean
}

export const Label: React.StatelessComponent<ILabelProps> = function (props: ILabelProps) {
  const { col, size, check, hiddren, className, ...others } = props
  return <label {...others} className={labelClass({className, hiddren, col, check, size})} />
}

Label.displayName = 'xbrick.Label'
Label.defaultProps = {
  col: false,
  check: false,
  size: 'middle',
  hiddren: false,
}

export function labelClass({className, hiddren, col, check, size}: any) {
  const sizeMap = { large: 'lg', small: 'sm' }
  return classNames(
    className,
    'xbrick-lable',
    {
      [SR_ONLY]: !!hiddren,
      [COL_FORM_LABEL]: !!col,
      [FORM_CHECK_LABEL]: !!check,
      [`${COL_FORM_LABEL}-${sizeMap[size!]}`]: !!sizeMap[size!] && !!col,
    },
  )
}
