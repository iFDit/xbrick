import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Tooltip, tooltipClass } from 'src/tooltip/Tooltip'
import { notCrash, renderChild, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Tooltip', () => {
  const child = <p>111</p>
  notCrash(Tooltip)
  defaultProps(Tooltip, { tag: 'div', noarrow: false, placement: 'top', open: false })
  renderChild(Tooltip, child, 'p')
  displayName(Tooltip, 'xbrick.Tooltip')

  it('should render default div tag', () => {
    const node = mount(<Tooltip open={true}/>)
    expect(node.find('div.tooltip').hostNodes().length).toBe(1)
  })

  it('should render change tag', () => {
    const node = mount(<Tooltip tag="section" open={true}/>)
    expect(node.find('section.tooltip').hostNodes().length).toBe(1)
  })

  it('should be active when lastOpen is not same as current open', () => {
    const node = mount(<Tooltip/>)
    expect(node.state('active')).toBe(false)
    node.setProps({open: true, placement: 'bottom'})
    expect(node.state('active')).toBe(true)
  })

  it('should render correct className when set different props', () => {
    const node = mount(<Tooltip tag="section" open={true}/>)
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

  describe('tooltipClass', () => {
    it('should create default className', () => {
      expect(tooltipClass()).toBe('tooltip show')
      expect(tooltipClass({className: 'custom'})).toBe('custom tooltip show')
      expect(tooltipClass({className: 'custom', currentPlacement: 'top'})).toBe('custom tooltip show bs-tooltip-top')
      expect(tooltipClass({className: 'custom', currentPlacement: 'left'})).toBe('custom tooltip show bs-tooltip-left')
      expect(tooltipClass({className: 'custom', currentPlacement: 'right'})).toBe('custom tooltip show bs-tooltip-right')
      expect(tooltipClass({className: 'custom', currentPlacement: 'bottom'})).toBe('custom tooltip show bs-tooltip-bottom')
    })
  })
})
