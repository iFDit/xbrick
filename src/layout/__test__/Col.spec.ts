import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { Col } from 'src/layout/Col'

describe('Col', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(Col)

  it('should render without crash', () => {
    mount(F())
  })

  it('should render ReactNode Children', () => {
    const render = mount(F(null, p(null, 'button')))

    expect(render.find('p').hostNodes().length).toBe(1)
    expect(render.find('p').text()).toBe('button')
  })

  it('should render text node', () => {
    const render = mount(F(null, 'textnode'))

    expect(render.text()).toBe('textnode')
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
    const render = mount(F({ tag: 'span' }))

    expect(render.find('span').hostNodes().length).toBe(1)
  })

  it('should have default props', () => {
    const render = mount(F())

    expect(render.prop('tag')).toBe('div')
    expect(render.prop('nowrap')).toBe(false)
    expect(render.prop('noGutter')).toBe(false)
  })

  it('should render correct className when set different props', () => {
    const render = mount(F())

    expect(render.find('div').hasClass('col')).toBe(true)

    render.setProps({ sm: { col: 'auto' } })
    expect(render.find('div').hasClass('col-sm-auto')).toBe(true)
    render.setProps({ sm: { col: 1, align: 'start' } })
    expect(render.find('div.col-sm-1').hasClass('align-self-sm-start')).toBe(true)
    render.setProps({ sm: { order: 1 }})
    expect(render.find('div').hasClass('order-sm-1')).toBe(true)
    render.setProps({ sm: { offset: 1 }})
    expect(render.find('div').hasClass('offset-sm-1')).toBe(true)

    render.setProps({ xs: { col: 'auto' } })
    expect(render.find('div').hasClass('col-auto')).toBe(true)
    render.setProps({ xs: { col: 1, align: 'start' } })
    expect(render.find('div.col-1').hasClass('align-self-start')).toBe(true)
    render.setProps({ xs: { order: 1 }})
    expect(render.find('div').hasClass('order-1')).toBe(true)
    render.setProps({ xs: { offset: 1 }})
    expect(render.find('div').hasClass('offset-1')).toBe(true)

    render.setProps({ noGutter: true })
    expect(render.find('div').hasClass('no-gutters')).toBe(true)
  })

  it('should not render wrap component and pass down layout className', () => {
    const render = mount(F({ nowrap: true }, p()))

    expect(render.find('p').hasClass('col')).toBe(true)
  })
})