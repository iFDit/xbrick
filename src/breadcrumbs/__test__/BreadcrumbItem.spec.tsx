import React from 'react'
import { mount } from 'enzyme'
import { BreadcrumbItem, breadcrumbItemClass } from 'src/breadcrumbs/BreadcrumbItem'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

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
