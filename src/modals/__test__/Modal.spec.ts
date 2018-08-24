import React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { Modal } from 'src/modals/Modal'

describe('Modal', () => {
  const p = React.createFactory('p')
  const F = React.createFactory<any>(Modal)

  it('should render without crash', () => {
    mount(F())
  })

  it('should render ReactNode Children', () => {
    const render = mount(F(null, () => p(null, 'button')))

    expect(render.find('p').hostNodes().length).toBe(1)
    expect(render.find('p').text()).toBe('button')
  })

  it('should pass down other props', () => {
    const props = { className: 'test', onClick: sinon.spy(), mask: false }
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
    expect(render.prop('mask')).toBe(true)
    expect(render.prop('transition')).toBe(true)
    expect(render.prop('defaultOpen')).toBe(false)
  })

  it('should render correct className when set different props', () => {
    const render = mount(F({ mask: false }))

    expect(render.find('div').hasClass('modal')).toBe(true)
  })

  it('should use uncontrol component with default state when set the defaultOpen prop', (next) => {
    const render = mount(F({ defaultOpen: true }))
    expect(render.find('div.modal').render().css('display')).toBe('block')
    render.setProps({ defaultOpen: false, afterClose: () => {
      expect(render.find('div.modal').render().css('display')).toBe('none')
      next()
    }})
  })

  it('should hide modal through inner hide method', (next) => {
    const render = mount(
      F(
        {
          defaultOpen: true,
          afterClose: () => {
            next()
          },
        }, 
        (props: any) => {
          return p({ onClick: () => props.hide() })
      }))
    expect(render.find('div.modal').render().css('display')).toBe('block')
    render.find('p').simulate('click')
  })
})