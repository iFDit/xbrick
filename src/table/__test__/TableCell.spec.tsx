import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { TableCell, tableCellClass } from 'src/table/TableCell'
import { displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('TableCell', () => {
  const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'light', 'dark']
  displayName(TableCell, 'xbrick.TableCell')

  it('should render as th', () => {
    const node = mount(<table><thead><tr><TableCell tag="th"/></tr></thead></table>)
    expect(node.find('th').hostNodes().length).toBe(1)
  })

  it('should render correct className when set different props', () => {
    const node = mount(<table><tbody><tr><TableCell color="primary"/></tr></tbody></table>)
    expect(node.find('td').hasClass('table-primary')).toBe(true)
  })

  describe('tableCellClass', () => {
    it('should create default className', () => {
      expect(tableCellClass()).toBe('')
      expect(tableCellClass({className: 'custom'})).toBe('custom')
      const classnameTest = (classnames: string[], testClass: string[]) => {
        classnames.forEach(name => {
          expect(testClass.includes(name)).toBe(true)
        })
      }
      colors.forEach((color: any) => {
        const baseClass = [`table-${color}`]
        classnameTest(
          baseClass,
          tableCellClass({color}).split(' '),
        )
      })
    })
  })
})
