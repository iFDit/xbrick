import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Animate } from 'src/animate/Animate'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

interface IAnimateWrapperProps {
  afterStateChange?: any
  children?(props: {closed: boolean, toggleShow: any, afterStateChange: any}): any
}

class AnimateWrapper extends React.Component<IAnimateWrapperProps, any> {
  public state = {
    closed: false,
  }

  public toggleShow = () => {
    const prev = this.state.closed
    this.setState({ closed: !prev })
  }

  render() {
    const { afterStateChange = () => {/**/} } = this.props
    const children: any = this.props.children!
    return children && children({ ...this.state, toggleShow: this.toggleShow, afterStateChange })
  }

}

describe('Animate', () => {
  const child = <p>111</p>
  notCrash(Animate)
  defaultTag(Animate, 'div')
  defaultProps(Animate, { tag: 'div', trigger: 'show', transition: true })
  renderChild(Animate, child, 'p')
  customTag(Animate, 'a', 'a')
  displayName(Animate, 'xbrick.Animate')

  it('should handle different format from property', () => {
    const keyVal = { opacity: 0, height: 100 }
    const keyObj = { opacity: {value: 0, config: {}}, height: 100 }
    const animate = mount(<Animate from={keyVal}/>).find('Motion')
    const animate2 = mount(<Animate from={keyObj} />).find('Motion')
    expect(animate.prop('defaultStyle')).toEqual(animate2.prop('defaultStyle'))
  })

  it('can set the appropriate for different style properties', () => {
    const from = {
      opacity: { value: 1, config: {precision: 0.1} },
      height: { value: 100, config: {precision: 10} },
    }
    const animate = mount(<Animate from={from}/>).find('Motion')
    expect((animate.prop('style')!.opacity as any).precision).toEqual(0.1)
    expect((animate.prop('style')!.height as any).precision).toEqual(10)
  })

  it('should invoked afterStateChange handler when Animiate component state has been changed', (next) => {
    let animate: any
    let trigger: () => void
    const afterStateChange = () => {
      expect(animate.render().css('opacity')).toBe('0')
      next()
    }

    animate = mount(
      <AnimateWrapper afterStateChange={afterStateChange}>
        {({closed, toggleShow, afterStateChange: afterChange}) => {
        if (!trigger) {
          trigger = () => toggleShow()
        }

        return (<Animate
          className="test-div"
          show={closed}
          from={{opacity: 1}}
          to={{opacity: 0}}
          afterStateChange={afterChange}
        />)}}
      </AnimateWrapper>,
    )
    setTimeout(() => {
      trigger && trigger()
    })
  })

  it('should support transform props animition', () => {
    const transition = {
      from: {
        'translateX-%': 0,
        scaleX: 0,
      },
      to: { 'translarteX-%': 50, scaleX: 1 },
      tag: 'p',
    }
    const render = mount(<Animate {...transition}><a/></Animate>)
    expect(render.find('p').props().style).toEqual({ transform: 'translateX(0%) scaleX(0)' })
  })
})
