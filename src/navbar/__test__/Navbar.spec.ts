import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { Navbar } from 'src/navbar/Navbar'

describe('Navbar', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(Navbar)

  it('should render without crash', () => {
    mount(F())
  })

  it('should render ReactNode Children', () => {
    const render = mount(F(null, () => p(null, 'button')))

    expect(render.find('p').hostNodes().length).toBe(1)
    expect(render.find('p').text()).toBe('button')
  })

  it('should pass down other props', () => {
    const props = { className: 'test', onClick: sinon.spy() }
    const render = mount(F(props))
    const btn = render.find('nav')

    btn.simulate('click')
    expect(btn.hasClass('test'))
    expect(props.onClick.called).toBe(true)
  })

  it('should render with custom tag', () => {
    const render = mount(F({ tag: 'span' }))

    expect(render.find('span').hostNodes().length).toBe(1)
  })

  it('should render children with getTogglerProps and getCollapseProps arguments', () => {
    mount(F(null, (props: any) => {
      expect(props.getTogglerProps.apply).toBeTruthy()
      expect(props.getCollapseProps.apply).toBeTruthy()
      return null
    }))
  })

  it('should have default props', () => {
    const render = mount(F())

    expect(render.prop('tag')).toBe('nav')
    expect(render.prop('expand')).toBe('xs')
    expect(render.prop('bgColor')).toBe('light')
    expect(render.prop('reverse')).toBe(false)
    expect(render.prop('sticky')).toBe(false)
  })

  it('should render correct className when set different props', () => {
    const render = mount(F())

    expect(render.find('nav').hasClass('navbar')).toBe(true)
    expect(render.find('nav').hasClass('navbar-expand')).toBe(true)
    expect(render.find('nav').hasClass('navbar-light')).toBe(true)
    expect(render.find('nav').hasClass('bg-light')).toBe(true)
    render.setProps({ expand: 'sm' })
    expect(render.find('nav').hasClass('navbar-expand-sm')).toBe(true)
    render.setProps({ justify: 'center' })
    expect(render.find('nav').hasClass('justify-content-center')).toBe(true)
    render.setProps({ bgColor: 'primary' })
    expect(render.find('nav').hasClass('bg-primary')).toBe(true)
    render.setProps({ reverse: true })
    expect(render.find('nav').hasClass('navbar-dark')).toBe(true)
    render.setProps({ sticky: true })
    expect(render.find('nav').hasClass('sticky-top')).toBe(true)
    render.setProps({ fixed: 'top' })
    expect(render.find('nav').hasClass('fixed-top')).toBe(true)
  })
})