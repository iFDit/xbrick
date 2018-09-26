import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { MODAL_CONTENT } from 'src/common/classes'

export interface IModalContentProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const ModalContent: React.StatelessComponent<IModalContentProps> = function (props: IModalContentProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={modalContentClass({className})} />
}

ModalContent.displayName = 'xbrick.ModalContent'
ModalContent.defaultProps = { tag: 'div' }

export function modalContentClass({className}: any) {
  return classNames(className, MODAL_CONTENT)
}
