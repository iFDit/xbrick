import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CardText, cardTextClass } from 'src/cards/CardText'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CardText', () => {
  const child = <span>111</span>
  notCrash(CardText)
  defaultTag(CardText, 'p')
  defaultProps(CardText, { tag: 'p' })
  renderChild(CardText, child, 'span')
  customTag(CardText, 'div', 'div')
  displayName(CardText, 'xbrick.CardText')

  describe('cardTextClass', () => {
    it('should create default className', () => {
      expect(cardTextClass()).toBe('card-text')
      expect(cardTextClass({className: 'custom'})).toBe('custom card-text')
    })
  })
})
