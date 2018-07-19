import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { Row } from 'src/layout/Row'

describe('Row', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(Row)

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
    expect(render.prop('nowrap')).toBe(false)
    expect(render.prop('noGutter')).toBe(false)
  })

  it('should render correct className when set different props', () => {
    const render = mount(F())

    expect(render.find('div').hasClass('row')).toBe(true)

    render.setProps({ sm: { align: 'start' } })
    expect(render.find('div').hasClass('align-items-sm-start')).toBe(true)
    render.setProps({ xs: { align: 'start' } })
    expect(render.find('div').hasClass('align-items-start')).toBe(true)

    render.setProps({ sm: { justify: 'start' }})
    expect(render.find('div').hasClass('justify-content-sm-start')).toBe(true)
    render.setProps({ xs: { justify: 'start' }})
    expect(render.find('div').hasClass('justify-content-start')).toBe(true)

    render.setProps({ xs: { justify: 'start' }, sm: { align: 'start' } })
    expect(render.find('div.justify-content-start').hasClass('align-items-sm-start')).toBe(true)
  })

  it('should not render wrap component and pass down layout className', () => {
    const render = mount(F({ nowrap: true }, p()))

    expect(render.find('p').hasClass('row')).toBe(true)
  })
})