import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Popover, popoverClass } from 'src/popover/Popover'
import { notCrash, renderChild, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Popover', () => {
  const child = <p>111</p>
  notCrash(Popover)
  defaultProps(Popover, { tag: 'div', placement: 'top', open: false, noarrow: false })
  renderChild(Popover, child, 'p')
  displayName(Popover, 'xbrick.Popover')

  it('should render default div tag', () => {
    const node = mount(<Popover open={true}/>)
    expect(node.find('div.xbrick-popover').hostNodes().length).toBe(1)
  })

  it('should render change tag', () => {
    const node = mount(<Popover tag="section" open={true}/>)
    expect(node.find('section.xbrick-popover').hostNodes().length).toBe(1)
  })

  it('should not crash when render Header only', () => {
    mount(<Popover.Header/>)
  })

  it('should not crash when render Body only', () => {
    mount(<Popover.Body/>)
  })

  it('should be active when lastOpen is not same as current open', () => {
    const node = mount(<Popover/>)
    expect(node.state('active')).toBe(false)
    node.setProps({open: true})
    expect(node.state('active')).toBe(true)
  })

  it('should render correct className when set different props', () => {
    const node = mount(<Popover tag="section" open={true}/>)
    expect(node.find('section').hasClass('xbrick-popover')).toBe(true)
    expect(node.find('section').hasClass('popover')).toBe(true)
    expect(node.find('section').hasClass('show')).toBe(true)
    expect(node.find('section').hasClass('xbrick-popover-close')).not.toBe(true)
    node.setProps({ placement: 'top' })
    expect(node.find('section').hasClass('bs-popover-top')).toBe(true)
    node.setProps({ placement: 'left' })
    expect(node.find('section').hasClass('bs-popover-left')).toBe(true)
    node.setProps({ placement: 'right' })
    expect(node.find('section').hasClass('bs-popover-right')).toBe(true)
    node.setProps({ placement: 'bottom' })
    expect(node.find('section').hasClass('bs-popover-bottom')).toBe(true)
  })

  describe('popoverClass', () => {
    it('should create default className', () => {
      expect(popoverClass()).toBe('xbrick-popover popover show xbrick-popover-close')
      expect(popoverClass({className: 'custom'})).toBe('custom xbrick-popover popover show xbrick-popover-close')
      expect(popoverClass({className: 'custom', open: true})).toBe('custom xbrick-popover popover show')
      expect(popoverClass({className: 'custom', currentPlacement: 'top'})).toBe('custom xbrick-popover popover show xbrick-popover-close bs-popover-top')
      expect(popoverClass({className: 'custom', currentPlacement: 'left'})).toBe('custom xbrick-popover popover show xbrick-popover-close bs-popover-left')
      expect(popoverClass({className: 'custom', currentPlacement: 'right'})).toBe('custom xbrick-popover popover show xbrick-popover-close bs-popover-right')
      expect(popoverClass({className: 'custom', currentPlacement: 'bottom'})).toBe('custom xbrick-popover popover show xbrick-popover-close bs-popover-bottom')
    })
  })
})
