import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { CarouselTrack } from 'src/carousel/CarouselTrack'

describe('CarouselTrack', () => {
  const p = React.createFactory('p')
  const div = React.createFactory('div')
  const F = React.createFactory<any>(CarouselTrack)

  it('should render without crash', () => {
    mount(F())
  })

  it('should render ReactNode Children', () => {
    const render = mount(F(null, p(null, 'button')))

    expect(render.find('p').hostNodes().length).toBe(1)
    expect(render.find('p').text()).toBe('button')
  })

  it('should pass down other props', () => {
    const props = { className: 'test', onClick: sinon.spy() }
    const render = mount(F(props))
    const btn = render.find('div.carousel-view')

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
    expect(render.prop('from')).toBe(0)
    expect(render.prop('to')).toBe(0)
  })

  it('should render correct className', () => {
    const render = mount(F())

    expect(render.find('div.carousel-view').hostNodes().length).toBe(1)
  })
})