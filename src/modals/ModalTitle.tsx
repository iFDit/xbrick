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
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, MODAL_TITLE)
  return <Tag {...others} className={className} />
}

ModalTitle.displayName = 'xbrick.ModalTitle'
ModalTitle.defaultProps = { tag: 'h5' }
