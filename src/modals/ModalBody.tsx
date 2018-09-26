import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { MODAL_BODY } from 'src/common/classes'

export interface IModalBodyProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const ModalBody: React.StatelessComponent<IModalBodyProps> = function (props: IModalBodyProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={modalBodyClass({className})} />
}

ModalBody.displayName = 'xbrick.ModalBody'
ModalBody.defaultProps = { tag: 'div' }

export function modalBodyClass({className}: any) {
  return classNames(className, MODAL_BODY)
}
