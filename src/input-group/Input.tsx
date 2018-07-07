import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { uniqId } from 'src/common/util'
import { Label } from 'src/input-group/Label'
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
  
  /**
   * A shortcut to create a Label
   * @default ''
   */
  label?: string | React.ReactNode
}

const sizeMap = {
  large: 'lg',
  small: 'sm',
}

export const Input: React.StatelessComponent<IInputProps> = function (props: IInputProps) {
  const { id = uniqId(),  type, size, label, plainText, ...others } = props
  const file = type === 'file'
  const checkOrRadio = type === 'radio' || type === 'checkbox'
  const Tag = type === 'select' ? 'select' : type === 'textarea' ? 'textarea' : 'input'
  const className = classNames(
    props.className,
    checkOrRadio ?
      classes.FORM_CHECK_INPUT
      : file ?
        classes.FORM_CONTROL_FILE
        : plainText ?
          classes.FORM_CONTROL_PLAINTEXT
          : classes.FORM_CONTROL,
    getInputSize(props),
  )
  return (
    <>
      {!checkOrRadio && !!label && <Label htmlFor={id}>{label}</Label>}
      <Tag {...others} id={id} type={type} className={className} />
      {checkOrRadio && !!label && <Label htmlFor={id}>{label}</Label>}
    </>
  )
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
