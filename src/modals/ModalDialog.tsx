import React from 'react'
import classNames from 'classnames'
import * as cls from 'src/common/classes'
import { MODAL_DIALOG } from 'src/common/classes'
import { Animate, IAnimateProps } from 'src/animate/Animate'
import { IProps, ModalSize, ModalDialogAlign } from 'src/common/props'

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

export const ModalDialog: React.StatelessComponent<IModalDialogProps> = function (props: IModalDialogProps) {
  const { align, size, show, active, transition, className, ...others } = props
  const Tag = props.tag!
  const classes = modalDialogClass({className, align, size})
  return (active ?
    (
      <Animate
        {...others}
        transition={transition}
        className={classes}
        from={getAnimateFrom(props)}
        to={getAnimateTo(props)}
        show={true}
      />
    ) : <Tag {...others} className={classes} />
  )
}

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

ModalDialog.displayName = 'xbrick.ModalDialog'
ModalDialog.defaultProps = {
  tag: 'div',
  size: 'middle',
  show: false,
  align: 'start',
}

export function modalDialogClass({className, align, size}: any) {
  const sizeMap = { large: 'LG', small: 'SM' }
  const alignMap = { center: true }
  return classNames(
    className,
    MODAL_DIALOG,
    {
      [cls[`MODAL_DIALOG_${align!.toUpperCase()}`]]: !!alignMap[align!],
      [cls[`MODAL_DIALOG_${sizeMap[size!]}`]]: !!sizeMap[size!],
    },
  )
}
