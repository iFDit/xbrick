import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { NavbarCollapse } from 'src/navbar/NavbarCollapse'

describe('NavbarCollapse', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(NavbarCollapse)

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
    const btn = render.find('div')

    btn.simulate('click')
    expect(btn.hasClass('test'))
    expect(props.onClick.called).toBe(true)
  })

  it('should render with custom tag', () => {
    const render = mount(F({ tag: 'ul' }))

    expect(render.find('ul').hostNodes().length).toBe(1)
  })

  it('should have default props', () => {
    const render = mount(F())

    expect(render.prop('tag')).toBe('div')
    expect(render.prop('expand')).toBe(false)
  })

  it('should render correct className when set different props', () => {
    const render = mount(F())

    expect(render.find('div').hasClass('navbar-collapse')).toBe(true)
  })
})