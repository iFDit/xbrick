import React from 'react'
import { mount } from 'enzyme'
import { TableHeader } from 'src/table/TableHeader'
import { displayName } from 'test/basic'

describe('TableHeader', () => {
  displayName(TableHeader, 'xbrick.TableHeader')
  it('should render as thead', () => {
    const node = mount(<table><TableHeader/></table>)
    expect(node.find('thead').hostNodes().length).toBe(1)
  })
})
