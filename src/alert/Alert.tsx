import React, { createContext } from 'react'
import classNames from 'classnames'
import { IProps, AlertType } from 'src/common/props'
import { UncontrolledSlide } from 'src/animate/UncontrolledSlide'
import { mergeCall } from 'src/common/util'
import { Close, ICloseProps } from 'src/common/Close'
import { ALERT } from 'src/common/classes'
import * as cls from 'src/common/classes'

export interface IAlertProps extends IProps {
  /**
   * Alert custom render tag.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * shortcut of color styles.
   * @default primary
   */
  color?: AlertType

  /**
   * Handler invoked after the Alert was dismissed.
   */
  afterClose?(): void
}

export interface IAlertComponent extends React.StatelessComponent<IAlertProps> {
  Close: React.StatelessComponent<any>
}

export const AlertContext = createContext({
  handleCloseProps: (props: ICloseProps) => props,
})

export const Alert: IAlertComponent = function (props: IAlertProps) {
  const { color, afterClose, ...others } = props
  const className = classNames(props.className, ALERT, {
    [cls[`A_${color!.toUpperCase()}`]]: !!color,
  })
  return (
    <UncontrolledSlide {...others} afterStateChange={afterClose} defaultOpen={true} className={className}>
      {({ slideup }) => (
        <AlertContext.Provider value={{
          handleCloseProps: (closeProps: ICloseProps = {}) => ({ ...closeProps, onClick: mergeCall(closeProps.onClick, slideup)}),
        }}
        >
          {props.children}
        </AlertContext.Provider>
      )}
    </UncontrolledSlide>
  )
} as any

const AlertClose: React.StatelessComponent<any> = (props: ICloseProps) => (
  <AlertContext.Consumer>
    {({handleCloseProps}) => <Close {...handleCloseProps(props)}/>}
  </AlertContext.Consumer>
)
AlertClose.displayName = 'xbrick.AlertClose'

Alert.displayName = 'xbrick.Alert'
Alert.defaultProps = { tag: 'div', color: 'primary' }
Alert.Close = AlertClose


export const AlertStyles = {
  header: cls.A_HEADING,
  dismissible: cls.A_DISMISSIBLE,
}
