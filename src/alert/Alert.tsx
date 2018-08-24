import React, { createContext } from 'react'
import { IProps } from 'src/common/props'
import { UncontrolledSlide } from 'src/animate/UncontrolledSlide'
import { mergeCall } from 'src/common/util'
import { Close, ICloseProps } from 'src/common/Close'
import * as cls from 'src/common/classes'

export interface IAlertProps extends IProps {
  /**
   * Alert custom render tag.
   * @default div
   */
  tag?: string | React.Factory<any>

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
  const { afterClose, ...others } = props

  return (
    <UncontrolledSlide {...others} afterStateChange={afterClose} defaultOpen={true}>
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
Alert.defaultProps = { tag: 'div' }
Alert.Close = AlertClose

export const AlertStyles = {
  ALERT: cls.ALERT,
  PRIMARY: cls.A_PRIMARY,
  SECONDARY: cls.A_SECONDARY,
  SUCCESS: cls.A_SUCCESS,
  DANGER: cls.A_DANGER,
  WARNING: cls.A_WARNING,
  INFO: cls.A_INFO,
  LIGHT: cls.A_LIGHT,
  DARK: cls.A_DARK,
  CLOSE: cls.CLOSE,
  HEADING: cls.A_HEADING,
  DISMISSIBLE: cls.A_DISMISSIBLE,
}
