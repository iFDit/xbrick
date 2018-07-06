import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'
import { uniqId } from 'src/common/util'
import { Input, IInputProps, getInputSize } from 'src/input-group/Input'

export interface ICustomInput extends IProps, IInputProps {
  /**
   * use with the Custom checkbox or radio.
   * @default ''
   */
  label?: string | React.Factory<any>
}

export const CustomInput: React.StatelessComponent<ICustomInput> = function (props: ICustomInput) {
  const { type, label, plainText, size, id = uniqId(), ...others } = props
  const checkboxOrRadio = type === 'checkbox' || type === 'radio'
  const className = classNames(
    props.className,
    {
      [classes.CUSTOM_SELECT]: type === 'select',
      [classes.CUSTOM_CONTROL_INPUT]: !!checkboxOrRadio,
    },
    getInputSize(props),
  )
  return checkboxOrRadio ? (
    <div
      className={`${classes.CUSTOM_CONTROL} ${type === 'radio' ? classes.CUSTOM_RADIO : classes.CUSTOM_CHECKBOX }`}
    >
      <input type={type} className={className} {...others} id={id} />
      <label className={classes.CUSTOM_CONTROL_LABEL} htmlFor={id} >{label}</label>
    </div>
  ) : type === 'select' ?
    <select {...others} className={className} />
    : <Input type={type} plainText={plainText} {...others} />
}

CustomInput.displayName = 'xbrick.CustomInput'
CustomInput.defaultProps = {
  label: '',
  type: 'text',
  plainText: false,
}
