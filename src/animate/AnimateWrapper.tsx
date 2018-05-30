import * as React from 'react'
import { isObject } from 'lodash'
import { IProps } from 'src/common/props'

export interface IAnimateWrapperProps<S> extends IProps {
  initState: S
  children?(props: S & {
    changeState: (key: string | {[prop: string]: any}, value?: any) => void,
  }): React.ReactNode
}

export class AnimateWrapper<S> extends React.Component<IAnimateWrapperProps<S>, S> {
  public state: S = this.props.initState

  public changeState = (prop: keyof S, val: any) => {
    if (isObject(prop)) {
      return this.setState(prop as any)
    }
    this.setState({ [prop]: val } as Pick<S, keyof S>)
  }

  public render() {
    const children: (...args: any[]) => any = this.props.children!
    return children && children({
      ...this.state as any,
      changeState: this.changeState,
    }) 
  }
}
