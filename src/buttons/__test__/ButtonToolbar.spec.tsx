import React from 'react'
import { ButtonToolbar, buttonToolbarClass } from 'src/buttons/ButtonToolbar'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('ButtonToolbar', () => {
  const child = <p>111</p>
  notCrash(ButtonToolbar)
  defaultTag(ButtonToolbar, 'div')
  defaultProps(ButtonToolbar, { tag: 'div' })
  renderChild(ButtonToolbar, child, 'p')
  customTag(ButtonToolbar, 'span', 'span')
  displayName(ButtonToolbar, 'xbrick.ButtonToolbar')

  describe('buttonToolbarClass', () => {
    it('should create default className', () => {
      expect(buttonToolbarClass()).toBe('btn-toolbar')
      expect(buttonToolbarClass({className: 'test'})).toBe('test btn-toolbar')
    })
  })
})
