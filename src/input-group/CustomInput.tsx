import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'
import { uniqId } from 'src/common/util'
import { Input, IInputProps, getInputSize } from 'src/input-group/Input'

export interface ICustomInput extends IProps, IInputProps {
  /**
   * set custom checkbox or radio inline.
   * @default false
   */
  inline?: boolean
}

export const CustomInput: React.StatelessComponent<ICustomInput> = function (props: ICustomInput) {
  const { type, label, plainText, inline, size, id = uniqId(), ...others } = props
  const checkboxOrRadio = type === 'checkbox' || type === 'radio'
  const className = classNames(
    props.className,
    classes.INPUT_CUSTOM,
    {
      [classes.CUSTOM_SELECT]: type === 'select',
      [classes.CUSTOM_CONTROL_INPUT]: !!checkboxOrRadio,
    },
    getInputSize(props),
  )
  const wrapClass = classNames({
    [classes.CUSTOM_CONTROL]: true,
    [classes.CUSTOM_CONTROL_INLINE]: !!inline,
    [classes.CUSTOM_RADIO]: type === 'radio',
    [classes.CUSTOM_CHECKBOX]: type === 'checkbox',
  })
  return checkboxOrRadio ? (
    <div className={wrapClass}>
      <input {...others} type={type} className={className} id={id} />
      <label className={classes.CUSTOM_CONTROL_LABEL} htmlFor={id} >{label}</label>
    </div>
  ) : type === 'select' ?
    (
      <>
        {!!label &&  <label htmlFor={id} >{label}</label>}
        <select {...others} className={className} />
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
