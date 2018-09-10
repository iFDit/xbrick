import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CardImg } from 'src/cards/CardImg'
import { notCrash, renderChild, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CardImg', () => {
  const child = <p>111</p>
  notCrash(CardImg)
  defaultTag(CardImg, 'img')
  defaultProps(CardImg, { top: true })
  renderChild(CardImg, child, 'p')
  displayName(CardImg, 'xbrick.CardImg')

  it('should not render at top when top props is false', () => {
    const node = mount(<CardImg top={false} />)
    expect(node.find('img').hasClass('card-img-bottom')).toBe(true)
  })
})
