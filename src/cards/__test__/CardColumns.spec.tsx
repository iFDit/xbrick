import React from 'react'
import { CardColumns, cardColumnsClass } from 'src/cards/CardColumns'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('CardColumns', () => {
  const child = <p>111</p>
  notCrash(CardColumns)
  defaultTag(CardColumns, 'div')
  defaultProps(CardColumns, { tag: 'div' })
  renderChild(CardColumns, child, 'p')
  customTag(CardColumns, 'section', 'section')
  displayName(CardColumns, 'xbrick.CardColumns')

  describe('cardColumnsClass', () => {
    it('should create default className', () => {
      expect(cardColumnsClass()).toBe('card-columns')
      expect(cardColumnsClass({className: 'custom'})).toBe('custom card-columns')
    })
  })
})
