import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CarouselItem } from 'src/carousel/CarouselItem'
import { UncontrolledCarousel } from 'src/carousel/UncontrolledCarousel'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('UncontrolledCarousel', () => {
  const child = <p>111</p>
  notCrash(UncontrolledCarousel)
  defaultTag(UncontrolledCarousel, 'div')
  defaultProps(UncontrolledCarousel, { tag: 'div', startIndex: 0, autoplay: false })
  renderChild(UncontrolledCarousel, child, 'p')
  customTag(UncontrolledCarousel, 'ul', 'ul')
  displayName(UncontrolledCarousel, 'xbrick.UncontrolledCarousel')

  it('should not crash when render Track only', () => {
    mount(<UncontrolledCarousel.Track/>)
  })

  it('should not crash when render Control only', () => {
    mount(<UncontrolledCarousel.Control/>)
  })

  it('should not crash when render Indicators only', () => {
    mount(<UncontrolledCarousel.Indicators/>)
  })

  it('should invoked afterChange after animate is finish', next => {
    const afterChange = () => {
      next()
      node.unmount()
    }
    const node = mount(
      <UncontrolledCarousel afterChange={afterChange} autoplay>
        <UncontrolledCarousel.Track>
          <p>111</p>
          <p>222</p>
        </UncontrolledCarousel.Track>
        <UncontrolledCarousel.Control direction="prev" />
        <UncontrolledCarousel.Control direction="next"/>
      </UncontrolledCarousel>,
    )
    const control = node.find('.carousel-control-next')
    control.simulate('click')
  })

  it('should be controled by click indicator componennts', next => {
    const afterChange = () => {
      next()
    }
    const node = mount(
      <UncontrolledCarousel afterChange={afterChange}>
        <UncontrolledCarousel.Track>
          <p>111</p>
          <p>222</p>
        </UncontrolledCarousel.Track>
        <UncontrolledCarousel.Indicators amount={2}/>
        <UncontrolledCarousel.Control direction="prev" />
        <UncontrolledCarousel.Control direction="next" id="test"/>
      </UncontrolledCarousel>,
    )
    const indicator = node.find('ol').childAt(1)
    indicator.simulate('click')
  })

  it('should be slide to prev item by click control components', next => {
    const afterChange = () => {
      next()
    }
    const node = mount(
      <UncontrolledCarousel afterChange={afterChange}>
        <UncontrolledCarousel.Track>
          <CarouselItem>111</CarouselItem>
          <CarouselItem>222</CarouselItem>
        </UncontrolledCarousel.Track>
        <UncontrolledCarousel.Indicators amount={2}/>
        <UncontrolledCarousel.Control direction="prev" />
        <UncontrolledCarousel.Control direction="next" id="test"/>
      </UncontrolledCarousel>,
    )
    const control = node.find('.carousel-control-prev')
    control.simulate('click')
  })

  it('should be slide to first item when the current item is last and click next control', next => {
    const afterChange = () => {
      const indicator = node.find('ol').childAt(0)
      expect(indicator.hasClass('active')).toBe(true)
      next()
    }
    const node = mount(
      <UncontrolledCarousel startIndex={-1} afterChange={afterChange}>
        <UncontrolledCarousel.Track>
          <CarouselItem>111</CarouselItem>
          <CarouselItem>222</CarouselItem>
        </UncontrolledCarousel.Track>
        <UncontrolledCarousel.Indicators amount={2}/>
        <UncontrolledCarousel.Control direction="prev" />
        <UncontrolledCarousel.Control direction="next" id="test"/>
      </UncontrolledCarousel>,
    )
    const control = node.find('.carousel-control-prev')
    control.simulate('click')
  })

  it('should be slide to last item when the current item is last and click next control', next => {
    const afterChange = () => {
      const indicator = node.find('ol').childAt(1)
      expect(indicator.hasClass('active')).toBe(true)
      next()
    }
    const node = mount(
      <UncontrolledCarousel startIndex={2} afterChange={afterChange}>
        <UncontrolledCarousel.Track>
          <CarouselItem>111</CarouselItem>
          <CarouselItem>222</CarouselItem>
        </UncontrolledCarousel.Track>
        <UncontrolledCarousel.Indicators amount={2}/>
        <UncontrolledCarousel.Control direction="prev" />
        <UncontrolledCarousel.Control direction="next" id="test"/>
      </UncontrolledCarousel>,
    )
    const control = node.find('.carousel-control-next')
    control.simulate('click')
  })

  // it('should not autoplay when component has been mouseenter', next => {
  //   jest.useFakeTimers()
  //   const afterChange = () => {
  //     console.log(11111111111111111)
  //     next()
  //     // throw new Error('never come here')
  //   }
  //   const node = mount(
  //     <UncontrolledCarousel autoplay afterChange={afterChange}>
  //       <UncontrolledCarousel.Track crossfade={true}>
  //         <p>111</p>
  //         <p>222</p>
  //       </UncontrolledCarousel.Track>
  //       <UncontrolledCarousel.Indicators amount={2}/>
  //       <UncontrolledCarousel.Control direction="prev" />
  //       <UncontrolledCarousel.Control direction="next" id="test"/>
  //     </UncontrolledCarousel>,
  //   )
  //   node.simulate('mouseEnter')
  //   jest.advanceTimersByTime(6000)
  // })

  it('should be autoplay by using autoplay props', next => {
    jest.useFakeTimers()
    const afterChange = () => {
      next()
    }
    mount(
      <UncontrolledCarousel autoplay afterChange={afterChange}>
        <UncontrolledCarousel.Track crossfade={true}>
          <p>111</p>
          <p>222</p>
        </UncontrolledCarousel.Track>
        <UncontrolledCarousel.Indicators amount={2}/>
        <UncontrolledCarousel.Control direction="prev" />
        <UncontrolledCarousel.Control direction="next" id="test"/>
      </UncontrolledCarousel>,
    )
    jest.advanceTimersByTime(6000)
  })
})
