import React from 'react'
import { mount } from 'enzyme'
import { TableBody } from 'src/table/TableBody'
import { displayName } from 'test/basic'

describe('TableBody', () => {
  displayName(TableBody, 'xbrick.TableBody')
  it('should render as tbody', () => {
    const node = mount(<table><TableBody/></table>)
    expect(node.find('tbody').hostNodes().length).toBe(1)
  })
})
