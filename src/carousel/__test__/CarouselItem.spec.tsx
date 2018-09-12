import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CarouselItem } from 'src/carousel/CarouselItem'
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
})
