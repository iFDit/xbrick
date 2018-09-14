import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { UncontrolledCollapse } from 'src/collapse/UncontrolledCollapse'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Collapse', () => {
  const child = () => <p>111</p>
  notCrash(UncontrolledCollapse)
  defaultTag(UncontrolledCollapse, 'div')
  defaultProps(UncontrolledCollapse, { tag: 'div', defaultOpen: false })
  renderChild(UncontrolledCollapse, child, 'p')
  customTag(UncontrolledCollapse, 'section', 'section')
  displayName(UncontrolledCollapse, 'xbrick.UncontrolledCollapse')

  it('should invoked afterChange after animate is finish', (next) => {
    const afterChange = () => next()
    const node = mount(
      <UncontrolledCollapse defaultOpen={true} afterChange={afterChange}>
        {({ toggle }) => {
          setTimeout(() => toggle!(), 100)
          return <p>111</p>
        }}
      </UncontrolledCollapse>,
    )
    node.setProps({ open: false })
  })
})
