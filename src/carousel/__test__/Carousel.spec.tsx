import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Carousel } from 'src/carousel/Carousel'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Carousel', () => {
  const child = <p>111</p>
  notCrash(Carousel)
  defaultTag(Carousel, 'div')
  defaultProps(Carousel, { tag: 'div' })
  renderChild(Carousel, child, 'p')
  customTag(Carousel, 'section', 'section')
  displayName(Carousel, 'xbrick.Carousel')
})
