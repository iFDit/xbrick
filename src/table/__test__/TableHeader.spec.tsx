import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { TableHeader } from 'src/table/TableHeader'
import { displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('TableHeader', () => {
  displayName(TableHeader, 'xbrick.TableHeader')
  it('should render as thead', () => {
    const node = mount(<table><TableHeader/></table>)
    expect(node.find('thead').hostNodes().length).toBe(1)
  })
})
