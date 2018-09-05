import React from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { Fade } from 'src/animate/Fade'
import { IProps } from 'src/common/props'
import { MODAL_BACKDROP } from 'src/common/classes'

export interface IModalBackdropProps extends IProps {
  /**
   * render to.
   */
  el?: HTMLElement
}

export const ModalBackdrop: React.StatelessComponent<IModalBackdropProps> = function (props: IModalBackdropProps) {
  const { el = document.body, ...others } = props
  const className = classNames(props.className, MODAL_BACKDROP)
  return ReactDOM.createPortal(
    <Fade {...others} className={className} show={true} />,
    el!,
  ) as any
}

ModalBackdrop.displayName = 'xbrick.ModalBackdrop'
