import React from 'react'
import classNames from 'classnames'
import { IProps } from 'src/common/props'
import { MODAL_TITLE } from 'src/common/classes'

export interface IModalTitleProps extends IProps {
  /**
   * custom render component.
   * @default h5
   */
  tag?: string | React.Factory<any>
}

export const ModalTitle: React.StatelessComponent<IModalTitleProps> = function (props: IModalTitleProps) {
  const { tag, className, ...others } = props
  const Tag = tag!
  return <Tag {...others} className={modalTitleClass({className})} />
}

ModalTitle.displayName = 'xbrick.ModalTitle'
ModalTitle.defaultProps = { tag: 'h5' }

export function modalTitleClass({className}: {className?: string} = {}) {
  return classNames(className, MODAL_TITLE)
}
