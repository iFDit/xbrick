import React from 'react'
import classNames from 'classnames'
import * as classes from 'src/common/classes'
import { ModalContext } from 'src/modals/Modal'
import { IProps, ModalSize, ModalDialogAlign } from 'src/common/props'
import { Animate, IAnimateProps } from 'src/animate/Animate'

export interface IModalDialogProps extends IProps, Pick<IAnimateProps, 'transition' | 'afterStateChange'> {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * set Modal dialog alignment.
   * @default start
   */
  align?: ModalDialogAlign

  /**
   * show/hide ModalDialog.
   * @default false
   */
  show?: boolean

  /**
   * change modal size.
   * @default middle
   */
  size?: ModalSize
}

const sizeMap = { large: 'LG', small: 'SM' }
const alignMap = { center: true }
export const Dialog: React.StatelessComponent<IModalDialogProps> = function (props: IModalDialogProps) {
  const { align, size, show, active, transition, ...others } = props
  const Tag = props.tag!
  const className = classNames(
    props.className,
    classes.MODAL_DIALOG,
    {
      [classes[`MODAL_DIALOG_${align!.toUpperCase()}`]]: !!alignMap[align!],
      [classes[`MODAL_DIALOG_${sizeMap[size!]}`]]: !!sizeMap[size!],
    },
  )
  return (active ?
    <Animate {...others} transition={transition} className={className} from={getAnimateFrom(props)} to={getAnimateTo(props)} show={true} />
    : <Tag {...others} className={className} />
  )
}

Dialog.displayName = 'xbrick.Dialog'

function getAnimateFrom(props: IModalDialogProps) {
  const { show } = props
  return {
    'translateY-%': { value: show ? -25 : 0, config: {precision: 5}},
  }
}

function getAnimateTo(props: IModalDialogProps) {
  const { show } = props
  return {
    'translateY-%': show ? 0 : -25,
  }
}

export const ModalDialog: React.StatelessComponent<IModalDialogProps> = (props: IModalDialogProps) => (
  <ModalContext.Consumer>
    {({getModalDialogProps}) => <Dialog {...getModalDialogProps(props)}/>}
  </ModalContext.Consumer>
)

ModalDialog.displayName = 'xbrick.ModalDialog'
ModalDialog.defaultProps = {
  tag: 'div',
  show: false,
  align: 'start',
}
