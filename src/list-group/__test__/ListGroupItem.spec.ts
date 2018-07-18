import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { ListGroupItem } from 'src/list-group/ListGroupItem'

describe('ListGroup', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(ListGroupItem)

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
    const btn = render.find('li')

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

    expect(render.prop('tag')).toBe('li')
    expect(render.prop('disabled')).toBe(false)
    expect(render.prop('active')).toBe(false)
    expect(render.prop('action')).toBe(false)
  })

  it('should render correct className when set different props', () => {
    const render = mount(F())

    expect(render.find('li').hasClass('list-group-item')).toBe(true)

    render.setProps({ bstype: 'primary' })
    expect(render.find('li.list-group-item').hasClass('list-group-item-primary')).toBe(true)

    render.setProps({ action: true })
    expect(render.find('li.list-group-item').hasClass('list-group-item-action')).toBe(true)

    render.setProps({ disabled: true })
    expect(render.find('li.list-group-item').hasClass('disabled')).toBe(true)

    render.setProps({ disabled: false, active: true })
    expect(render.find('li.list-group-item').hasClass('active')).toBe(true)
  })
})