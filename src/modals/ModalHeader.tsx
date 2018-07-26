import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'
import { Close } from 'src/modals/Close'

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
  const { tag, closeIcon, children, onIconClick, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.MODAL_HEADER)
  return (
    <Tag {...others} className={className}>
      {children}
      {React.cloneElement(closeIcon as React.ReactElement<any>, { onClick: onIconClick })}
    </Tag>
  )
}

ModalHeader.displayName = 'xbrick.ModalHeader'
ModalHeader.defaultProps = {
  tag: 'div',
  onIconClick: () => {/**/},
  closeIcon: <Close />,
}