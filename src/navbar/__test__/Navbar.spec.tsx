import React from 'react'
import { mount } from 'enzyme'
import { Navbar, navbarClass } from 'src/navbar/Navbar'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('Navbar', () => {
  const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'light', 'dark']
  const child = <p>111</p>
  notCrash(Navbar)
  defaultTag(Navbar, 'nav')
  defaultProps(Navbar, { tag: 'nav', expand: 'xs', color: 'light', reverse: false, sticky: false })
  renderChild(Navbar, child, 'p')
  customTag(Navbar, 'section', 'section')
  displayName(Navbar, 'xbrick.Navbar')

  it('should not crash when render Collapse only', () => {
    mount(<Navbar.Collapse/>)
  })

  it('should not crash when render Toggler only', () => {
    mount(<Navbar.Toggler/>)
  })

  it('should trigger origin onclick at Toggler components', next => {
    const node = mount(
      <Navbar>
        <Navbar.Toggler onClick={() => next()}/>
        <Navbar.Collapse/>
      </Navbar>,
    )
    node.find('.navbar-toggler').simulate('click')
  })

  it('should render correct className when set different props', () => {
    const node = mount(<Navbar />)
    expect(node.find('nav').hasClass('navbar')).toBe(true)
    expect(node.find('nav').hasClass('navbar-expand')).toBe(true)
    expect(node.find('nav').hasClass('navbar-light')).toBe(true)
    expect(node.find('nav').hasClass('bg-light')).toBe(true)
    node.setProps({ expand: 'sm' })
    expect(node.find('nav').hasClass('navbar-expand-sm')).toBe(true)
    node.setProps({ justify: 'center' })
    expect(node.find('nav').hasClass('justify-content-center')).toBe(true)
    node.setProps({ color: 'primary' })
    expect(node.find('nav').hasClass('bg-primary')).toBe(true)
    node.setProps({ reverse: true })
    expect(node.find('nav').hasClass('navbar-dark')).toBe(true)
    node.setProps({ sticky: true })
    expect(node.find('nav').hasClass('sticky-top')).toBe(true)
    node.setProps({ fixed: 'top' })
    expect(node.find('nav').hasClass('fixed-top')).toBe(true)
  })

  describe('modalContentClass', () => {
    it('should create default className', () => {
      const classnameTest = (classnames: string[], testClass: string[]) => {
        classnames.forEach(name => {
          expect(testClass.includes(name)).toBe(true)
        })
      }
      colors.forEach((color: any) => {
        const baseClass = [`bg-${color}`]
        classnameTest(baseClass, navbarClass({ color }).split(' '))
      })
      expect(navbarClass()).toBe('navbar navbar-expand navbar-light')
      expect(navbarClass({className: 'custom'})).toBe('custom navbar navbar-expand navbar-light')
      expect(navbarClass({className: 'custom', sticky: true})).toBe('custom navbar navbar-expand navbar-light sticky-top')
      expect(navbarClass({className: 'custom', reverse: true})).toBe('custom navbar navbar-expand navbar-dark')
      expect(navbarClass({className: 'custom', justify: 'start'})).toBe('custom navbar navbar-expand navbar-light justify-content-start')
      expect(navbarClass({className: 'custom', justify: 'center'})).toBe('custom navbar navbar-expand navbar-light justify-content-center')
      expect(navbarClass({className: 'custom', justify: 'end'})).toBe('custom navbar navbar-expand navbar-light justify-content-end')
      expect(navbarClass({className: 'custom', justify: 'around'})).toBe('custom navbar navbar-expand navbar-light justify-content-around')
      expect(navbarClass({className: 'custom', justify: 'between'})).toBe('custom navbar navbar-expand navbar-light justify-content-between')
      expect(navbarClass({className: 'custom', fixed: 'top'})).toBe('custom navbar navbar-expand navbar-light fixed-top')
      expect(navbarClass({className: 'custom', fixed: 'bottom'})).toBe('custom navbar navbar-expand navbar-light fixed-bottom')
      expect(navbarClass({className: 'custom', fixed: 'bottom'})).toBe('custom navbar navbar-expand navbar-light fixed-bottom')
    })
  })
})
