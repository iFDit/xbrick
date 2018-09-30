import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Jumbotron, jumbotronClass } from 'src/jumbotron/Jumbotron'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Jumbotron', () => {
  const child = <p>111</p>
  notCrash(Jumbotron)
  defaultTag(Jumbotron, 'div')
  defaultProps(Jumbotron, { tag: 'div', fluid: false })
  renderChild(Jumbotron, child, 'p')
  customTag(Jumbotron, 'section', 'section')
  displayName(Jumbotron, 'xbrick.Jumbotron')

  it('should render correct className when set different props', () => {
    const node = mount(<Jumbotron />)
    expect(node.find('div').hasClass('jumbotron')).toBe(true)
    node.setProps({ fluid: true })
    expect(node.find('div.jumbotron').hasClass('jumbotron-fluid')).toBe(true)
  })

  describe('jumbotronClass', () => {
    it('should create default className', () => {
      expect(jumbotronClass()).toBe('jumbotron')
      expect(jumbotronClass({className: 'custom'})).toBe('custom jumbotron')
      expect(jumbotronClass({className: 'custom', fluid: true})).toBe('custom jumbotron jumbotron-fluid')
    })
  })
})
