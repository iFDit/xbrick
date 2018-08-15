import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { Pagination } from 'src/pagination/Pagination'

describe('Pagination', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(Pagination)

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
  })

  it('should render correct className when set different props', () => {
    const render = mount(F())

    expect(render.find('ul').hasClass('pagination')).toBe(true)
    render.setProps({ justify: 'center' })
    expect(render.find('ul.pagination').hasClass('justify-content-center'))
    render.setProps({ size: 'small' })
    expect(render.find('ul.pagination').hasClass('pagination-sm'))
  })
})