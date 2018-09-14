import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { DropdownMenu } from 'src/dropdowns/DropdownMenu'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('DropdownMenu', () => {
  const child = <p>111</p>
  notCrash(DropdownMenu)
  defaultTag(DropdownMenu, 'div')
  defaultProps(DropdownMenu, { tag: 'div', right: false, open: false })
  renderChild(DropdownMenu, child, 'p')
  customTag(DropdownMenu, 'section', 'section')
  displayName(DropdownMenu, 'xbrick.DropdownMenu')

  it('should render right align styles by using right props', () => {
    const node = mount(<DropdownMenu right/>)
    expect(node.find('div').hasClass('dropdown-menu-right')).toBe(true)
  })

  it('should invoked afterChange after animate is finish', (next) => {
    const afterChange = () => next()
    const node = mount(<DropdownMenu afterChange={afterChange} open={false}/>)
    node.setProps({ open: true })
  })
})
