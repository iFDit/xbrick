import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Collapse } from 'src/collapse/Collapse'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Collapse', () => {
  const child = <p>111</p>
  notCrash(Collapse)
  defaultTag(Collapse, 'div')
  defaultProps(Collapse, { tag: 'div' })
  renderChild(Collapse, child, 'p')
  customTag(Collapse, 'section', 'section')
  displayName(Collapse, 'xbrick.Collapse')

  it('should invoked afterChange after animate is finish', (next) => {
    const afterChange = () => next()
    const node = mount(<Collapse open={true} afterChange={afterChange}>111111</Collapse>)
    node.setProps({ open: false })
  })
})
