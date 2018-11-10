import React from 'react'
import { mount } from 'enzyme'
import { MediaObject } from 'src/media/MediaObject'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('MediaObjec', () => {
  const child = <p>111</p>
  notCrash(MediaObject)
  defaultTag(MediaObject, 'div')
  defaultProps(MediaObject, { tag: 'div', render: true, align: 'start' })
  renderChild(MediaObject, child, 'p')
  customTag(MediaObject, 'section', 'section')
  displayName(MediaObject, 'xbrick.MediaObject')

  it('should render correct className when set different props', () => {
    const render = mount(<MediaObject/>)
    expect(render.find('div').hasClass('align-self-start')).toBe(true)
    render.setProps({ align: 'center' })
    expect(render.find('div').hasClass('align-self-center')).toBe(true)
    render.setProps({ align: 'end' })
    expect(render.find('div').hasClass('align-self-end')).toBe(true)
  })
})
