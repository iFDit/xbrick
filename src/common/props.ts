export type AlertType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type BadgeType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type ButtonType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link'
export type ListGroupItemType = ButtonType
export type ButtonSize = 'small' | 'large' | 'middle'
export type CardType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type CardAlign = 'left' | 'center' | 'right'
export type InputSize = 'small' | 'large' | 'middle'
export type ModalSize = 'small' | 'large' | 'middle'
/* tslint:disable */
export type InputType = 'text' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'button' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'time' | 'url' | 'week'
/* tslint:enable */
export type Direction = 'left' | 'right' | 'up'

export interface IProps {
  [prop: string]: any
}

export type LayoutDirec = 'start' | 'center' | 'end'
export type NavJustify = LayoutDirec | JustifyDirec
export type MediaObjectAlign = LayoutDirec
export type ModalDialogAlign = 'start' | 'center'
export type Auto = 'auto'
export type JustifyDirec = 'around' | 'between'
export type ColumnSize = string | number | boolean | {
  offset?: number,
  order?: number,
  col?: number | string,
  align?: LayoutDirec | Auto,
}
export type RowSize = { align?: LayoutDirec, justify?: LayoutDirec | JustifyDirec }
export interface IColumn {
  xs?: ColumnSize
  sm?: ColumnSize
  md?: ColumnSize
  lg?: ColumnSize
  xl?: ColumnSize
}
export interface IRowLayout {
  xs?: RowSize
  sm?: RowSize
  md?: RowSize
  lg?: RowSize
  xl?: RowSize
}
