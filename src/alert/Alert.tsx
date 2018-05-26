import * as React from 'react'
import { isString } from 'lodash'
import { Animate } from 'src/animate/Animate'
import * as props from 'src/common/props'
import * as classes from 'src/common/classes'
import * as classNames from 'classnames'

export interface IAlertProps extends props.IProps {
  /**
   * Set Alert component type. Different types show different styles.
   * @default primary
   */
  type: props.AlertType

  /**
   * Alert custom render tag.
   * @default div
   */
  tag?: string | React.Factory<any>

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

export const Alert: React.StatelessComponent<IAlertProps> = function Alert(props: IAlertProps) {
  const { onClose, afterClose, closable, closeText, ...rest } = props
  const renderCloseText = isString(closeText) ? closeText : '×'
  const close = isString(closeText) ? <span aria-hidden={true}>{renderCloseText}</span> : closeText

  return (
    <AnimateWraper>
      {({ closed, toggleShow }) => (
        <Animate
          close={closed}
          from={{opacity: 1}}
          to={{opacity: 0}}
          afterStateChange={afterClose}
          className={AlertClasses(props)}
          trigger='close'
          {...rest}
        >
          {props.children}
          {closable ?
            <button className={classes.CLOSE} onClick={(e) => toggleShow(onClose!(e))} aria-label="close">
              {close}
            </button>
            : null}
        </Animate>
      )}
    </AnimateWraper>
  )
}

Alert.displayName = 'as-component.Alert'

Alert.defaultProps = {
  tag: 'div',
  onClose: noop,
  type: 'primary',
  closable: false,
}

function noop() {}

function AlertClasses(props: IAlertProps) {
  const { type, className } = props
  return classNames(
    className,
    classes.ALERT,
    `${classes.ALERT}-${classes[type.toUpperCase()]}`,
  )
}

interface IAnimateWraperProps extends props.IProps {
  children?(props: { closed: boolean, toggleShow(arg: void): void }): React.ReactNode
}

class AnimateWraper extends React.Component<IAnimateWraperProps, {closed: boolean}> {
  public state = { closed: false }

  public toggleShow = () => {
    const prev = this.state.closed
    this.setState({ closed: !prev })
  }

  render() {
    return this.props.children && this.props.children({ ...this.state, toggleShow: this.toggleShow })
  }
}
