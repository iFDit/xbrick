import React from 'react'
import { Carousel, carouselClass } from 'src/carousel/Carousel'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('Carousel', () => {
  const child = <p>111</p>
  notCrash(Carousel)
  defaultTag(Carousel, 'div')
  defaultProps(Carousel, { tag: 'div' })
  renderChild(Carousel, child, 'p')
  customTag(Carousel, 'section', 'section')
  displayName(Carousel, 'xbrick.Carousel')

  describe('carouselClass', () => {
    it('should create default className', () => {
      expect(carouselClass()).toBe('carousel')
      expect(carouselClass({className: 'custom'})).toBe('custom carousel')
    })
  })
})
