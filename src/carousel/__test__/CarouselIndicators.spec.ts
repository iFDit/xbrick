import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { CarouselIndicators } from 'src/carousel/CarouselIndicators'

describe('CarouselIndicators', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(CarouselIndicators)

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
    const btn = render.find('ol.carousel-indicators')

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

    expect(render.prop('tag')).toBe('ol')
  })

  it('should have correct className', () => {
    const render = mount(F())

    expect(render.find('ol').hasClass('carousel-indicators')).toBe(true)
  })

  it('should render The number of child nodes is the same as the item.length', () => {
    const items = [{key: 'a'}, {key: 'b'}]
    const render = mount(F({ items }))

    expect(render.find('li').hostNodes().length).toBe(items.length)
  })

  it('should render active child node is the same as the activeIndex', () => {
    const items = [{key: 'a'}, {key: 'b'}]
    const render = mount(F({ items, activeIndex: 1 }))

    expect(render.find('ol').childAt(1).hasClass('active')).toBe(true)
  })

  it('should be invoked with clicked component index when pass onClick props', () => {
    const items = [{key: 'a'}, {key: 'b'}]
    const onItemClick = sinon.spy()
    const render = mount(F({ items, activeIndex: 1, onItemClick }))

    const child1 = render.find('ol').childAt(0)
    const child2 = render.find('ol').childAt(1)

    child1.simulate('click')
    expect(onItemClick.called).toBe(true)
    expect(onItemClick.args[0][0]).toBe(0)

    child2.simulate('click')
    expect(onItemClick.args[1][0]).toBe(1)
  })

})