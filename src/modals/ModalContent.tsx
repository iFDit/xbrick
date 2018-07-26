import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

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
  const className = classNames(props.className, classes.MODAL_CONTENT)
  return <Tag {...others} className={className} />
}

ModalContent.displayName = 'xbrick.ModalContent'
ModalContent.defaultProps = {
  tag: 'div',
}
