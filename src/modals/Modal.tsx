import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { get, omit } from 'lodash'
import { IProps } from 'src/common/props'
import { Animate } from 'src/animate/Animate'
import { ModalBackdrop } from 'src/modals/ModalBackdrop'
import { IModalDialogProps } from 'src/modals/ModalDialog'
import { mergeCall, setScrollbarWidth, getOriginalBodyPadding, conditionallyUpdateScrollbar } from 'src/common/util'

export interface IModalProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * modal component default state.
   * @default false
   */
  defaultOpen?: boolean

  /**
   * control the modal component open/close.
   * If this props was set, the Modal will become control component.
   */
  isOpen?: boolean

  /**
   * set Modal state change has transition or not.
   * @default true
   */
  transition?: boolean

  /**
   * render children.
   */
  children? (props?: any): React.ReactNode

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

  /**
   * show/hide Modal backdrop.
   * @default true
   */
  mask?: boolean
}

const omitProps = ['isOpen', 'transition', 'onOpen', 'onClose', 'defaultOpen', 'afterClose', 'afterOpen']

export class Modal extends React.Component<IModalProps> {
  static displayName = 'xbrick.Modal'
  static defaultProps = {
    tag: 'div',
    mask: true,
    transition: true,
    defaultOpen: false,
    children: () => null,
  }

  static getDerivedStateFromProps(props: IModalProps, state: any) {
    const isOpen = get(props, 'isOpen', props.defaultOpen)
    if (isOpen !== state.isOpen) {
      const nextState = { ...state, isOpen }
      if (isOpen) {
        nextState.display = 'block'
      }
      return nextState
    } else {
      return state
    }
  }

  public state = {
    display: !!get(this.props, 'defaultOpen', false) ? 'block' : 'none',
    isOpen: !!get(this.props, 'defaultOpen', false),
  }

  private _el: any
  private _bodyPadding: number

  constructor(props: IModalProps) {
    super(props)
    this._el = document.createElement('div')
    this._el.style.position = 'relative'
    this._el.style.zIndex = '1050'
    this._el.addEventListener('click', (e: MouseEvent) => {
      if (get(e, 'target.classList') && get(e, 'target.classList').contains(classes.MODAL)) {
        this.hide()
      }
    })
  }

  public hide = () => {
    const {onClose, isOpen} = this.props
    if (isOpen == null) {
      this.setState({ isOpen: false })
      onClose && onClose
    }
  }

  public afterAnimate = () => {
    const {afterOpen, afterClose} = this.props
    const { isOpen } = this.state
    if (!isOpen) {
      this.setState({ display: 'none' }, () => { afterClose && afterClose()})
    } else {
      afterOpen && afterOpen()
    }
  }

  public componentDidMount() {
    document.body.appendChild(this._el)
  }

  public componentWillUnmount() {
    document.body.removeChild(this._el)
  }

  private init = () => {
    const { isOpen } = this.state
    if (isOpen) {
      this._bodyPadding = getOriginalBodyPadding()
      conditionallyUpdateScrollbar()
      document.body.classList.add(classes.MODAL_OPEN)
    }
  }

  private handleHide = () => {
    const { isOpen } = this.state
    if (!isOpen) {
      document.body.classList.remove(classes.MODAL_OPEN)
      setScrollbarWidth(this._bodyPadding)
    }
  }

  private getModalDialogProps = (props: IModalDialogProps = {}) => {
    const { transition } = this.props
    const { isOpen } = this.state
    if (typeof props !== 'object') {
      return { transition, show: isOpen }
    }
    const nextProps = { ...props, transition, show: isOpen }
    return nextProps
  }

  render() {
    const { mask, transition, children, ...others } = this.props
    const { isOpen, display } = this.state
    const className = classNames(this.props.className, classes.MODAL)
    const afterStateChange = mergeCall(this.afterAnimate, this.handleHide)
    this.init()

    return ReactDOM.createPortal(
      <Animate {...omit(others, omitProps)}
        afterStateChange={afterStateChange}
        from={getAnimateFrom(isOpen)}
        to={getAnimateTo(isOpen)}
        transition={transition}
        className={className}
        style={{display}}
        show={true}
      >
        {children!({ hide: this.hide, getModalDialogProps: this.getModalDialogProps })}
        {mask && (
          <ModalBackdrop
            show={isOpen}
            transition={transition}
            el={this._el}
            style={{display}}
          />
        )}
      </Animate>,
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