import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps, InputSize } from 'src/common/props'

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
   * if it is Checkbox label, set this props true.
   * @default false
   */
  checkbox?: boolean
 
  /**
   * use with the Radio.
   * @default false
   */
  radio?: boolean

  /**
   * use with the FormGroup row.
   * @default false
   */
  col?: boolean
}

const sizeMap = {
  large: 'lg',
  small: 'sm',
}

export const Label: React.StatelessComponent<ILabelProps> = function (props: ILabelProps) {
  const { size, hiddren, checkbox, radio, col, ...others } = props
  const className = classNames(
    props.className,
    {
      [classes.SR_ONLY]: !!hiddren,
      [classes.COL_FORM_LABEL]: !!col,
      [classes.FORM_CHECK_LABEL]: !!checkbox || radio,
      [`${classes.COL_FORM_LABEL}-${sizeMap[size!]}`]: !!size && !!col,
    },
  )
  return <label {...others} className={className} />
}

Label.displayName = 'xbrick.Label'
Label.defaultProps = {
  size: 'middle',
  hiddren: false,
  checkbox: false,
  radio: false,
  col: false,
}
