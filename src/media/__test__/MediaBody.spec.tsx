import React from 'react'
import { mount } from 'enzyme'
import { MediaBody, mediaBodyClass } from 'src/media/MediaBody'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('MediaBody', () => {
  const child = <p>111</p>
  notCrash(MediaBody)
  defaultTag(MediaBody, 'div')
  defaultProps(MediaBody, { tag: 'div' })
  renderChild(MediaBody, child, 'p')
  customTag(MediaBody, 'section', 'section')
  displayName(MediaBody, 'xbrick.MediaBody')

  it('should render correct className when set different props', () => {
    const node = mount(<MediaBody/>)
    expect(node.find('div').hasClass('media-body')).toBe(true)
  })

  describe('mediaBodyClass', () => {
    it('should create default className', () => {
      expect(mediaBodyClass()).toBe('media-body')
      expect(mediaBodyClass({className: 'custom'})).toBe('custom media-body')
    })
  })
})
