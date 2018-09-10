import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { CardTitle } from 'src/cards/CardTitle'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('CardTitle', () => {
  const child = <p>111</p>
  notCrash(CardTitle)
  defaultTag(CardTitle, 'h5')
  defaultProps(CardTitle, { tag: 'h5' })
  renderChild(CardTitle, child, 'p')
  customTag(CardTitle, 'a', 'a')
  displayName(CardTitle, 'xbrick.CardTitle')

  it('should render sub title when subtitle is true', () => {
    const node = mount(<CardTitle subtitle>title</CardTitle>)
    expect(node.find('h5').hasClass('card-subtitle')).toBe(true)
  })
})
