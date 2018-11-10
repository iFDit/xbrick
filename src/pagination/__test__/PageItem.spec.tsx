import React from 'react'
import { mount } from 'enzyme'
import { PageItem, pageItemClass } from 'src/pagination/PageItem'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('PageItem', () => {
  const child = <p>111</p>
  notCrash(PageItem)
  defaultTag(PageItem, 'li')
  defaultProps(PageItem, { tag: 'li', disabled: false, active: false })
  renderChild(PageItem, child, 'p')
  customTag(PageItem, 'section', 'section')
  displayName(PageItem, 'xbrick.PageItem')

  it('should render correct className when set different props', () => {
    const node = mount(<PageItem/>)
    expect(node.find('li').hasClass('page-item')).toBe(true)
    node.setProps({ disabled: true })
    expect(node.find('li.page-item').hasClass('disabled'))
    node.setProps({ active: true })
    expect(node.find('li.page-item').hasClass('active'))
  })

  describe('pageItemClass', () => {
    expect(pageItemClass()).toBe('page-item')
    expect(pageItemClass({className: 'custom'})).toBe('custom page-item')
    expect(pageItemClass({className: 'custom', active: true})).toBe('custom page-item active')
    expect(pageItemClass({className: 'custom', disabled: true})).toBe('custom page-item disabled')
  })
})
