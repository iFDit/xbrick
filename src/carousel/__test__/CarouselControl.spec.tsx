import React from 'react'
import { mount } from 'enzyme'
import { CarouselControl, carouselControlClass } from 'src/carousel/CarouselControl'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('CarouselControl', () => {
  const child = <span>111</span>
  notCrash(CarouselControl)
  defaultTag(CarouselControl, 'a')
  defaultProps(CarouselControl, { tag: 'a', direction: 'prev' })
  renderChild(CarouselControl, child, 'span')
  customTag(CarouselControl, 'section', 'section')
  displayName(CarouselControl, 'xbrick.CarouselControl')

  it('should set difference direction control by using direction props', () => {
    const node = mount(<CarouselControl direction="prev" />)
    expect(node.find('a').hasClass('carousel-control-prev')).toBe(true)
    node.setProps({ direction: 'next' })
    expect(node.find('a').hasClass('carousel-control-next')).toBe(true)
  })

  it('should render control content by using text props', () => {
    const node = mount(<CarouselControl text="testControl"/>)
    expect(node.find('a').text()).toBe('testControl')
  })

  describe('carouselControlClass', () => {
    it('should create default className', () => {
      expect(carouselControlClass()).toBe('carousel-control-prev')
      expect(carouselControlClass({className: 'custom'})).toBe('custom carousel-control-prev')
      expect(carouselControlClass({className: 'custom', direction: 'next'})).toBe('custom carousel-control-next')
    })
  })
})
