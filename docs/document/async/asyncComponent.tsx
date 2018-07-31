import * as React from 'react'
import { Loading } from 'docs/document/async/Loading'

export function asyncComponent(getComponent: any) {
  return class AsyncComponent extends React.Component {
    static Component = null
    public unmounting = false
    public state = {
      loaded: !!AsyncComponent.Component,
      Component: AsyncComponent.Component || Loading,
    }

    public componentWillMount() {
      if (!this.state.loaded) {
        getComponent()
          .then((Component: any) => !this.unmounting && this.setState({ Component }))
          .catch((err: any) => alert(err))
      }
    }

    public componentWillUnmount() {
      this.unmounting = true
    }

    render () {
      const { Component } = this.state
      const Render = Component!
      return <Render {...this.props} />
    }
  }
}
