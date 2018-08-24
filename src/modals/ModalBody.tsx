import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IModalBodyProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const ModalBody: React.StatelessComponent<IModalBodyProps> = function (props: IModalBodyProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.MODAL_BODY)
  return <Tag {...others} className={className} />
}

ModalBody.displayName = 'xbrick.ModalBody'
ModalBody.defaultProps = {
  tag: 'div',
}
