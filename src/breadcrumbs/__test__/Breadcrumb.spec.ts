import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { Breadcrumb } from 'src/breadcrumbs/Breadcrumb'

describe('Breadcrumb', () => {
  const span = React.createFactory('span')
  const BreadcrumbFactory = React.createFactory<any>(Breadcrumb)

  it('should render without crash', () => {
    mount(BreadcrumbFactory())
  })

  it('should render corrent children', () => {
    const render = mount(BreadcrumbFactory(null, span(null, 'span text')))
    expect(render.find('nav').hostNodes().length).toBe(1)
    expect(render.find('ol').hostNodes().length).toBe(1)
    expect(render.find('span').hostNodes().length).toBe(1)
  })

  it('have correct default properties', () => {
    const render = mount(BreadcrumbFactory())
    expect(render.prop('tag')).toBe('nav')
  })

  it('should render correct attributes', () => {
    const render = mount(BreadcrumbFactory())

    expect(render.render().attr('aria-label')).toBe('breadcrumb')
  })

  it('should pass down props', () => {
    const onClick = sinon.spy()
    const props = {
      onClick,
      className: 'other-class',
      'data-test': 'test',
    }

    const breadcrumbs = mount(BreadcrumbFactory(props))
    breadcrumbs.simulate('click')

    expect(breadcrumbs.hasClass('other-class')).toBe(true)
    expect(breadcrumbs.render().attr('data-test')).toBe('test')
    expect(onClick.called).toBe(true)
  })

  it('could be custom render element by props.tag', () => {
    const render = mount(BreadcrumbFactory({ tag: 'div' }))
    expect(render.find('div').hostNodes().length).toBe(1)
  })

})