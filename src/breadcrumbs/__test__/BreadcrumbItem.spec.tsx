import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BreadcrumbItem, breadcrumbItemClass } from 'src/breadcrumbs/BreadcrumbItem'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('BreadcrumbItem', () => {
  const child = <p>111</p>
  notCrash(BreadcrumbItem)
  defaultTag(BreadcrumbItem, 'li')
  defaultProps(BreadcrumbItem, { tag: 'li', active: false })
  renderChild(BreadcrumbItem, child, 'p')
  customTag(BreadcrumbItem, 'div', 'div')
  displayName(BreadcrumbItem, 'xbrick.BreadcrumbItem')

  it('should be active when active props is true', () => {
    const node = mount(<BreadcrumbItem active>active</BreadcrumbItem>)
    expect(node.find('li').hasClass('active')).toBe(true)
  })

  describe('breadcrumbItemClass', () => {
    it('should create default className', () => {
      const className = breadcrumbItemClass({className: 'test'})
      expect(/test/.test(className)).toBe(true)
      expect(/breadcrumb-item/.test(className)).toBe(true)
      expect(breadcrumbItemClass({className: ''})).toBe('breadcrumb-item')
      expect(/breadcrumb-item/.test(breadcrumbItemClass({active: true}))).toBe(true)
      expect(/active/.test(breadcrumbItemClass({active: true}))).toBe(true)
    })
  })
})
