import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { CardBody } from 'src/cards/CardBody'

describe('CardBody', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(CardBody)

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
    expect(render.prop('overlay')).toBe(false)
  })

  it('should have correct className', () => {
    const render = mount(F())
    
    expect(render.find('div').hasClass('card-body')).toBe(true)

    render.setProps({ overlay: true })
    expect(render.find('div').hasClass('card-img-overlay')).toBe(true)
  })
})
