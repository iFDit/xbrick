import React from 'react'
import { mount } from 'enzyme'
import { Collapse } from 'src/collapse/Collapse'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('Collapse', () => {
  const child = <p>111</p>
  notCrash(Collapse)
  defaultTag(Collapse, 'div')
  defaultProps(Collapse, { tag: 'div', open: false })
  renderChild(Collapse, child, 'p')
  customTag(Collapse, 'section', 'section')
  displayName(Collapse, 'xbrick.Collapse')

  it('should invoked afterChange after animate is finish', (next) => {
    const afterChange = () => next()
    const node = mount(<Collapse open={true} afterChange={afterChange}>111111</Collapse>)
    node.setProps({ open: false })
  })

  it('should render children where is function', () => {
    mount(<Collapse>{() => <p>child</p>}</Collapse>)
  })
})
