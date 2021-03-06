export type AlertType = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
export type BadgeType = AlertType
export type ButtonType = AlertType | 'link'
export type ProgressType = AlertType
export type ListGroupItemType = ButtonType
export type ButtonSize = 'small' | 'large' | 'middle'
export type CardType = AlertType
export type CardAlign = 'left' | 'center' | 'right'
export type InputSize = ButtonSize
export type ModalSize = ButtonSize
/* tslint:disable */
export type InputType = 'text' | 'textarea' | 'select' | 'checkbox' | 'radio' | 'button' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'time' | 'url' | 'week'
/* tslint:enable */
export type Direction = 'left' | 'right' | 'up'
export type InputGroupPosition = 'prepend' | 'append'
export type PageDirection = 'prev' | 'next'
export interface IProps {
  [prop: string]: any
}

export type LayoutDirec = 'start' | 'center' | 'end'
export type NavJustify = LayoutDirec | JustifyDirec
export type PaginationJustify = LayoutDirec
export type PaginationSize = ButtonSize
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

export type NavbarExpand = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type NavbarFixed = 'top' | 'bottom'
export type NavbarJustify = LayoutDirec | JustifyDirec
export type NavbarBgColor = AlertType
export interface INavbarChildrenProps<T> {
  getTogglerProps: (props?: T) => T
  getCollapseProps: (props?: T) => T
}

export type PopoverPlacement = 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
export type tooltipPlacement = 'top' | 'bottom' | 'left' | 'right'
export type TableBoder = 'normal' | 'none' | 'full'
export type TableSize = 'small' | 'middle'
export type TableType = AlertType
export type TableCellType = 'td' | 'th'
