import React from 'react'
import { mount } from 'enzyme'
import { SlideUp } from 'src/animate/SlideUp'

describe('SlideUp', () => {
  const div = React.createFactory<any>('div')
  const p = React.createFactory<any>('p')
  const SlideupFactory = React.createFactory<any>(SlideUp)
  const defaultProps = {
    tag: 'div',
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
    expect(slideup.find('div').prop('style')!.color).toBe('red')
    expect(slideup.find('div').prop('className')).toBe('test-class')
    expect(slideup.find('div').prop('data-other')).toBe('other')
  })

  it('should ignore props of to, from and trigger', () => {
    const otherTo = { to: 'to' }
    const otherFrom = { from: 'from' }
    const slideup = mount(SlideupFactory({
      to: otherTo,
      from: otherFrom,
    }))
    const props: any = slideup.find('Animate').props()
    expect(props.to === otherTo).toBe(false)
    expect(props.form === otherFrom).toBe(false)
  })
})
