import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { isString, isNaN, omit } from 'lodash'
import { Animate } from 'src/animate/Animate'
import { AlertType, IProps } from 'src/common/props'
import * as classes from 'src/common/classes'
import * as classNames from 'classnames'

interface IAnimateWraperProps extends IProps {
  children?(props: {
    closed: boolean,
    height: number,
    toggleShow(arg: void): void,
    displayNone(arg: void): void,
    display?: string,
  }): React.ReactNode
}

interface IAnimateWraperState {
  closed: boolean
  height: number
  display?: string
}

class AnimateWraper extends React.Component<IAnimateWraperProps, IAnimateWraperState> {
  public state = { closed: false, height: 0 }

  public toggleShow = () => {
    const prev = this.state.closed
    this.setState({ closed: !prev })
  }

  public displayNone = () => {
    this.setState({ display: 'none' })
  }

  public componentDidMount() {
    const dom = ReactDOM.findDOMNode(this) as HTMLElement
    const { height } = dom.getBoundingClientRect()
    this.setState({ height })
  }

  render() {
    const children: (...args: any[]) => any = this.props.children!
    return children && children({
      ...this.state,
      toggleShow: this.toggleShow,
      displayNone: this.displayNone,
    })
  }
}

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
  const renderCloseText = isString(closeText) ? closeText : '×'
  const close = isString(closeText || renderCloseText) ?
    <span aria-hidden={true}>{renderCloseText}</span>
    : closeText

  return (
    <AnimateWraper>
      {({ closed, height, display, toggleShow, displayNone }) => (
        <Animate
          {...omit(rest, 'type')}
          close={closed}
          from={createAnimationFrom(height)}
          to={{opacity: 0, height: 0}}
          afterStateChange={() => displayNone((afterClose || noop)())}
          className={AlertClasses(props)}
          trigger="close"
          style={{ ...rest.style, overflow: 'hidden', display: display || ''}}
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
  style: {},
  onClose: noop,
  type: 'primary',
  closable: false,
}

function noop() { /**/ }

function createAnimationFrom(height: number): {[props: string]: number} {
  return height > 0 && !isNaN(height) ?
    {opacity: 1, height}
    : {opacity: 1}
}

function AlertClasses(props: IAlertProps) {
  const { type, closable, className } = props
  return classNames(
    className,
    classes.ALERT,
    closable && `${classes.ALERT_DISMISSIBLE}`,
    `${classes.ALERT}-${classes[type!.toUpperCase()]}`,
  )
}
