import React from 'react'
import * as ReactDOM from 'react-dom'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'
import { Fade } from 'src/animate/Fade'
import { ModalContext } from 'src/modals/Modal'

export interface IModalBackdropProps extends IProps {
  /**
   * render to.
   */
  el?: HTMLElement
}

export const Backdrop: any = function (props: IModalBackdropProps) {
  const { el = document.body, ...others } = props
  const className = classNames(props.className, classes.MODAL_BACKDROP)
  return ReactDOM.createPortal(
    <Fade {...others} className={className} show={true} />,
    el!,
  )
}

export const ModalBackdrop: React.StatelessComponent<IModalBackdropProps> = (props: IModalBackdropProps) => (
  <ModalContext.Consumer>
    {({getBackdropProps}) => <Backdrop {...getBackdropProps(props)}/>}
  </ModalContext.Consumer>
)
