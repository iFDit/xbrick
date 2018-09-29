import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ListGroupItem, listGroupItemClass } from 'src/list-group/ListGroupItem'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('ListGroupItem', () => {
  const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'light', 'dark']
  const child = <p>111</p>
  notCrash(ListGroupItem)
  defaultTag(ListGroupItem, 'li')
  defaultProps(ListGroupItem, { tag: 'li', disabled: false, active: false, dynamic: false })
  renderChild(ListGroupItem, child, 'p')
  customTag(ListGroupItem, 'section', 'section')
  displayName(ListGroupItem, 'xbrick.ListGroupItem')

  it('should render correct className when set different props', () => {
    const node = mount(<ListGroupItem/>)
    expect(node.find('li').hasClass('list-group-item')).toBe(true)
    node.setProps({ color: 'primary' })
    expect(node.find('li.list-group-item').hasClass('list-group-item-primary')).toBe(true)
    node.setProps({ dynamic: true })
    expect(node.find('li.list-group-item').hasClass('list-group-item-action')).toBe(true)
    node.setProps({ disabled: true })
    expect(node.find('li.list-group-item').hasClass('disabled')).toBe(true)
    node.setProps({ disabled: false, active: true })
    expect(node.find('li.list-group-item').hasClass('active')).toBe(true)
  })

  describe('listGroupItemClass', () => {
    it('should create default className', () => {
      const classnameTest = (classnames: string[], testClass: string[]) => {
        classnames.forEach(name => {
          expect(testClass.includes(name)).toBe(true)
        })
      }
      expect(listGroupItemClass()).toBe('list-group-item')
      expect(listGroupItemClass({className: 'custom'})).toBe('custom list-group-item')
      expect(listGroupItemClass({className: 'custom', dynamic: true})).toBe('custom list-group-item list-group-item-action')
      expect(listGroupItemClass({className: 'custom', disabled: true})).toBe('custom list-group-item disabled')
      expect(listGroupItemClass({className: 'custom', disabled: true})).toBe('custom list-group-item disabled')
      expect(listGroupItemClass({className: 'custom', active: true})).toBe('custom list-group-item active')
      colors.forEach((color: any) => {
        const baseClass = ['list-group-item', `list-group-item-${color}`]
        classnameTest(baseClass, listGroupItemClass({ color }).split(' '))
      })
    })
  })
})
