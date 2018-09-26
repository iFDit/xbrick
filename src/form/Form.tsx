import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { FORM_INLINE } from 'src/common/classes'

export interface IFormPorps extends IProps {
  /**
   * show all FormGroup one line.
   * @default false
   */
  inline?: boolean
}

export const Form: React.StatelessComponent<IFormPorps> = function (props: IFormPorps) {
  const { inline, className, ...others } = props
  return <form {...others} className={formClass({className})} />
}

Form.displayName = 'xbrick.Form'
Form.defaultProps = { inline: false }

export function formClass({className, inline}: any) {
  return classNames(className, { [FORM_INLINE]: !!inline })
}
