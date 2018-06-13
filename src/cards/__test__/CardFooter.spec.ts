import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { CardFooter } from 'src/cards/CardFooter'

describe('CardImg', () => {
  const span = React.createFactory('span')
  const F = React.createFactory<any>(CardFooter)

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
    const btn = render.find('div')

    btn.simulate('click')
    expect(btn.hasClass('test'))
    expect(props.onClick.called).toBe(true)
  })

  it('should have default props', () => {
    const render = mount(F())

    expect(render.prop('tag')).toBe('div')
  })

  it('should have correct className', () => {
    const render = mount(F())
    
    expect(render.find('div').hasClass('card-footer')).toBe(true)
  })
})
