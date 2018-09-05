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
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, MODAL_CONTENT)
  return <Tag {...others} className={className} />
}

ModalContent.displayName = 'xbrick.ModalContent'
ModalContent.defaultProps = { tag: 'div' }
