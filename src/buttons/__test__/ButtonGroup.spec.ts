import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { ButtonGroup } from 'src/buttons/ButtonGroup'

describe('ButtonGroup', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(ButtonGroup)

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
    expect(render.prop('size')).toBe('middle')
    expect(render.prop('vertical')).toBe(false)
  })

  it('should render with custom tag', () => {
    const render = mount(F({ tag: 'span' }))

    expect(render.find('span').hostNodes().length).toBe(1)
  })

  it('should render correct className', () => {
    const render = mount(F())

    expect(render.find('.btn-group').hostNodes().length).toBe(1)
  })

  it('should render correct when size was set', () => {
    const render = mount(F({ size: 'large' }))

    expect(render.find('.btn-group-lg').hostNodes().length).toBe(1)
    render.setProps({ size: 'small' })
    expect(render.find('.btn-group-sm').hostNodes().length).toBe(1)
  })

  it('should render correct when vertical was set', () => {
    const render = mount(F({ vertical: true }))

    expect(render.find('.btn-group-vertical').hostNodes().length).toBe(1)
  })

  it('should pass down others props', () => {
    const props = {
      'data-attr': 'someattr',
      onClick: sinon.spy(),
      className: 'ts'
    }
    const render = mount(F(props))
    render.simulate('click')

    expect(render.find('.ts').hostNodes().length).toBe(1)
    expect(render.render().attr('data-attr')).toBe('someattr')
    expect(props.onClick.called).toBe(true)
  })

  it('should have correct displayName', () => {
    expect((ButtonGroup as any).displayName).toBe('xbrick.ButtonGroup')
  })
})
