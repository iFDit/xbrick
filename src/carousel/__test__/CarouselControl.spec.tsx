import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CarouselControl } from 'src/carousel/CarouselControl'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

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
})
