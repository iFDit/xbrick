import React from 'react'
import { CardGroup, cardGroupClass } from 'src/cards/CardGroup'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('CardGroup', () => {
  const child = <p>111</p>
  notCrash(CardGroup)
  defaultTag(CardGroup, 'div')
  defaultProps(CardGroup, { tag: 'div' })
  renderChild(CardGroup, child, 'p')
  customTag(CardGroup, 'section', 'section')
  displayName(CardGroup, 'xbrick.CardGroup')

  describe('cardGroupClass', () => {
    it('should create default className', () => {
      expect(cardGroupClass()).toBe('card-group')
      expect(cardGroupClass({className: 'custom'})).toBe('custom card-group')
    })
  })
})
