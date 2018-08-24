import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { ModalHeader } from 'src/modals/ModalHeader'
// import { Close } from 'src/modals/Close'

describe('ModalHeader', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(ModalHeader)
  // const C = React.createFactory<any>(Close)

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

    expect(render.text()).toContain('textnode')
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
    const render = mount(F({ tag: 'a' }))

    expect(render.find('a').hostNodes().length).toBe(1)
  })

  it('should have default props', () => {
    const render = mount(F())

    expect(render.prop('tag')).toBe('div')
    // expect(render.prop('closeIcon')).toMatchObject(C())
  })

  it('should render correct className when set different props', () => {
    const render = mount(F())
    expect(render.find('div').hasClass('modal-header')).toBe(true)
  })
})