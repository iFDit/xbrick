import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { ModalTitle } from 'src/modals/ModalTitle'

describe('ModalTitle', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(ModalTitle)

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
    const btn = render.find('h5')

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

    expect(render.prop('tag')).toBe('h5')
  })

  it('should render correct className when set different props', () => {
    const render = mount(F())

    expect(render.find('h5').hasClass('modal-title')).toBe(true)
  })
})