import React from 'react'
import { CardFooter, cardFooterClass } from 'src/cards/CardFooter'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('CardFooter', () => {
  const child = <p>111</p>
  notCrash(CardFooter)
  defaultTag(CardFooter, 'div')
  defaultProps(CardFooter, { tag: 'div' })
  renderChild(CardFooter, child, 'p')
  customTag(CardFooter, 'section', 'section')
  displayName(CardFooter, 'xbrick.CardFooter')

  describe('cardFooterClass', () => {
    it('should create default className', () => {
      expect(cardFooterClass()).toBe('card-footer')
      expect(cardFooterClass({className: 'custom'})).toBe('custom card-footer')
    })
  })
})
