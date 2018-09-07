import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Badge } from 'src/badge/Badge'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'light', 'dark']

describe('Badge', () => {
  const child = <p>111</p>
  notCrash(Badge)
  defaultTag(Badge, 'span')
  defaultProps(Badge, { tag: 'span' })
  renderChild(Badge, child, 'p')
  customTag(Badge, 'div', 'div')
  displayName(Badge, 'xbrick.Badge')

  it('should change color by using color props', () => {
    const node = mount(<Badge>1</Badge>)
    colors.forEach(color => {
      node.setProps({ color })
      expect(node.find('span').hasClass(`badge-${color}`)).toBe(true)
    })
  })

  it('should render pill badge if pill props is true', () => {
    const node = mount(<Badge pill>1</Badge>)
    expect(node.find('span').hasClass('badge-pill')).toBe(true)
  })
})
