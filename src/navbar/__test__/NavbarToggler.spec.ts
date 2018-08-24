import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { NavbarToggler } from 'src/navbar/NavbarToggler'

describe('NavbarToggler', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(NavbarToggler)

  it('should render without crash', () => {
    mount(F())
  })

  it('should not render ReactNode Children', () => {
    const render = mount(F(null, p(null, 'button')))

    expect(render.find('p').hostNodes().length).toBe(0)
  })

  it('should pass down other props', () => {
    const props = { className: 'test', onClick: sinon.spy() }
    const render = mount(F(props))
    const btn = render.find('button')

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

    expect(render.prop('tag')).toBe('button')
  })

  it('should render correct className when set different props', () => {
    const render = mount(F())

    expect(render.find('button').hasClass('navbar-toggler')).toBe(true)
    expect(render.find('span').hasClass('navbar-toggler-icon')).toBe(true)
  })
})