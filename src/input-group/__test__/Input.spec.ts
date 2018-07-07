import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { Input } from 'src/input-group/Input'

describe('Input', () => {
  const option = React.createFactory('option')
  const F = React.createFactory<any>(Input)

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

    expect(render.prop('plainText')).toBe(false)
  })

  it('should render correct className with different props', () => {
    const render = mount(F())

    expect(render.find('input').hasClass('form-control')).toBe(true)

    render.setProps({ plainText: true })
    expect(render.find('input').hasClass('form-control-plaintext')).toBe(true)
    expect(render.find('input').hasClass('form-control')).toBe(false)

    render.setProps({ type: 'select', plainText: false })
    expect(render.find('select').hasClass('form-control')).toBe(true)

    render.setProps({ type: 'textarea' })
    expect(render.find('textarea').hasClass('form-control')).toBe(true)

    render.setProps({ type: 'checkbox' })
    expect(render.find('input').hasClass('form-check-input')).toBe(true)

    render.setProps({ type: 'radio' })
    expect(render.find('input').hasClass('form-check-input')).toBe(true)

    render.setProps({ type: 'file' })
    expect(render.find('input').hasClass('form-control-file')).toBe(true)
    expect(render.find('input').hasClass('form-control')).toBe(false)

    render.setProps({ type: 'text', size: 'small' })
    expect(render.find('input').hasClass('form-control-sm')).toBe(true)

    render.setProps({ type: 'text', size: 'large' })
    expect(render.find('input').hasClass('form-control-lg')).toBe(true)
  })
})