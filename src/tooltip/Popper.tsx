import React from 'react'
import { Reference, Manager, Popper as ReactPopper, PopperChildrenProps } from 'react-popper'
import { get, isFunction } from 'lodash'
import { mergeCall } from 'src/common/util'
import { IProps } from 'src/common/props'

export interface IPopperProps extends IProps {
  /**
   * target node.
   */
  reference: React.ReactElement<any>

  /**
   * React Portal container.
   */
  el?: HTMLElement

  /**
   * render props
   */
  children: (props: PopperChildrenProps) => React.ReactNode
}

export class Popper extends React.Component<IPopperProps> {
  static displayName = 'xbrick.Popper'
  public renderPopper = () => {
    const { reference, el, ...others } = this.props
    const originalRef = get(reference, 'props.ref')
    const type = get(reference, 'type')
    const stateLess = isFunction(type)
    let refCall: any = null

    return (
      <Manager>
        <Reference>
          {({ ref }) => {
            if (!refCall) {
              refCall = mergeCall(originalRef, ref)
            }
            const props = stateLess ? {ref: refCall} : {ref}
            return React.cloneElement(reference, props)
          }}
        </Reference>
        {this.props.open && <ReactPopper {...others}/>}
      </Manager>
    )
  }

  render () {
    return this.renderPopper()
  }
}
