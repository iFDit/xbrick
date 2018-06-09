import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { ButtonToolbar } from 'src/buttons/ButtonToolbar'

describe('ButtonToolbar', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(ButtonToolbar)

  it('should render without crash', () => {
    mount(F())
  })

  it('should render text children', () => {
    const render = mount(F(null, 'text child'))

    expect(render.text()).toBe('text child')
  })

  it('should render ReactNode children', () => {
    const render = mount(F(null, p(null, 'p')))

    expect(render.find('p').text()).toBe('p')
  })

  it('should render default properties correct', () => {
    const render = mount(F())

    expect(render.prop('tag')).toBe('div')
  })

  it('should render correct className', () => {
    const render = mount(F())

    expect(render.find('.btn-toolbar').hostNodes().length).toBe(1)
  })

  it('should render with custom tag', () => {
    const render = mount(F({ tag: 'span' }))

    expect(render.find('span').hostNodes().length).toBe(1)
  })
})
