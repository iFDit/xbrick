import React from 'react'
import { InputGroupText, inputGroupTextClass } from 'src/input-group/InputGroupText'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('InputGroupText', () => {
  const child = <p>111</p>
  notCrash(InputGroupText)
  defaultTag(InputGroupText, 'span')
  defaultProps(InputGroupText, { tag: 'span' })
  renderChild(InputGroupText, child, 'p')
  customTag(InputGroupText, 'section', 'section')
  displayName(InputGroupText, 'xbrick.InputGroupText')

  describe('inputGroupTextClass', () => {
    it('should create default className', () => {
      expect(inputGroupTextClass()).toBe('input-group-text')
      expect(inputGroupTextClass({className: 'custom'})).toBe('custom input-group-text')
    })
  })
})
