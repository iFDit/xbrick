import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { CardText } from 'src/cards/CardText'

describe('CardText', () => {
  const span = React.createFactory('span')
  const F = React.createFactory<any>(CardText)

  it('should render without crash', () => {
    mount(F())
  })

  it('should render ReactNode Children', () => {
    const render = mount(F(null, span(null, 'button')))

    expect(render.find('span').hostNodes().length).toBe(1)
    expect(render.find('span').text()).toBe('button')
  })

  it('should render text node', () => {
    const render = mount(F(null, 'textnode'))

    expect(render.text()).toBe('textnode')
  })

  it('should pass down other props', () => {
    const props = { className: 'test', onClick: sinon.spy() }
    const render = mount(F(props))
    const btn = render.find('p')

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

    expect(render.prop('tag')).toBe('p')
  })

  it('should have correct className', () => {
    const render = mount(F())

    expect(render.find('p').hasClass('card-text')).toBe(true)
  })
})
