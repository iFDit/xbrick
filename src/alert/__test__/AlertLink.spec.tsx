import React from 'react'
import { AlertLink, alertLinkClass } from 'src/alert/AlertLink'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('AlertLink', () => {
  const child = <p>111</p>
  notCrash(AlertLink)
  defaultTag(AlertLink, 'a')
  defaultProps(AlertLink, { tag: 'a' })
  renderChild(AlertLink, child, 'p')
  customTag(AlertLink, 'div', 'div')
  displayName(AlertLink, 'xbrick.AlertLink')

  describe('alertLinkClass', () => {
    it('should create default className', () => {
      const className = alertLinkClass({className: 'test'})
      expect(/test/.test(className)).toBe(true)
      expect(/alert-link/.test(className)).toBe(true)
      expect(alertLinkClass({className: ''})).toBe('alert-link')
    })
  })
})
