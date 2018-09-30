import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { TabContent, tabContentClass } from 'src/tabs/TabContent'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('TabContent', () => {
  const child = <p>111</p>
  notCrash(TabContent)
  defaultTag(TabContent, 'div')
  defaultProps(TabContent, { tag: 'div', open: false })
  renderChild(TabContent, child, 'p')
  customTag(TabContent, 'section', 'section')
  displayName(TabContent, 'xbrick.TabContent')

  describe('tabContentClass', () => {
    it('should create default className', () => {
      expect(tabContentClass()).toBe('xbrick-tab-content')
      expect(tabContentClass({className: 'custom'})).toBe('custom xbrick-tab-content')
      expect(tabContentClass({className: 'custom', open: true})).toBe('custom xbrick-tab-content active')
      expect(tabContentClass({className: 'custom', open: false})).toBe('custom xbrick-tab-content')
    })
  })
})
