import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IFormPorps extends IProps {
  /**
   * show all FormGroup one line.
   * @default false
   */
  inline?: boolean
}

export const Form: React.StatelessComponent<IFormPorps> = function (props: IFormPorps) {
  const { inline, ...others } = props
  const className = classNames(props.className, { [classes.FORM_INLINE]: !!inline })
  return <form {...others} className={className} />
}

Form.displayName = 'xbrick.Form'
Form.defaultProps = {
  inline: false,
}
