import React from 'react'
import { Breadcrumb, breadcrumbClass } from 'src/breadcrumbs/Breadcrumb'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('Breadcrumb', () => {
  const child = <p>111</p>
  notCrash(Breadcrumb)
  defaultTag(Breadcrumb, 'ol')
  defaultProps(Breadcrumb, { tag: 'ol' })
  renderChild(Breadcrumb, child, 'p')
  customTag(Breadcrumb, 'div', 'div')
  displayName(Breadcrumb, 'xbrick.Breadcrumb')

  describe('breadcrumbClass', () => {
    it('should create default className', () => {
      const className = breadcrumbClass({className: 'test'})
      expect(/test/.test(className)).toBe(true)
      expect(/breadcrumb/.test(className)).toBe(true)
      expect(breadcrumbClass({className: ''})).toBe('breadcrumb')
    })
  })
})
