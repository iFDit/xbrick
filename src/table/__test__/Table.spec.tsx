import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Table, tableClass } from 'src/table/Table'
import { notCrash, renderChild, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Table', () => {
  const child = <tbody/>
  notCrash(Table)
  defaultProps(Table, { striped: false, border: 'normal', size: 'middle', dynamic: false })
  renderChild(Table, child, 'tbody')
  displayName(Table, 'xbrick.Table')

  it('should render correct className when set different props', () => {
    const node = mount(<Table />)
    expect(node.find('table').hasClass('table')).toBe(true)
  })

  describe('tableClass', () => {
    it('should create default className', () => {
      expect(tableClass()).toBe('table')
      expect(tableClass({className: 'custom'})).toBe('custom table')
      expect(tableClass({className: 'custom', size: 'small'})).toBe('custom table table-sm')
      expect(tableClass({className: 'custom', dynamic: true})).toBe('custom table table-hover')
      expect(tableClass({className: 'custom', border: 'none'})).toBe('custom table table-borderless')
      expect(tableClass({className: 'custom', border: 'full'})).toBe('custom table table-bordered')
      expect(tableClass({className: 'custom', border: 'normal'})).toBe('custom table')
      expect(tableClass({className: 'custom', striped: true})).toBe('custom table table-striped')
    })
  })
})
