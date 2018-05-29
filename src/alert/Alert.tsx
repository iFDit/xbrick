import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { isString, omit } from 'lodash'
import { Animate } from 'src/animate/Animate'
import { AlertType, IProps } from 'src/common/props'
import { AnimateWraper } from 'src/animate/AnimateWraper'
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

interface IAnimateWraperState {
  closed: boolean
  height?: number
  bottom?: number
  display?: string
}

export const Alert: React.StatelessComponent<IAlertProps> = function (props: IAlertProps) {
  const { onClose, afterClose, closable, closeText, ...rest } = props
  const renderCloseText = isString(closeText) ? closeText : '×'
  const close = isString(closeText || renderCloseText) ?
    <span aria-hidden={true}>{renderCloseText}</span>
    : closeText
  const initState: IAnimateWraperState = { closed: false }
  let wrap: any = null

  return (
    <AnimateWraper initState={initState}>
      {({ closed, height, bottom, display, changeState }) => (
        <Animate
          {...omit(rest, 'type')}
          close={closed}
          from={closed ? createAnimationFrom(height!, bottom!) : {}}
          to={{opacity: 0, height: 0, marginBottom: 0}}
          afterStateChange={() => {changeState('display', 'none'); (afterClose || noop)()}}
          className={AlertClasses(props)}
          trigger="close"
          style={{
            ...rest.style,
            overflow: 'hidden',
            display: display || '',
            paddingTop: closed ? 0 : '',
            paddingBottom: closed ? 0 : '',
          }}
          ref={(instance) => wrap = instance}
        >
          {props.children}
          {closable ?
            <button
              className={classes.CLOSE}
              onClick={(e) => {
                const dom = ReactDOM.findDOMNode(wrap) as HTMLElement
                const { height: h } = dom.getBoundingClientRect()
                const b = parseInt(getComputedStyle(dom).getPropertyValue('margin-bottom') || '0', 10)
                changeState({ height: h, bottom: b, closed: true })
                onClose!(e)
              }}
              aria-label="close"
            >
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

type FromType =  {
  [props: string]: number | {value: number, config: {[prop: string]: number}},
}

function createAnimationFrom(height: number, bottom: number): FromType {
  const heightConfig = {precision: 5}
  const opacityConfig = {precision: 0.2}
  const opacity = {opacity: { value: 1, config: opacityConfig }}
  return height > 0 && bottom > 0 && !isNaN(height) ?
    {
      ...opacity,
      height: { value: height, config: heightConfig},
      marginBottom: { value: bottom, config: heightConfig},
    }
    : opacity
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
