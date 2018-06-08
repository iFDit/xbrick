import * as React from 'react'
import { mount } from 'enzyme'
import * as sinon from 'sinon'
import { Button } from 'src/buttons/Button'

describe('Buttons', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(Button)
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
    const btn = render.find('button.btn')

    btn.simulate('click')
    expect(btn.hasClass('test'))
    expect(props.onClick.called).toBe(true)
  })

  it('should have correct default props', () => {
    const render = mount(F())

    expect(render.prop('tag')).toBe('button')
    expect(render.prop('bstype')).toBe('primary')
    expect(render.prop('size')).toBe('middle')
    expect(render.prop('block')).toBe(false)
    expect(render.prop('active')).toBe(false)
    expect(render.prop('outline')).toBe(false)
    expect(render.prop('disabled')).toBe(false)
  })

  it('should render correct className', () => {
    const basic = mount(F())

    expect(basic.find('.btn.btn-primary').hostNodes().length).toBe(1)

    // outline
    basic.setProps({ outline: true })
    expect(basic.find('.btn.btn-outline-primary').hostNodes().length).toBe(1)
    basic.setProps({ outline: false })

    // type
    basic.setProps({ bstype: 'secondary' })
    expect(basic.find('.btn.btn-secondary').hostNodes().length).toBe(1)
    basic.setProps({ bstype: 'success' })
    expect(basic.find('.btn.btn-success').hostNodes().length).toBe(1)
    basic.setProps({ bstype: 'danger' })
    expect(basic.find('.btn.btn-danger').hostNodes().length).toBe(1)
    basic.setProps({ bstype: 'warning' })
    expect(basic.find('.btn.btn-warning').hostNodes().length).toBe(1)
    basic.setProps({ bstype: 'info' })
    expect(basic.find('.btn.btn-info').hostNodes().length).toBe(1)
    basic.setProps({ bstype: 'light' })
    expect(basic.find('.btn.btn-light').hostNodes().length).toBe(1)
    basic.setProps({ bstype: 'dark' })
    expect(basic.find('.btn.btn-dark').hostNodes().length).toBe(1)
    basic.setProps({ bstype: 'link' })
    expect(basic.find('.btn.btn-link').hostNodes().length).toBe(1)

    // size
    basic.setProps({ size: 'large' })
    expect(basic.find('.btn.btn-lg').hostNodes().length).toBe(1)
    basic.setProps({ size: 'small' })
    expect(basic.find('.btn.btn-sm').hostNodes().length).toBe(1)

    // block
    basic.setProps({ block: true })
    expect(basic.find('.btn.btn-block').hostNodes().length).toBe(1)

    // active
    basic.setProps({ active: true })
    expect(basic.find('.btn.active').hostNodes().length).toBe(1)

    // disabled
    basic.setProps({ disabled: true })
    expect(basic.find('.btn.disabled').hostNodes().length).toBe(1)
  })

  it('should inactive when button is disabled', () => {
    const props = {
      disabled: true,
      onClick: sinon.spy(),
    }
    const render = mount(F(props))
    render.simulate('click')

    expect(props.onClick.called).toBe(false)
  })
})