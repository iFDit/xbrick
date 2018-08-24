import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { CardImg } from 'src/cards/CardImg'

describe('CardImg', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(CardImg)

  it('should render without crash', () => {
    mount(F())
  })

  it('should pass down other props', () => {
    const props = { className: 'test', onClick: sinon.spy() }
    const render = mount(F(props))
    const btn = render.find('img')

    btn.simulate('click')
    expect(btn.hasClass('test'))
    expect(props.onClick.called).toBe(true)
  })

  it('should have default props', () => {
    const render = mount(F())

    expect(render.prop('top')).toBe(true)
  })

  it('should have correct className', () => {
    const render = mount(F())
    
    expect(render.find('img').hasClass('card-img-top')).toBe(true)

    render.setProps({ top: false })
    expect(render.find('img').hasClass('card-img-bottom')).toBe(true)
  })
})
