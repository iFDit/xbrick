import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { CustomInput } from 'src/input-group/CustomInput'

describe('CustomInput', () => {
  const option = React.createFactory('option')
  const F = React.createFactory<any>(CustomInput)

  it('should render without crash', () => {
    mount(F())
  })

  it('should accect option children when props type is select', () => {
    const render = mount(F({ type: 'select' }, [option({ key: 1 }, 1), option({ key: 2 }, 2)]))

    expect(render.find('option').hostNodes().length).toBe(2)
  })

  it('should render select element when props type is select', () => {
    const render = mount(F({ type: 'select' }))

    expect(render.find('select').hostNodes().length).toBe(1)
  })

  it('should pass down other props', () => {
    const props = { className: 'test', onClick: sinon.spy() }
    const render = mount(F(props))
    const btn = render.find('input')

    btn.simulate('click')
    expect(btn.hasClass('test'))
    expect(props.onClick.called).toBe(true)
  })

  it('should have default props', () => {
    const render = mount(F())

    expect(render.prop('label')).toBe('')
    expect(render.prop('type')).toBe('text')
    expect(render.prop('plainText')).toBe(false)
  })

  it('should render correct className with different props', () => {
    const render = mount(F())

    expect(render.find('input').hasClass('form-control')).toBe(true)

    render.setProps({ plainText: true })
    expect(render.find('input').hasClass('form-control-plaintext')).toBe(true)

    render.setProps({ type: 'select' })
    expect(render.find('select').hasClass('custom-select')).toBe(true)

    render.setProps({ type: 'checkbox', label: 'text' })
    expect(render.find('div.custom-control').hasClass('custom-checkbox')).toBe(true)
    expect(render.find('input').hasClass('custom-control-input')).toBe(true)
    expect(render.find('label').hasClass('custom-control-label')).toBe(true)
    expect(render.find('label').text()).toBe('text')

    render.setProps({ type: 'radio', label: 'text' })
    expect(render.find('div.custom-control').hasClass('custom-radio')).toBe(true)
    expect(render.find('input').hasClass('custom-control-input')).toBe(true)
    expect(render.find('label').hasClass('custom-control-label')).toBe(true)
    expect(render.find('label').text()).toBe('text')
  })
})