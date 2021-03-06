import React from 'react'
import classNames from 'classnames'
import { Close } from 'src/common/Close'
import { IProps } from 'src/common/props'
import { MODAL_HEADER } from 'src/common/classes'

export interface IModalHeaderProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * set close icon.
   * @default Close
   */
  closeIcon?: React.ReactNode

  /**
   * invoking when closeIcon click.
   */
  onIconClick? (): void
}

export const ModalHeader: React.StatelessComponent<IModalHeaderProps> = function (props: IModalHeaderProps) {
  const { tag, closeIcon, children, onIconClick, className, ...others } = props
  const Tag = tag!
  return (
    <Tag {...others} className={modalHeaderClass({className})}>
      {children}
      {closeIcon && React.cloneElement(closeIcon as React.ReactElement<any>, { onClick: onIconClick })}
    </Tag>
  )
}

ModalHeader.displayName = 'xbrick.ModalHeader'
ModalHeader.defaultProps = {
  tag: 'div',
  onIconClick: () => {/**/},
  closeIcon: <Close />,
}

export function modalHeaderClass({className}: {className?: string} = {}) {
  return classNames(className, MODAL_HEADER)
}
