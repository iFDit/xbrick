import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

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
  const className = classNames(props.className, classes.MODAL_TITLE)
  return <Tag {...others} className={className} />
}

ModalTitle.displayName = 'xbrick.ModalTitle'
ModalTitle.defaultProps = {
  tag: 'h5',
}
