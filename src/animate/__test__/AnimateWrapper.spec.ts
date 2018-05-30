import * as React from 'react'
import { mount } from 'enzyme'
import { omit } from 'lodash'
import { AnimateWrapper } from 'src/animate/AnimateWrapper'

describe('AnimateWrapper', () => {
  const Wrapper = React.createFactory<any>(AnimateWrapper)
  const div = React.createFactory<any>('div')

  it('should not pass other properties down', () => {
    const props = {
      'data-props': 'test',
      style: {color: 'red'},
    }
    const wrap = mount(Wrapper(props, (p: any) => div(omit(p, 'changeState'), 'div content')))
    expect(wrap.find('div').hostNodes().prop('data-props')).toBeFalsy()
    expect(wrap.find('div').hostNodes().prop('style')).toBeFalsy()
  })

  it('should render children with initState arguments', () => {
    const initState = {
      height: 100,
      color: 'red',
    }
    const wrap = mount(Wrapper({ initState }, (props: any) => div(omit(props, 'changeState'), 'div content')))
    expect(wrap.find('div').prop('height')).toBe(100)
    expect(wrap.find('div').prop('color')).toBe('red')
  })

  it('should render children with changeState arguments', () => {
    mount(Wrapper(null, (props: any) => {
      expect(!!props.changeState).toBe(true)
      return div(omit(props, 'changeState'), 'div content')
    }))
  })

  it('should change Wrapper state by called changeState method in children', () => {
    let changeState: (...args: any[]) => void = () => { /**/ }
    const initState = { height: 100 }
    const child = (props: any) => {
      changeState = props.changeState
      return div(omit(props, 'changeState'), 'div content')
    }
    const wrap = mount(Wrapper({ initState }, child))
    
    expect(wrap.find('div').prop('height')).toBe(100)
    changeState('height', 0)
    expect(wrap.find('div').render().attr('height')).toBe('0')
    changeState('other', 'test')
    expect(wrap.find('div').render().attr('other')).toBe('test')
  })
})
