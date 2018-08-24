import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { FormGroup } from 'src/form/FormGroup'

describe('FormGroup', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(FormGroup)

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
    expect(render.prop('check')).toBe(false)
    expect(render.prop('row')).toBe(false)
    expect(render.prop('inline')).toBe(false)
  })

  it('should render correct className with different props', () => {
    const render = mount(F())

    expect(render.find('div').hasClass('form-group')).toBe(true)

    render.setProps({ check: true })
    expect(render.find('div').hasClass('form-check')).toBe(true)

    render.setProps({ row: true })
    expect(render.find('div').hasClass('row')).toBe(true)

    render.setProps({ check: false, inline: true })
    expect(render.find('div').hasClass('form-check-inline')).toBe(false)

    render.setProps({ check: true, inline: true })
    expect(render.find('div').hasClass('form-check-inline')).toBe(true)
    expect(render.find('div').hasClass('form-check')).toBe(true)
  })
})