import React from 'react'
import { mount } from 'enzyme'
import { Slide } from 'src/animate/Slide'

describe('Slide', () => {
  const F = React.createFactory<any>(Slide)
  const defaultProps = {
    tag: 'div',
    open: false,
  }

  it('should have correct default props', () => {
    const slideup = mount(F())
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
    const slideup = mount(F(allprops))
    expect(slideup.find('div').prop('style')!.color).toEqual('red')
    expect(slideup.find('div').prop('className')).toContain('test-class')
    expect(slideup.find('div').prop('data-other')).toBe('other')
  })

  it('should ignore props of to, from', () => {
    const otherTo = { to: 'to' }
    const otherFrom = { from: 'from' }
    const slideup = mount(F({
      to: otherTo,
      from: otherFrom,
    }))
    const props: any = slideup.find('Animate').props()
    expect(props.to === otherTo).toBe(false)
    expect(props.form === otherFrom).toBe(false)
  })
})
