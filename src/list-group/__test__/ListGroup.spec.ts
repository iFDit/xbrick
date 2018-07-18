import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { ListGroup } from 'src/list-group/ListGroup'

describe('ListGroup', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(ListGroup)

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
    const btn = render.find('ul')

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

    expect(render.prop('tag')).toBe('ul')
    expect(render.prop('flush')).toBe(false)
  })

  it('should render correct className when set different props', () => {
    const render = mount(F())

    expect(render.find('ul').hasClass('list-group')).toBe(true)

    render.setProps({ flush: true })
    expect(render.find('ul').hasClass('list-group-flush')).toBe(true)
    expect(render.find('ul').hasClass('list-group')).toBe(true)
  })
})