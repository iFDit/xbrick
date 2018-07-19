import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { MediaObject } from 'src/media/MediaObject'

describe('MediaObjec', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(MediaObject)

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
    expect(render.prop('align')).toBe('start')
  })

  it('should not render wrap node when props nowrap is true', () => {
    const render = mount(F({ nowrap: true }, p(null, 'text')))

    expect(render.find('p').hasClass('align-self-start')).toBe(true)
  })

  it('should render correct className when set different props', () => {
    const render = mount(F())

    expect(render.find('div').hasClass('align-self-start')).toBe(true)

    render.setProps({ align: 'center' })
    expect(render.find('div').hasClass('align-self-center')).toBe(true)
    render.setProps({ align: 'end' })
    expect(render.find('div').hasClass('align-self-end')).toBe(true)
  })
})