import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { omit } from 'lodash'
import { IProps } from 'src/common/props'
import { Animate } from 'src/animate/Animate'
import { MODAL, MODAL_OPEN } from 'src/common/classes'
import { ModalDialog, IModalDialogProps } from 'src/modals/ModalDialog'
import { ModalBackdrop, IModalBackdropProps } from 'src/modals/ModalBackdrop'
import { mergeCall, setScrollbarWidth, getOriginalBodyPadding, conditionallyUpdateScrollbar } from 'src/common/util'

export interface IModalProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * control the modal component open/close.
   * If this props was set, the Modal will become control component.
   * @default false
   */
  open?: boolean

  /**
   * set Modal state change has transition or not.
   * @default true
   */
  transition?: boolean

  /**
   * invoking when Modal is close.
   */
  onClose? (): void

  /**
   * invoking when Modal has been close.
   * If transition is false, afterClose will be trigger immediately ater onClose.
   */
  afterClose? (): void

  /**
   * invoking when Modal has been open.
   * If transition is false, afterClose will be trigger immediately.
   */
  afterOpen? (): void
}

const omitProps = ['open', 'transition', 'onOpen', 'onClose', 'afterClose', 'afterOpen']

export const ModalContext = createContext({
  getModalDialogProps: (props: IModalDialogProps = {}) => props,
  getBackdropProps: (props: IModalBackdropProps = {}) => props,
})

export class Modal extends React.Component<IModalProps> {
  static displayName = 'xbrick.Modal'
  static defaultProps = {
    tag: 'div',
    open: false,
    transition: true,
  }
  static Dialog = (props: IModalDialogProps) => (
    <ModalContext.Consumer>
      {({getModalDialogProps}) => <ModalDialog {...getModalDialogProps(props)}/>}
    </ModalContext.Consumer>
  )
  static Backdrop = (props: IModalBackdropProps) => (
    <ModalContext.Consumer>
      {({getBackdropProps}) => <ModalBackdrop {...getBackdropProps(props)}/>}
    </ModalContext.Consumer>
  )
  static getDerivedStateFromProps(props: IModalProps, state: any) {
    if (state.lastOpen !== props.open) {
      return { ...state, lastOpen: props.open, active: true }
    }
    return null
  }
  static modalClass({className}: any) {
    return classNames(className, MODAL)
  }

  public state = {
    active: false,
    lastOpen: this.props.open,
  }

  private _el: any
  private _bodyPadding: any

  constructor(props: IModalProps) {
    super(props)
    this._el = document.createElement('div')
    this._el.style.position = 'relative'
    this._el.style.zIndex = '1050'
  }

  public afterAnimate = () => {
    const {afterOpen, afterClose} = this.props
    const { open } = this.props
    if (!open) {
      afterClose && afterClose()
    } else {
      afterOpen && afterOpen()
    }
    this.setState({ active: false })
  }

  public componentDidMount() {
    document.body.appendChild(this._el)
  }

  public componentWillUnmount() {
    document.body.removeChild(this._el)
  }

  private init = () => {
    const { open } = this.props
    if (open && this._bodyPadding == null) {
      this._bodyPadding = getOriginalBodyPadding()
      conditionallyUpdateScrollbar()
      document.body.classList.add(MODAL_OPEN)
    }
  }

  private handleHide = () => {
    const { open } = this.props
    if (!open) {
      document.body.classList.remove(MODAL_OPEN)
      setScrollbarWidth(this._bodyPadding)
      this._bodyPadding = null
    }
  }

  private getModalDialogProps = (props: IModalDialogProps = {}) => {
    const { transition, open } = this.props
    const { active } = this.state
    if (typeof props !== 'object') {
      return { transition, show: open, active }
    }
    const nextProps = { ...props, transition, show: open, active }
    return nextProps
  }

  private getBackdropProps = (props: IModalBackdropProps = {}) => {
    const { transition, open } = this.props
    const { active } = this.state
    const nextFrom = open ? 0 : 0.5
    const nextTo = open ? 0.5 : 0
    return {
      ...props,
      transition: active ? transition : false,
      from: active ? nextFrom : 0.5,
      to: active ? nextTo : 0.5,
      el: this._el,
      style: {display: !active && !open ? 'none' : 'block'},
    }
  }

  render() {
    const { style, open, transition, className, ...others } = this.props
    const { active } = this.state
    const Tag = this.props.tag!
    const classes = Modal.modalClass({className})
    const afterStateChange = mergeCall(this.afterAnimate, this.handleHide)
    const nextStyle = { ...style }
    this.init()
    nextStyle.display = !active && !open ? 'none' : 'block'

    return ReactDOM.createPortal(
      <ModalContext.Provider
        value={{
          getModalDialogProps: this.getModalDialogProps,
          getBackdropProps: this.getBackdropProps,
        }}
      >
        {active ?     
          <Animate {...omit(others, omitProps)}
            afterStateChange={afterStateChange}
            from={getAnimateFrom(open!)}
            to={getAnimateTo(open!)}
            transition={transition}
            className={classes}
            style={nextStyle}
            show={true}
          />
          : 
          <Tag {...omit(others, omitProps)} className={classes} style={nextStyle} />
        }

      </ModalContext.Provider>,
      this._el,
    )
  }
}

function getAnimateFrom(isOpen: boolean) {
  return {
    opacity: {value: isOpen ? 0 : 1, config: {precision: 0.4}},
  }
}

function getAnimateTo(isOpen: boolean) {
  return {
    opacity: isOpen ? 1 : 0,
  }
}
