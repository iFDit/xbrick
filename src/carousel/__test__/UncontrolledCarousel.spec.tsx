import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { UncontrolledCarousel } from 'src/carousel/UncontrolledCarousel'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CarouselTrack', () => {
  const child = <p>111</p>
  notCrash(UncontrolledCarousel)
  defaultTag(UncontrolledCarousel, 'div')
  defaultProps(UncontrolledCarousel, { tag: 'div', startIndex: 0, autoplay: false })
  renderChild(UncontrolledCarousel, child, 'p')
  customTag(UncontrolledCarousel, 'ul', 'ul')
  displayName(UncontrolledCarousel, 'xbrick.UncontrolledCarousel')

  it('should invoked afterChange after animate is finish', (next) => {
    const afterChange = () => next()
    const node = mount(
      <UncontrolledCarousel afterChange={afterChange}>
        <UncontrolledCarousel.Track crossfade={true}>
          <p>111</p>
          <p>222</p>
        </UncontrolledCarousel.Track>
        <UncontrolledCarousel.Control direction="prev" />
        <UncontrolledCarousel.Control direction="next" id="test"/>
      </UncontrolledCarousel>,
    )
    const control = node.find(UncontrolledCarousel.Control).last()
    control.simulate('click')

  })
})
