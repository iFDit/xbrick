import React from 'react'
import classNames from 'classnames'
import { uniqId } from 'src/common/util'
import { Label } from 'src/input-group/Label'
import { IProps, InputType, InputSize } from 'src/common/props'
import { FORM_CONTROL, FORM_CHECK_INPUT, FORM_CONTROL_FILE, FORM_CONTROL_RANGE, FORM_CONTROL_PLAINTEXT } from 'src/common/classes'

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
  const { id = uniqId(),  type, size, label, inline, plainText, ...others } = props
  const file = type === 'file'
  const range = type === 'range'
  const checkOrRadio = type === 'radio' || type === 'checkbox'
  const Tag = type === 'select' ? 'select' : type === 'textarea' ? 'textarea' : 'input'
  const className = classNames(
    props.className,
    checkOrRadio ?
      FORM_CHECK_INPUT
      : file ?
        FORM_CONTROL_FILE
        : plainText ?
          FORM_CONTROL_PLAINTEXT
          : range ?
            FORM_CONTROL_RANGE
            : FORM_CONTROL,
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
  return !!sizeMap[size!] && !checkOrRadio ? `${FORM_CONTROL}-${sizeMap[size!]}` : false
}
