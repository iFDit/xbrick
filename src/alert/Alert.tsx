import * as React from 'react'
import { AlertType, IProps } from 'src/common/props'
import { SlideUp } from 'src/animate/SlideUp'
import * as classes from 'src/common/classes'
import * as classNames from 'classnames'

export interface IAlertProps extends IProps {
  /**
   * Set Alert component type. Different types show different styles.
   * @default primary
   */
  type?: AlertType

  /**
   * Alert custom render tag.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * If props.open was set truly or falsy value then the Alert
   * show/hide will be control by ths value.
   */
  open?: boolean

  /**
   * Determines whether the component can be closed.
   * If this prop is enabled, then onClose and afterClose
   * will be called when component was dismiss.
   * @default false
   */
  closable?: boolean

  /**
   * The text use in close component.
   */
  closeText?: string | React.ReactNode

  /**
   * Handler invoked after the Alert was dismissed.
   */
  afterClose?(): void

  /**
   * Handler invoked when the Alert is canceled.
   * First argument is React.MouseEvent.
   * @default noop
   */
  onClose?(e?: React.MouseEvent<any>): void
}

export const Alert: React.StatelessComponent<IAlertProps> = function (props: IAlertProps) {
  const { onClose, afterClose, closable, closeText, ...rest } = props
  const nextProps = {
    ...rest,
    afterStateChange: afterClose,
    className: AlertClasses(props),
  }

  return (
    <SlideUp {...nextProps}>
      {(slideUp) => (
        <>
          {props.children}
          {closable ?
            <button
              className={classes.CLOSE}
              onClick={(e) => slideUp(onClose!(e))}
              aria-label="close"
            >
              {closeText || <span aria-hidden={true}>×</span>}
            </button>
            : null}
        </>
      )}
    </SlideUp>
  )
}

Alert.displayName = 'as-component.Alert'

Alert.defaultProps = {
  tag: 'div',
  style: {},
  onClose: noop,
  type: 'primary',
  closable: false,
}

function noop() { /**/ }

function AlertClasses(props: IAlertProps) {
  const { type, closable, className } = props
  return classNames(
    className,
    classes.ALERT,
    closable && `${classes.ALERT_DISMISSIBLE}`,
    `${classes.ALERT}-${classes[type!.toUpperCase()]}`,
  )
}
