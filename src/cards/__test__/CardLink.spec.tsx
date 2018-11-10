import React from 'react'
import { CardLink, cardLinkClass } from 'src/cards/CardLink'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('CardLink', () => {
  const child = <p>111</p>
  notCrash(CardLink)
  defaultTag(CardLink, 'a')
  defaultProps(CardLink, { tag: 'a' })
  renderChild(CardLink, child, 'p')
  customTag(CardLink, 'p', 'p')
  displayName(CardLink, 'xbrick.CardLink')

  describe('cardLinkClass', () => {
    it('should create default className', () => {
      expect(cardLinkClass()).toBe('card-link')
      expect(cardLinkClass({className: 'custom'})).toBe('custom card-link')
    })
  })
})
