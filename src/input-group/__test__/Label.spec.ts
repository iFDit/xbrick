import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { Label } from 'src/input-group/Label'

describe('Label', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(Label)

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
    const btn = render.find('label')

    btn.simulate('click')
    expect(btn.hasClass('test'))
    expect(props.onClick.called).toBe(true)
  })

  it('should have default props', () => {
    const render = mount(F())

    expect(render.prop('size')).toBe('middle')
    expect(render.prop('hiddren')).toBe(false)
    expect(render.prop('checkbox')).toBe(false)
    expect(render.prop('radio')).toBe(false)
    expect(render.prop('col')).toBe(false)
  })

  it('should render correct className with different props', () => {
    const render = mount(F())
    render.setProps({ hiddren: true })
    expect(render.find('label').hasClass('sr-only')).toBe(true)

    render.setProps({ size: 'large', col: true })
    expect(render.find('label').hasClass('col-form-label-lg')).toBe(true)
    render.setProps({ size: 'small', col: true })
    expect(render.find('label').hasClass('col-form-label-sm')).toBe(true)

    render.setProps({ checkbox: true })
    expect(render.find('label').hasClass('form-check-label')).toBe(true)
    render.setProps({ radio: true })
    expect(render.find('label').hasClass('form-check-label')).toBe(true)
  })
})