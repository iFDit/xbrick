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
  const { inline, ...others } = props
  const className = classNames(props.className, { [FORM_INLINE]: !!inline })
  return <form {...others} className={className} />
}

Form.displayName = 'xbrick.Form'
Form.defaultProps = { inline: false }
