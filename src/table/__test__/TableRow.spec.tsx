import React from 'react'
import { mount } from 'enzyme'
import { TableRow, tableRowClass } from 'src/table/TableRow'
import { displayName } from 'test/basic'

describe('TableRow', () => {
  const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'light', 'dark']
  displayName(TableRow, 'xbrick.TableRow')

  it('should render correct className when set different props', () => {
    const node = mount(<table><tbody><TableRow color="primary"/></tbody></table>)
    expect(node.find('tr').hasClass('table-primary')).toBe(true)
  })

  describe('tableRowClass', () => {
    it('should create default className', () => {
      expect(tableRowClass()).toBe('')
      expect(tableRowClass({className: 'custom'})).toBe('custom')
      const classnameTest = (classnames: string[], testClass: string[]) => {
        classnames.forEach(name => {
          expect(testClass.includes(name)).toBe(true)
        })
      }
      colors.forEach((color: any) => {
        const baseClass = [`table-${color}`]
        classnameTest(
          baseClass,
          tableRowClass({color}).split(' '),
        )
      })
    })
  })
})
