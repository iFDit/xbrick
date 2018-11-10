import React from 'react'
import { mount } from 'enzyme'
import { Pagination, paginationClass } from 'src/pagination/Pagination'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('Pagination', () => {
  const child = <p>111</p>
  notCrash(Pagination)
  defaultTag(Pagination, 'ul')
  defaultProps(Pagination, { tag: 'ul', size: 'middle' })
  renderChild(Pagination, child, 'p')
  customTag(Pagination, 'section', 'section')
  displayName(Pagination, 'xbrick.Pagination')

  it('should render correct className when set different props', () => {
    const node = mount(<Pagination/>)
    expect(node.find('ul').hasClass('pagination')).toBe(true)
    node.setProps({ justify: 'center' })
    expect(node.find('ul.pagination').hasClass('justify-content-center'))
    node.setProps({ size: 'small' })
    expect(node.find('ul.pagination').hasClass('pagination-sm'))
  })

  describe('paginationClass', () => {
    expect(paginationClass()).toBe('pagination')
    expect(paginationClass({className: 'custom'})).toBe('custom pagination')
    expect(paginationClass({className: 'custom', size: 'small'})).toBe('custom pagination pagination-sm')
    expect(paginationClass({className: 'custom', size: 'middle'})).toBe('custom pagination')
    expect(paginationClass({className: 'custom', size: 'large'})).toBe('custom pagination pagination-lg')
    expect(paginationClass({className: 'custom', justify: 'start'})).toBe('custom pagination')
    expect(paginationClass({className: 'custom', justify: 'center'})).toBe('custom pagination justify-content-center')
    expect(paginationClass({className: 'custom', justify: 'end'})).toBe('custom pagination justify-content-end')
  })
})
