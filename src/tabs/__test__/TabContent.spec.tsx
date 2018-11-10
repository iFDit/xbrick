import React from 'react'
import { mount } from 'enzyme'
import { TabContent, tabContentClass } from 'src/tabs/TabContent'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('TabContent', () => {
  const child = <p>111</p>
  notCrash(TabContent)
  defaultTag(TabContent, 'div')
  defaultProps(TabContent, { tag: 'div', open: false })
  renderChild(TabContent, child, 'p')
  customTag(TabContent, 'section', 'section')
  displayName(TabContent, 'xbrick.TabContent')

  it('should render correct className', () => {
    const node = mount(<TabContent/>)
    expect(node.find('div').hasClass('xbrick-tab-content'))
    node.setProps({open: true})
    expect(node.find('div.xbrick-tab-content').hasClass('active'))
  })

  describe('tabContentClass', () => {
    it('should create default className', () => {
      expect(tabContentClass()).toBe('xbrick-tab-content')
      expect(tabContentClass({className: 'custom'})).toBe('custom xbrick-tab-content')
      expect(tabContentClass({className: 'custom', open: true})).toBe('custom xbrick-tab-content active')
      expect(tabContentClass({className: 'custom', open: false})).toBe('custom xbrick-tab-content')
    })
  })
})
