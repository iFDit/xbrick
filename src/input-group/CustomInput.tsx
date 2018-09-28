import React from 'react'
import classNames from 'classnames'
import { uniqId } from 'src/common/util'
import * as cls from 'src/common/classes'
import { IProps, InputSize } from 'src/common/props'
import { Input, IInputProps } from 'src/input-group/Input'

export interface ICustomInput extends IProps, IInputProps {
  /**
   * set custom checkbox or radio inline.
   * @default false
   */
  inline?: boolean
}

export const CustomInput: React.StatelessComponent<ICustomInput> = function (props: ICustomInput) {
  const { type, label, plainText, inline, size, id = uniqId(), className, ...others } = props
  const checkboxOrRadio = type === 'checkbox' || type === 'radio'
  return checkboxOrRadio ? (
    <div className={containerClass({inline, type})}>
      <input {...others} id={id} type={type} className={customInputClass({className, type, plainText, size})}/>
      {!!label && <label className={cls.CUSTOM_CONTROL_LABEL} htmlFor={id} >{label}</label>}
    </div>
  ) : type === 'select' ?
    (
      <>
        {!!label &&  <label className={cls.CUSTOM_CONTROL_LABEL} htmlFor={id} >{label}</label>}
        <select {...others} className={customInputClass({className, type, plainText, size})} />
      </>
    )
    : <Input {...props} />
}

CustomInput.displayName = 'xbrick.CustomInput'
CustomInput.defaultProps = {
  label: '',
  type: 'text',
  inline: false,
  plainText: false,
}

export type CustomInputClass = {
  className?: string,
  type?: string,
  plainText?: boolean,
  size?: InputSize,
}

export function customInputClass({className, type, plainText, size}: CustomInputClass = {}) {
  const sizeMap = { large: 'lg', small: 'sm' }
  const checkboxOrRadio = type === 'checkbox' || type === 'radio'
  return classNames(
    className,
    {
      [cls.CUSTOM_FILE]: type === 'file',
      [cls.CUSTOM_RANGE]: type === 'range',
      [cls.CUSTOM_SELECT]: type === 'select',
      [cls.FORM_CONTROL_PLAINTEXT]: !!plainText,
      [cls.CUSTOM_CONTROL_INPUT]: !!checkboxOrRadio,
      [`${cls.FORM_CONTROL}-${sizeMap[size!]}`]: !!sizeMap[size!] && !checkboxOrRadio,
    },
  )
}

export function containerClass({inline, type}: {inline?: boolean, type?: string} = {}) {
  return classNames({
    [cls.CUSTOM_CONTROL]: true,
    [cls.CUSTOM_RADIO]: type === 'radio',
    [cls.CUSTOM_CONTROL_INLINE]: !!inline,
    [cls.CUSTOM_CHECKBOX]: type === 'checkbox',
  })
}
