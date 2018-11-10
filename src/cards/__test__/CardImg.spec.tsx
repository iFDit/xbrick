import React from 'react'
import { mount } from 'enzyme'
import { CardImg, cardImgClass } from 'src/cards/CardImg'
import { notCrash, defaultTag, defaultProps, displayName } from 'test/basic'

describe('CardImg', () => {
  notCrash(CardImg)
  defaultTag(CardImg, 'img')
  defaultProps(CardImg, { top: true })
  displayName(CardImg, 'xbrick.CardImg')

  it('should not render at top when top props is false', () => {
    const node = mount(<CardImg top={false} src="example.com" alt="" />)
    expect(node.find('img').hasClass('card-img-bottom')).toBe(true)
  })

  describe('cardImgClass', () => {
    it('should create default className', () => {
      expect(cardImgClass()).toBe('card-img-bottom')
      expect(cardImgClass({className: 'custom', top: true})).toBe('custom card-img-top')
      expect(cardImgClass({className: 'custom', top: false})).toBe('custom card-img-bottom')
    })
  })
})
