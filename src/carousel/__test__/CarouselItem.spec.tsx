import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CarouselItem, carouselItemClass } from 'src/carousel/CarouselItem'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CarouselItem', () => {
  const child = <p>111</p>
  notCrash(CarouselItem)
  defaultTag(CarouselItem, 'div')
  defaultProps(CarouselItem, { tag: 'div' })
  renderChild(CarouselItem, child, 'p')
  customTag(CarouselItem, 'section', 'section')
  displayName(CarouselItem, 'xbrick.CarouselItem')

  describe('carouselItemClass', () => {
    it('should create default className', () => {
      expect(carouselItemClass()).toBe('carousel-track-item')
      expect(carouselItemClass({className: 'custom'})).toBe('custom carousel-track-item')
    })
  })
})
