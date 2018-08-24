import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IModalFooterProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const ModalFooter: React.StatelessComponent<IModalFooterProps> = function (props: IModalFooterProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.MODAL_FOOTER)
  return <Tag {...others} className={className} />
}

ModalFooter.displayName = 'xbrick.ModalFooter'
ModalFooter.defaultProps = {
  tag: 'div',
}
