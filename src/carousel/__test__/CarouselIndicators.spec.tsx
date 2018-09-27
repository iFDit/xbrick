import React from 'react'
import sinon from 'sinon'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CarouselIndicators, carouselIndicatorClass } from 'src/carousel/CarouselIndicators'
import { notCrash, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CarouselIndicators', () => {
  notCrash(CarouselIndicators)
  defaultTag(CarouselIndicators, 'ol')
  defaultProps(CarouselIndicators, { tag: 'ol', amount: 0 })
  customTag(CarouselIndicators, 'ul', 'ul')
  displayName(CarouselIndicators, 'xbrick.CarouselIndicator')

  it('should render the same number indicators as amount props', () => {
    const node = mount(<CarouselIndicators amount="4" />)
    expect(node.find('li').length).toBe(4)
  })

  it('should not render any indicators when amount poprs is not set', () => {
    const node = mount(<CarouselIndicators />)
    expect(node.find('li').length).toBe(0)
  })

  it('should be active assign indicators when activeIndex is the same as indicators index', () => {
    const node = mount(<CarouselIndicators amount="8" activeIndex={2} />)
    expect(node.find('ol').childAt(2).hasClass('active')).toBe(true)
  })

  it('should be invoked onItemClick with index when indicators has be clicked', () => {
    const handleClick = sinon.spy()
    const node = mount(<CarouselIndicators amount="4" onItemClick={handleClick}/>)
    const item = node.find('ol').childAt(2)
    item && item.simulate('click')
    expect(handleClick.called).toBe(true)
    expect(handleClick.args[0][0]).toBe(2)
  })

  describe('carouselIndicatorClass', () => {
    it('should create default className', () => {
      expect(carouselIndicatorClass()).toBe('carousel-indicators')
      expect(carouselIndicatorClass({className: 'custom'})).toBe('custom carousel-indicators')
    })
  })
})
