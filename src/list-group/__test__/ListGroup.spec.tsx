import React from 'react'
import { mount } from 'enzyme'
import { ListGroup, listGroupClass } from 'src/list-group/ListGroup'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('ListGroup', () => {
  const child = <p>111</p>
  notCrash(ListGroup)
  defaultTag(ListGroup, 'ul')
  defaultProps(ListGroup, { tag: 'ul', flush: false })
  renderChild(ListGroup, child, 'p')
  customTag(ListGroup, 'section', 'section')
  displayName(ListGroup, 'xbrick.ListGroup')

  it('should render correct className when set different props', () => {
    const node = mount(<ListGroup/>)
    expect(node.find('ul').hasClass('list-group')).toBe(true)
    node.setProps({ flush: true })
    expect(node.find('ul').hasClass('list-group-flush')).toBe(true)
    expect(node.find('ul').hasClass('list-group')).toBe(true)
  })

  describe('listGroupClass', () => {
    it('should create default className', () => {
      expect(listGroupClass()).toBe('list-group')
      expect(listGroupClass({className: 'custom'})).toBe('custom list-group')
      expect(listGroupClass({className: 'custom', flush: true})).toBe('custom list-group list-group-flush')
    })
  })
})
