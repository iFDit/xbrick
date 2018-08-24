import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { DropdownItem } from 'src/dropdowns/DropdownItem'

describe('DropdownItem', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(DropdownItem)

  it('should render without crash', () => {
    mount(F())
  })

  it('should render ReactNode Children', () => {
    const render = mount(F(null, p(null, 'button')))

    expect(render.find('p').hostNodes().length).toBe(1)
    expect(render.find('p').text()).toBe('button')
  })

  it('should pass down other props', () => {
    const props = { className: 'test', onClick: sinon.spy() }
    const render = mount(F(props))
    const btn = render.find('a')

    btn.simulate('click')
    expect(btn.hasClass('test'))
    expect(props.onClick.called).toBe(true)
  })

  it('should render with custom tag', () => {
    const render = mount(F({ tag: 'span' }))

    expect(render.find('span').hostNodes().length).toBe(1)
  })

  it('should have default props', () => {
    const render = mount(F())

    expect(render.prop('tag')).toBe('a')
    expect(render.prop('header')).toBe(false)
    expect(render.prop('active')).toBe(false)
    expect(render.prop('divider')).toBe(false)
    expect(render.prop('disabled')).toBe(false)
  })

  it('should render correct default className', () => {
    const render = mount(F())
    expect(render.find('a').hasClass('dropdown-item')).toBe(true)
  })

  it('should render h6 and dropdown-header className when props header is true', () => {
    const render = mount(F({ header: true }))
    expect(render.find('h6').hostNodes().length).toBe(1)
    expect(render.find('h6').hasClass('dropdown-header')).toBe(true)
  })

  it('should render div and dropdown-divider className when props divider is true', () => {
    const render = mount(F({ divider: true }))
    expect(render.find('div').hostNodes().length).toBe(1)
    expect(render.find('div').hasClass('dropdown-divider')).toBe(true)
  })

  it('should have active className when props active is true', () => {
    const render = mount(F({ active: true }))
    expect(render.find('a').hasClass('active')).toBe(true)
  })

  it('should have disabled className when props disabled is true', () => {
    const render = mount(F({ disabled: true }))
    expect(render.find('a').hasClass('disabled')).toBe(true)
  })
})
