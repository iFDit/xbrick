import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'
import { Fade } from 'src/animate/Fade'

export interface IModalBackdropProps extends IProps {
  /**
   * toggle backdrop show/hide.
   */
  show?: boolean

  /**
   * render to.
   */
  el?: HTMLElement
}

export const ModalBackdrop: any = function (props: IModalBackdropProps) {
  const { el = document.body, show = false, ...others } = props
  const className = classNames(props.className, classes.MODAL_BACKDROP)
  const from = show ? 0 : 0.5
  const to = show ? 0.5 : 0
  return ReactDOM.createPortal(
    <Fade {...others} className={className} from={from} to={to} show={true} />,
    el!,
  )
}
