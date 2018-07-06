import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps, InputType, InputSize } from 'src/common/props'

export interface IInputProps extends IProps {
  /**
   * use for render difference element.
   * @default text
   */
  type?: InputType
  /**
   * render readonly plain text when Iuput props type is text.
   * @default false
   */
  plainText?: boolean

  /**
   * set input component size.
   * @default middle
   */
  size?: InputSize
}

const sizeMap = {
  large: 'lg',
  small: 'sm',
}

export const Input: React.StatelessComponent<IInputProps> = function (props: IInputProps) {
  const { type, size, plainText, ...others } = props
  const checkOrRadio = type === 'radio' || type === 'checkbox'
  const Tag = type === 'select' ? 'select' : type === 'textarea' ? 'textarea' : 'input'
  const className = classNames(
    props.className,
    checkOrRadio ? classes.FORM_CHECK_INPUT : classes.FORM_CONTROL,
    {[classes.FORM_CONTROL_PLAINTEXT]: !!plainText},
    getInputSize(props),
  )
  return <Tag {...others} type={type} className={className} />
}

Input.displayName = 'xbrick.Input'
Input.defaultProps = {
  plainText: false,
}

export function getInputSize(props: IInputProps) {
  const { type, size } = props
  const checkOrRadio = type === 'radio' || type === 'checkbox'
  return !!sizeMap[size!] && !checkOrRadio ? `${classes.FORM_CONTROL}-${sizeMap[size!]}` : false
}
