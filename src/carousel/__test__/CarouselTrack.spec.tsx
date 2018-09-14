import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CarouselTrack } from 'src/carousel/CarouselTrack'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CarouselTrack', () => {
  const child = <p>111</p>
  notCrash(CarouselTrack)
  defaultTag(CarouselTrack, 'div')
  defaultProps(CarouselTrack, { tag: 'div', from: 0, to: 0, crossfade: false })
  renderChild(CarouselTrack, child, 'p')
  customTag(CarouselTrack, 'ul', 'ul')
  displayName(CarouselTrack, 'xbrick.CarouselTrack')

  it('should invoked afterChange after animate is finish', (next) => {
    const afterChange = () => next()
    mount(<CarouselTrack from={2} to={2} afterChange={afterChange}><p>1</p><p>2</p></CarouselTrack>)
  })
})
