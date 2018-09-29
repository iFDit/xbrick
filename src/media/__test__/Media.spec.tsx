import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Media, mediaClass } from 'src/media/Media'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Media', () => {
  const child = <p>111</p>
  notCrash(Media)
  defaultTag(Media, 'div')
  defaultProps(Media, { tag: 'div' })
  renderChild(Media, child, 'p')
  customTag(Media, 'section', 'section')
  displayName(Media, 'xbrick.Media')

  it('should render correct className when set different props', () => {
    const node = mount(<Media/>)
    expect(node.find('div').hasClass('media')).toBe(true)
  })

  describe('mediaClass', () => {
    it('should create default className', () => {
      expect(mediaClass()).toBe('media')
      expect(mediaClass({className: 'custom'})).toBe('custom media')
    })
  })
})
