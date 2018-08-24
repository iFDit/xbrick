import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { Collapse } from 'src/collapse/Collapse'

describe('Collapse', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(Collapse)

  it('should render without crash', () => {
    mount(F())
  })

  it('should render ReactNode Children', () => {
    const render = mount(F(null, () => p(null, 'button')))

    expect(render.find('p').hostNodes().length).toBe(1)
    expect(render.find('p').text()).toBe('button')
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
    expect(render.prop('defaultOpen')).toBe(false)
  })

  it('should invoked afterAnimate when the component animate was done', (next) => {
    const props = {
      defaultOpen: true,
      afterAnimate: (show: boolean) => {
        expect(show).toBe(false)
        next()
      },
    }
    const render = mount(F(props, (attr: any) => p({ onClick: () => attr.slideup() }, 'test')))
    render.find('p').simulate('click')
  })
})