import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { Card } from 'src/cards/Card'

describe('Cards', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(Card)

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
    expect(render.prop('inverse')).toBe(false)
    expect(render.prop('outline')).toBe(false)
  })

  it('should render correct className when set different align', () => {
    const render = mount(F())

    expect(render.find('div.text-left').hostNodes().length).toBe(0)

    render.setProps({ align: 'left' })
    expect(render.find('div.text-left').hostNodes().length).toBe(0)

    render.setProps({ align: 'center' })
    expect(render.find('div.text-center').hostNodes().length).toBe(1)

    render.setProps({ align: 'right' })
    expect(render.find('div.text-right').hostNodes().length).toBe(1)
  })

  it('should render correct className when set different bstype', () => {
    const render = mount(F())

    expect(render.find('div.bg-primary').hostNodes().length).toBe(0)

    render.setProps({ bstype: 'primary' })
    expect(render.find('div.bg-primary').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'secondary' })
    expect(render.find('div.bg-secondary').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'success' })
    expect(render.find('div.bg-success').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'danger' })
    expect(render.find('div.bg-danger').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'warning' })
    expect(render.find('div.bg-warning').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'info' })
    expect(render.find('div.bg-info').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'light' })
    expect(render.find('div.bg-light').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'dark' })
    expect(render.find('div.bg-dark').hostNodes().length).toBe(1)
  })

  it('should render correct className when set different inverse', () => {
    const render = mount(F())

    expect(render.find('div.text-white').hostNodes().length).toBe(0)

    render.setProps({ bstype: 'primary', inverse: true })
    expect(render.find('div.bg-primary.text-white').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'primary', inverse: false })
    expect(render.find('div.bg-primary.text-white').hostNodes().length).toBe(0)
  })

  it('should render correct className when outline is true', () => {
    const render = mount(F())

    expect(render.find('div.border-primary').hostNodes().length).toBe(0)

    render.setProps({ bstype: 'primary', outline: true })
    expect(render.find('div.border-primary').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'secondary', outline: true })
    expect(render.find('div.border-secondary').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'success', outline: true })
    expect(render.find('div.border-success').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'danger', outline: true })
    expect(render.find('div.border-danger').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'warning', outline: true })
    expect(render.find('div.border-warning').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'info', outline: true })
    expect(render.find('div.border-info').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'light', outline: true })
    expect(render.find('div.border-light').hostNodes().length).toBe(1)

    render.setProps({ bstype: 'dark', outline: true })
    expect(render.find('div.border-dark').hostNodes().length).toBe(1)
  })
})