import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { Form } from 'src/form/Form'

describe('Form', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(Form)

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
    const btn = render.find('form')

    btn.simulate('click')
    expect(btn.hasClass('test'))
    expect(props.onClick.called).toBe(true)
  })

  it('should have default props', () => {
    const render = mount(F())

    expect(render.prop('inline')).toBe(false)
  })

  it('should render correct className with different props', () => {
    const render = mount(F({ inline: true }))

    expect(render.find('form').hasClass('form-inline')).toBe(true)
  })
})