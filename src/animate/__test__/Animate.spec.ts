import * as React from 'react'
// import * as sinon from 'sinon'
import { mount, ReactWrapper } from 'enzyme'
import { Animate } from 'src/animate/Animate'

interface IAnimateWraperProps {
  children?(props: {closed: boolean, toggleShow: any}): any
}

class AnimateWraper extends React.Component<IAnimateWraperProps, any> {
  public state = {
    closed: false,
  }

  public toggleShow = () => {
    const prev = this.state.closed
    this.setState({ closed: !prev })
  }

  render() {
    const children: any = this.props.children!
    return children && children({ ...this.state, toggleShow: this.toggleShow })
  }

}

describe('Animate', () => {
  const animateFactory = React.createFactory<any>(Animate)
  const animateWraper = React.createFactory<IAnimateWraperProps>(AnimateWraper)

  it('should render default tag by div', () => {
    const animate = mount(animateFactory())
    expect(animate.find('div').hostNodes().length).toBe(1)
  })

  it('should use a show trigger by default', () => {
    const animate = mount(animateFactory())
    expect(animate.prop('trigger')).toBe('show')
  })

  it('should render custom tag', () => {
    const animate = mount(animateFactory({ tag: 'span' }))
    expect(animate.find('span').hostNodes().length).toBe(1)
  })

  it('can pass other props down', () => {
    let guaid = false
    const otherProps = {
      className: 'other-class',
      style: { color: 'red' },
      'data-testprop': 'testValue',
      onClick: () => guaid = true,
    }
    const animate = mount(animateFactory(otherProps))
    const div = animate.find('div').hostNodes()
    div.simulate('click')
    expect(div.prop('data-testprop')).toContain('testValue')
    expect(div.hasClass('other-class')).toBe(true)
    expect(div.prop('style')!.color).toEqual('red')
    expect(guaid).toEqual(true)
  })

  it('can pass className down', () => {
    const animate = mount(animateFactory({ className: 'test-class' }))
    expect(animate.find('.test-class').hostNodes().length).toBe(1)
  })

  it('should set default styles to container elements', () => {
    const animate = mount(animateFactory({
      from: { opacity: 1 },
    }))
    const style = animate.find('div').hostNodes().prop('style') || {}
    expect(style.opacity).toBe(1)
  })

  it('should handle different format from property', () => {
    const keyVal = { opacity: 0, height: 100 }
    const keyObj = { opacity: {value: 0, config: {}}, height: 100 }
    const animate = mount(animateFactory({from: keyVal})).find('Motion')
    const animate2 = mount(animateFactory({from: keyObj})).find('Motion')
    expect(animate.prop('defaultStyle')).toEqual(animate2.prop('defaultStyle'))
  })

  it('can set the appropriate for different style properties', () => {
    const from = {
      opacity: { value: 1, config: {precision: 0.1} },
      height: { value: 100, config: {precision: 10} },
    }
    const animate = mount(animateFactory({from})).find('Motion')
    expect((animate.prop('style')!.opacity as any).precision).toEqual(0.1)
    expect((animate.prop('style')!.height as any).precision).toEqual(10)
  })

  it('should invoked afterStateChange handler when Animiate component state has been changed', (next) => {
    let animate: ReactWrapper
    let trigger: () => void
    const afterStateChange = () => {
      expect(animate.find('div.test-div').render().css('opacity')).toBe('0')
      next()
    }

    animate = mount(animateWraper({}, (({closed, toggleShow}) => {
      if (!trigger) {
        trigger = () => toggleShow()
      }

      return animateFactory({
        className: 'test-div',
        show: closed,
        from: { opacity: 1 },
        to: { opacity: 0 },
        afterStateChange,
      })
    }) as (props: any) => void))

    setTimeout(() => trigger && trigger())
  })
})
