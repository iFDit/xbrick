import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Dropdown, dropdownClass } from 'src/dropdowns/Dropdown'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Dropdown', () => {
  const child = <p>111</p>
  notCrash(Dropdown)
  defaultTag(Dropdown, 'div')
  defaultProps(Dropdown, { tag: 'div' })
  renderChild(Dropdown, child, 'p')
  customTag(Dropdown, 'section', 'section')
  displayName(Dropdown, 'xbrick.Dropdown')

  it('should not crash when render Toggle only', () => {
    mount(<Dropdown.Toggle/>)
  })

  it('should not crash when render Menu only', () => {
    mount(<Dropdown.Menu/>)
  })

  it('should not crash when render Item only', () => {
    mount(<Dropdown.Item/>)
  })

  it('should set difference direction by using direction props', () => {
    const node = mount(<Dropdown direction="up"/>)
    expect(node.find('div').hasClass('dropup')).toBe(true)
    node.setProps({ direction: 'right' })
    expect(node.find('div').hasClass('dropright')).toBe(true)
    node.setProps({ direction: 'left' })
    expect(node.find('div').hasClass('dropleft')).toBe(true)
    node.unmount()
  })

  it('should toggle menu when click DropdownToggle components', () => {
    const node = mount(
      <Dropdown>
        <Dropdown.Toggle>toggle</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>1</Dropdown.Item>
          <Dropdown.Item>2</Dropdown.Item>
          <Dropdown.Item>3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>,
    )

    const Toggle = node.find('.dropdown-toggle')
    Toggle.simulate('click')
    expect(node.find('.dropdown-menu').first().render().css('display')).not.toBe('none')
  })

  it('should not close when click dropdown inner', () => {
    // const window = global as any
    const node = mount(
      <Dropdown>
        <Dropdown.Toggle>toggle</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>1</Dropdown.Item>
          <Dropdown.Item>2</Dropdown.Item>
          <Dropdown.Item>3</Dropdown.Item>
        </Dropdown.Menu>
        <p>test</p>
      </Dropdown>,
    )
    node.find(Dropdown.Toggle).simulate('click')
    node.find('p').first().simulate('click')
    expect(node.state('open')).toBe(true)
  })

  it('should close when click dropdown outer', () => {
    const window = global as any
    const node = mount(
      <Dropdown>
        <Dropdown.Toggle>toggle</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item>1</Dropdown.Item>
          <Dropdown.Item>2</Dropdown.Item>
          <Dropdown.Item>3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>,
    )
    node.find(Dropdown.Toggle).simulate('click')
    window.document.body.dispatchEvent(new MouseEvent('click', {bubbles: true}))
    expect(node.state('open')).toBe(false)
  })

  describe('dropdownClass', () => {
    it('should create default className', () => {
      expect(dropdownClass()).toBe('dropdown')
      expect(dropdownClass({className: 'custom'})).toBe('custom dropdown')
      expect(dropdownClass({className: 'custom', open: true})).toBe('custom dropdown active')
      expect(dropdownClass({className: 'custom', direction: 'up'})).toBe('custom dropdown dropup')
      expect(dropdownClass({className: 'custom', direction: 'left'})).toBe('custom dropdown dropleft')
      expect(dropdownClass({className: 'custom', direction: 'right'})).toBe('custom dropdown dropright')
    })
  })
})
