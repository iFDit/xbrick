import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CarouselCaption, carouselCaptionClass } from 'src/carousel/CarouselCaption'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CarouselCaption', () => {
  const child = <p>111</p>
  notCrash(CarouselCaption)
  defaultTag(CarouselCaption, 'div')
  defaultProps(CarouselCaption, { tag: 'div' })
  renderChild(CarouselCaption, child, 'p')
  customTag(CarouselCaption, 'section', 'section')
  displayName(CarouselCaption, 'xbrick.CarouselCaption')

  describe('carouselCaptionClass', () => {
    it('should create default className', () => {
      expect(carouselCaptionClass()).toBe('carousel-caption d-none d-md-block')
      expect(carouselCaptionClass({className: 'custom'})).toBe('custom carousel-caption d-none d-md-block')
    })
  })
})
