import React from 'react'
import sinon from 'sinon'
import { mount } from 'enzyme'
import { CarouselTrack } from 'src/carousel/CarouselTrack'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

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
    mount(<CarouselTrack from={0} to={1} afterChange={afterChange} crossfade={true}><p>1</p><p>2</p></CarouselTrack>)
  })

  it('should be trigger custom onresize event', () => {
    const resize = sinon.spy()
    const window = global as any
    window.onresize = resize
    const node = mount(<CarouselTrack from={2} to={2}><p>1</p><p>2</p></CarouselTrack>)
    window.dispatchEvent(new Event('resize'))
    window.dispatchEvent(new Event('resize'))
    expect(window.onresize).not.toBe(resize)
    node.unmount()
    expect(window.onresize).toBe(resize)
    expect(resize.called).toBe(true)
  })
})
