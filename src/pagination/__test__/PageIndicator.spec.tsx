import React from 'react'
import { mount } from 'enzyme'
import { PageIndicator } from 'src/pagination/PageIndicator'
import { notCrash, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('PageIndicator', () => {
  notCrash(PageIndicator)
  defaultTag(PageIndicator, 'li')
  defaultProps(PageIndicator, { tag: 'span', direction: 'prev' })
  customTag(PageIndicator, 'section', 'section')
  displayName(PageIndicator, 'xbrick.PageIndicator')

  it('should render prev indicator', () => {
    const node = mount(<PageIndicator tag="section" direction="prev"/>)
    expect(node.find('section').text()).toBe('«')
  })

  it('should render next indicator', () => {
    const node = mount(<PageIndicator tag="section" direction="next"/>)
    expect(node.find('section').text()).toBe('»')
  })
})
