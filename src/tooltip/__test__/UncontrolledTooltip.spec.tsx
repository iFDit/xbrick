import React, { forwardRef } from 'react'
import { mount } from 'enzyme'
import { UncontrolledTooltip } from 'src/tooltip/UncontrolledTooltip'
import { notCrash, renderChild, defaultProps, displayName } from 'test/basic'

describe('UncontrolledTooltip', () => {
  const child = <p>111</p>
  notCrash(UncontrolledTooltip)
  defaultProps(UncontrolledTooltip, { tag: 'div', noarrow: false, placement: 'top', open: false })
  renderChild(UncontrolledTooltip, child, 'p')
  displayName(UncontrolledTooltip, 'xbrick.UncontrolledTooltip')

  it('should render default div tag', () => {
    const Child = forwardRef((props, ref: any) => <p className="test" ref={ref}>1234</p>)
    const node = mount(<UncontrolledTooltip><Child/></UncontrolledTooltip>)
    node.setState({active: true})
    expect(node.find('div.tooltip').hostNodes().length).toBe(1)
  })

  it('should render change tag', () => {
    const node = mount(<UncontrolledTooltip tag="section"><p className="test">1234</p></UncontrolledTooltip>)
    node.setState({active: true})
    expect(node.find('section.tooltip').hostNodes().length).toBe(1)
  })

  it('should be active when lastOpen is not same as current open', () => {
    const node = mount(<UncontrolledTooltip/>)
    expect(node.state('active')).toBe(false)
    node.setProps({placement: 'bottom'})
    node.setState({active: true})
    expect(node.state('active')).toBe(true)
  })

  it('should render correct className when set different props', () => {
    const node = mount(<UncontrolledTooltip tag="section"/>)
    node.setState({active: true})
    expect(node.find('section').hasClass('tooltip')).toBe(true)
    expect(node.find('section').hasClass('show')).toBe(true)
    node.setProps({ placement: 'top' })
    expect(node.find('section').hasClass('bs-tooltip-top')).toBe(true)
    node.setProps({ placement: 'left' })
    expect(node.find('section').hasClass('bs-tooltip-left')).toBe(true)
    node.setProps({ placement: 'right' })
    expect(node.find('section').hasClass('bs-tooltip-right')).toBe(true)
    node.setProps({ placement: 'bottom' })
    expect(node.find('section').hasClass('bs-tooltip-bottom')).toBe(true)
  })
})
