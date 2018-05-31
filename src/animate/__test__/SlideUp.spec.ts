import * as React from 'react'
import { mount } from 'enzyme'
import { SlideUp } from 'src/animate/SlideUp'

describe('SlideUp', () => {
  const div = React.createFactory<any>('div')
  const p = React.createFactory<any>('p')
  const SlideupFactory = React.createFactory<any>(SlideUp)
  const defaultProps = {
    tag: 'div',
    trigger: 'close',
    from: {},
    style: {},
    to: {
      height: 0,
      opacity: 0,
      marginTop: 0,
      paddingTop: 0,
      marginBottom: 0,
      paddingBottom: 0,
    },
  }

  it('should have correct default props', () => {
    const slideup = mount(SlideupFactory())
    const props = slideup.props()
    expect(props).toEqual(defaultProps)
  })

  it('should pass down other props', () => {
    const style = { color: 'red' }
    const allprops = {
      style,
      className: 'test-class',
      'data-other': 'other',
    }
    const slideup = mount(SlideupFactory(allprops))
    expect(slideup.find('div').prop('style')).toEqual(style)
    expect(slideup.find('div').prop('className')).toBe('test-class')
    expect(slideup.find('div').prop('data-other')).toBe('other')
  })

  it('should ignore props of to, from and trigger', () => {
    const otherTo = { to: 'to' }
    const otherFrom = { from: 'from' }
    const slideup = mount(SlideupFactory({
      trigger: 'other',
      to: otherTo,
      from: otherFrom,
    }))
    const props: any = slideup.find('Animate').props()
    expect(props.trigger === 'other').toBe(false)
    expect(props.to === otherTo).toBe(false)
    expect(props.form === otherFrom).toBe(false)
  })

  it('should pass down slideup method to children', () => {
    const child = (slideup: any) => {
      expect(!!slideup).toBe(true)
      expect(!!slideup.call).toBe(true)
      return div(null, 'test')
    }
    mount(SlideupFactory(null, child))
  })

  it('should be slide up when children call slideup', (next) => {
    const child = (slideup: any) => {
      return p({ onClick: () => slideup() }, 'text')
    }
    const slide = mount(SlideupFactory({afterStateChange: () => next()}, child))
    slide.find('p').simulate('click')
  })

  it('should set display: none when component has beed slide up', (next) => {
    const props = {
      afterStateChange: () => {
        expect(alert.find('div').render().css('display')).toBe('none')
        next()
      },
    }
    const child = (slideup: any) => {
      return p({ onClick: () => slideup() }, 'text')
    }
    const alert = mount(SlideupFactory(props, child))
    alert.find('p').hostNodes().simulate('click')
  })
})
