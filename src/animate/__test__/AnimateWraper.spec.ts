import * as React from 'react'
import { mount } from 'enzyme'
import { AnimateWraper } from 'src/animate/AnimateWraper'

describe('AnimateWraper', () => {
  const Wraper = React.createFactory<any>(AnimateWraper)
  const div = React.createFactory<any>('div')

  it('should not pass other properties down', () => {
    const props = {
      'data-props': 'test',
      style: {color: 'red'},
    }
    const wrap = mount(Wraper(props, (p: any) => div(p, 'div content')))
    expect(wrap.find('div').hostNodes().prop('data-props')).toBeFalsy()
    expect(wrap.find('div').hostNodes().prop('style')).toBeFalsy()
  })

  it('should render children with initState arguments', () => {
    const initState = {
      height: 100,
      color: 'red',
    }
    const wrap = mount(Wraper({ initState }, (props: any) => div(props, 'div content')))
    expect(wrap.find('div').prop('height')).toBe(100)
    expect(wrap.find('div').prop('color')).toBe('red')
  })

  it('should render children with changeState arguments', () => {
    const wrap = mount(Wraper(null, (props: any) => div(props, 'div content')))
    expect(!!wrap.find('div').prop('changeState')).toBe(true)
  })

  it('should change wraper state by called changeState method in children', () => {
    const initState = { height: 100 }
    const child = (props: any) => div(props, 'div content')
    const wrap = mount(Wraper({ initState }, child))
    const changeState: (...args: any[]) => void = wrap.find('div').prop('changeState')
    
    expect(wrap.find('div').prop('height')).toBe(100)
    changeState('height', 0)
    expect(wrap.find('div').render().attr('height')).toBe('0')
    changeState('other', 'test')
    expect(wrap.find('div').render().attr('other')).toBe('test')
  })
})
