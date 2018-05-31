import * as React from 'react'
import * as sinon from 'sinon'
import { mount } from 'enzyme'
import { Alert } from 'src/alert/Alert'

describe('Alert', () => {
  const props = {}
  const link = React.createFactory<any>('a')
  const p = React.createFactory<any>('p')
  const span = React.createFactory<any>('span')
  const AlertFactory = React.createFactory<any>(Alert)

  it('renders its content correctly', () => {
    const alert = mount(AlertFactory(
      {
        style: {color: 'red'},
        className: 'alert-test-class',
      },
      p(null, 'There is alert'),
      span(null, 'In the alert content'),
    ))

    expect(alert.find('p').hostNodes().length).toBe(1)
    expect(alert.find('span').hostNodes().length).toBe(1)
    expect(alert.find('div.alert').hostNodes().length).toBe(1)
    expect(alert.find('div.alert').hasClass('alert-test-class')).toBe(true)
    expect(alert.find('div.alert').prop('style')!.color).toBe('red')
  })

  it('should pass down custom properties', () => {
    let eventTrigged = false
    const custom = {
      style: { fontSize: 20 },
      className: 'pass-down',
      'data-other': 'custom',
      onMouseEnter: () => eventTrigged = true,
    }
    const alert = mount(AlertFactory(custom))
    alert.find('div').hostNodes().simulate('mouseenter')

    expect(alert.find('div').hasClass('pass-down')).toBe(true)
    expect(alert.find('div').prop('style')!.fontSize).toBe(20)
    expect(alert.find('div').prop('data-other')).toBe('custom')
    expect(eventTrigged).toBe(true)
  })

  it('render default type is primary', () => {
    const alert = mount(AlertFactory())
    const div = alert.find('div')
    expect(alert.prop('type')).toEqual('primary')
    expect(div.hasClass('alert-primary')).toBe(true)
  })

  it('render type and corresponding className', () => {
    const mapping = {
      primary: 'alert-primary',
      secondary: 'alert-secondary',
      success: 'alert-success',
      danger: 'alert-danger',
      warning: 'alert-warning',
      info: 'alert-info',
      light: 'alert-light',
      dark: 'alert-dark',
    }
    Object.keys(mapping).forEach(type => {
      const alert = mount(AlertFactory({ type })).find('div')
      expect(alert.hasClass(mapping[type]))
    })
  })

  it('should use a div tag by default', () => {
    const alert = mount(AlertFactory(props, 'innerText'))
    expect(alert.find('div').hostNodes().length).toBe(1)
  })

  it('can use custom tag', () => {
    const alert = mount(AlertFactory({ tag: 'p' }))
    expect(alert.find('p').hostNodes().length).toEqual(1)
  })

  it('should not dismissig by default', () => {
    const alert = mount(AlertFactory())
    const btn = alert.find('button')
    expect(btn.hostNodes().length).toBe(0)
  })

  it('should render correct className when closable is true', () => {
    const alert = mount(AlertFactory({ closable: true }))
    const btn = alert.find('button')
    expect(alert.find('div').hasClass('alert-dismissible')).toBe(true)
    expect(btn.hasClass('close')).toBe(true)
  })

  it('can be dismissing when props.closable === true ', () => {
    const alert = mount(AlertFactory({ closable: true }))
    const btn = alert.find('button')
    expect(btn.hostNodes().length).toBe(1)
    expect(btn.hasClass('close'))
  })

  it('can use custom close text', () => {
    const alert = mount(AlertFactory({
      closable: true,
      closeText: link(null, 'custom close'),
    }))
    const linkElem = alert.find('a')
    expect(linkElem.text()).toBe('custom close')
  })

  it('should be dismissing', () => {
    const onClose = sinon.spy()
    const alert = mount(AlertFactory({ closable: true, onClose }))
    alert.find('button').hostNodes().simulate('click')
    expect(onClose.called).toBe(true)
    expect(onClose.args[0].length).toBe(1)
  })

  it('should be called after alert has been dismissed', (next) => {
    jest.setTimeout(1000 * 10)
    let flag = true
    const alert = mount(AlertFactory({
      closable: true,
      onClose: () => {
        flag = false
      },
      afterClose: () => {
        expect(flag).toBe(false)
        next()
      },
    }))
    alert.find('button').hostNodes().simulate('click')
  })
})
