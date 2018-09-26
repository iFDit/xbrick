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
  const { el = document.body, className, ...others } = props
  return ReactDOM.createPortal(
    <Fade {...others} className={modalBackdropClass({className})} show={true} />,
    el!,
  ) as any
}

ModalBackdrop.displayName = 'xbrick.ModalBackdrop'

export function modalBackdropClass({className}: any) {
  return classNames(className, MODAL_BACKDROP)
}
