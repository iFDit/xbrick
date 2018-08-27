import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

export function notCrash(Component: React.SFC<any>) {
  describe(' - TEST - not crash', () => {
    it('should be rendered without crash', () => {
      mount(<Component />)
    })
  })
}

export function defaultTag(Component: React.SFC<any>, selector: string) {
  describe(' - TEST - default tag', () => {
    it(`should be rendered default tag with ${selector}`, () => {
      const node = mount(<Component />)
      expect(node.find(selector).hostNodes().length).toBeGreaterThanOrEqual(1)
    })
  })
}

export function defaultProps(Component: React.SFC<any>, props: any = {}) {
  describe(' - TEST - default props', () => {
    it('should be rendered with default props', () => {
      const node = mount(<Component {...props}/>)
      const keys = Object.keys(props)
      keys.forEach(key => {
        expect(node.prop(key)).toBe(props[key])
      })
    })
  })
}

export function renderChild(Component: React.SFC<any>, children: any, selector: any) {
  describe('- TEST - render children', () => {
    it('should be rendered children', () => {
      const node = mount(<Component>{children}</Component>)
      expect(node.find(selector).hostNodes().length).toBeGreaterThanOrEqual(1)
    })
  })
}

export function customTag(Component: React.SFC<any>, tag: string | React.Factory<any>, selector: string) {
  describe(' - TEST - custom tags', () => {
    it(`should be rendered with custom tag with ${selector}`, () => {
      const node = mount(<Component tag={tag} />)
      expect(node.find(selector).hostNodes().length).toBeGreaterThanOrEqual(1)
    })
  })
}

export function displayName(Component: React.SFC<any>, name: string) {
  describe(' - TEST - display name', () => {
    it(`should be rendered with ${name} name`, () => {
      expect(Component.displayName).toBe(name)
    })
  })
}
