import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { PageLink, pageLinkClass } from 'src/pagination/PageLink'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('PageLink', () => {
  const child = <p>111</p>
  notCrash(PageLink)
  defaultTag(PageLink, 'a')
  defaultProps(PageLink, { tag: 'a' })
  renderChild(PageLink, child, 'p')
  customTag(PageLink, 'section', 'section')
  displayName(PageLink, 'xbrick.PageLink')

  it('should render correct className when set different props', () => {
    const node = mount(<PageLink/>)
    expect(node.find('a').hasClass('page-link')).toBe(true)
  })

  describe('pageLinkClass', () => {
    expect(pageLinkClass()).toBe('page-link')
    expect(pageLinkClass({className: 'custom'})).toBe('custom page-link')
  })
})
