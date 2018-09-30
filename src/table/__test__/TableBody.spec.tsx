import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { TableBody } from 'src/table/TableBody'
import { displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('TableBody', () => {
  displayName(TableBody, 'xbrick.TableBody')
  it('should render as tbody', () => {
    const node = mount(<table><TableBody/></table>)
    expect(node.find('tbody').hostNodes().length).toBe(1)
  })
})
