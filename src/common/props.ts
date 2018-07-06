export type AlertType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type BadgeType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type ButtonType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
export type ButtonSize = 'small' | 'large' | 'middle'
export type CardType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type CardAlign = 'left' | 'center' | 'right'
export type InputSize = 'small' | 'large' | 'middle'
/* tslint:disable */
export type InputType = 'text' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'button' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'time' | 'url' | 'week'
/* tslint:enable */
export type Direction = 'left' | 'right' | 'up'

export interface IProps {
  [prop: string]: any
}
