import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CardDeck, cardDeckClass } from 'src/cards/CardDeck'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CardDeck', () => {
  const child = <p>111</p>
  notCrash(CardDeck)
  defaultTag(CardDeck, 'div')
  defaultProps(CardDeck, { tag: 'div' })
  renderChild(CardDeck, child, 'p')
  customTag(CardDeck, 'section', 'section')
  displayName(CardDeck, 'xbrick.CardDeck')

  describe('cardDeckClass', () => {
    it('should create default className', () => {
      expect(cardDeckClass()).toBe('card-deck')
      expect(cardDeckClass({className: 'custom'})).toBe('custom card-deck')
    })
  })
})
