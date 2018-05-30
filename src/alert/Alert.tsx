import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { omit } from 'lodash'
import { Animate } from 'src/animate/Animate'
import { AlertType, IProps } from 'src/common/props'
import { AnimateWrapper } from 'src/animate/AnimateWrapper'
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

interface IAnimateWrapperState {
  closed: boolean
  height?: number
  bottom?: number
  display?: string
}

export const Alert: React.StatelessComponent<IAlertProps> = function (props: IAlertProps) {
  const { onClose, afterClose, closable, closeText, ...rest } = props
  const initState: IAnimateWrapperState = { closed: false }
  let wrap: any = null

  return (
    <AnimateWrapper initState={initState}>
      {({ closed, changeState, ...otherStyle}) => (
        <Animate
          {...omit(rest, 'type')}
          close={closed}
          from={closed ? createAnimationFrom(otherStyle as any) : {}}
          to={{opacity: 0, height: 0, marginBottom: 0}}
          afterStateChange={() => {changeState('display', 'none'); (afterClose || noop)()}}
          className={AlertClasses(props)}
          trigger="close"
          style={{...rest.style, ...otherStyle}}
          ref={(instance) => wrap = instance}
        >
          {props.children}
          {closable ?
            <button
              className={classes.CLOSE}
              onClick={(e) => 
                changeState(handleClose(ReactDOM.findDOMNode(wrap) as HTMLElement, () => onClose!(e)))
              }
              aria-label="close"
            >
              {closeText || <span aria-hidden={true}>×</span>}
            </button>
            : null}
        </Animate>
      )}
    </AnimateWrapper>
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

function createAnimationFrom({height, bottom}: {height: number, bottom: number}): FromType {
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

function handleClose(dom: HTMLElement, onClose?: () => void) {
  const overflow = 'hidden'
  const paddingTop = 0
  const paddingBottom = 0
  const { height } = dom.getBoundingClientRect()
  const bottom = parseInt(getComputedStyle(dom).getPropertyValue('margin-bottom') || '0', 10)
  onClose && onClose()
  return {closed: true, height, bottom, overflow, paddingTop, paddingBottom}
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
