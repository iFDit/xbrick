import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { CarouselControl } from 'src/carousel/CarouselControl'

describe('CarouselControl', () => {
  const p = React.createFactory('p')
  const img = React.createFactory('img')
  const F = React.createFactory<any>(CarouselControl)

  it('should render without crash', () => {
    mount(F())
  })

  it('should not render ReactNode Children', () => {
    const render = mount(F(null, p(null, 'button')))

    expect(render.find('p').hostNodes().length).toBe(0)
  })

  it('should not render text node', () => {
    const render = mount(F(null, 'textnode'))

    expect(render.text()).toBe('')
  })

  it('should pass down other props', () => {
    const props = { className: 'test', onClick: sinon.spy() }
    const render = mount(F(props))
    const btn = render.find('a.carousel-control-prev')

    btn.simulate('click')
    expect(btn.hasClass('test'))
    expect(props.onClick.called).toBe(true)
  })

  it('should render with custom tag', () => {
    const render = mount(F({ tag: 'div' }))

    expect(render.find('div').hostNodes().length).toBe(1)
  })

  it('should have default props', () => {
    const render = mount(F())

    expect(render.prop('tag')).toBe('a')
    expect(render.prop('direction')).toBe('prev')
  })

  it('should render correct className', () => {
    const render = mount(F())

    expect(render.find('a.carousel-control-prev').hostNodes().length).toBe(1)
    expect(render.find('span.carousel-control-prev-icon').hostNodes().length).toBe(1)
  })


})