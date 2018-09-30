import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { PageIndicator } from 'src/pagination/PageIndicator'
import { notCrash, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

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
