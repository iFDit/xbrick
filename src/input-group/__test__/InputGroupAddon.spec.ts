import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { InputGroupAddon } from 'src/input-group/InputGroupAddon'

describe('InputGroupAddon', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(InputGroupAddon)

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

  it('should render with custom tag', () => {
    const render = mount(F({ tag: 'span' }))

    expect(render.find('span').hostNodes().length).toBe(1)
  })

  it('should pass down other props', () => {
    const props = { className: 'test', onClick: sinon.spy() }
    const render = mount(F(props))
    const btn = render.find('div')

    btn.simulate('click')
    expect(btn.hasClass('test'))
    expect(props.onClick.called).toBe(true)
  })

  it('should have default props', () => {
    const render = mount(F())

    expect(render.prop('tag')).toBe('div')
    expect(render.prop('append')).toBe(false)
  })

  it('should render correct className with different props', () => {
    const render = mount(F())
    expect(render.find('div').hasClass('input-group-prepend')).toBe(true)

    render.setProps({ append: true })
    expect(render.find('div').hasClass('input-group-append')).toBe(true)
  })
})