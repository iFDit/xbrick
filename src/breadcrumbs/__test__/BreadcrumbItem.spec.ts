import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { BreadcrumbItem } from 'src/breadcrumbs/BreadcrumbItem'

describe('BreadcrumbItem', () => {
  const link = React.createFactory('a')
  const Factory = React.createFactory<any>(BreadcrumbItem)

  it('should render component without crash', () => {
    mount(Factory())
  })

  it('should render with default props', () => {
    const render = mount(Factory())
    expect(render.prop('tag')).toBe('li')
    expect(render.prop('active')).toBe(false)
    expect(render.find('li').hostNodes().length).toBe(1)
    expect(render.find('li').hasClass('breadcrumb-item')).toBe(true)
  })

  it('should add active className when props.active is true', () => {
    const render = mount(Factory({ active: true }))
    expect(render.find('li').hasClass('active')).toBe(true)
  })

  it('should pass down other props', () => {
    const onClick = sinon.spy()
    const render = mount(Factory({
      className: 'test-class',
      onClick,
    }))
    render.simulate('click')
    expect(render.hasClass('test-class')).toBe(true)
    expect(onClick.called).toBe(true)
  })

  it('should render children correct', () => {
    const children = link({href: '#'}, 'link')
    const render = mount(Factory(null, children))

    expect(render.find('a').hostNodes().length).toBe(1)
    expect(render.find('a').text()).toBe('link')
  })

  it('should render custom element', () => {
    const render = mount(Factory({ tag: 'p' }))
    expect(render.find('p').hostNodes().length).toBe(1)
  })
})
