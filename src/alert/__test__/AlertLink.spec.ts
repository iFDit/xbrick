import React from 'react'
import { mount } from 'enzyme'
import { AlertLink } from 'src/alert/AlertLink'

describe('AlertLink', () => {
  const props = {}
  const p = React.createFactory<any>('p')
  const span = React.createFactory<any>('span')
  const AlertFactory = React.createFactory<any>(AlertLink)

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
    expect(alert.find('a.alert-link').hostNodes().length).toBe(1)
    expect(alert.find('a.alert-link').hasClass('alert-test-class')).toBe(true)
    expect(alert.find('a.alert-link').prop('style')!.color).toBe('red')
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
    alert.find('a').hostNodes().simulate('mouseenter')

    expect(alert.find('a').hasClass('pass-down')).toBe(true)
    expect(alert.find('a').prop('style')!.fontSize).toBe(20)
    expect(alert.find('a').prop('data-other')).toBe('custom')
    expect(eventTrigged).toBe(true)
  })

  it('should render alert-link className by default', () => {
    const alert = mount(AlertFactory()).find('a')
    expect(alert.hasClass('alert-link'))
  })

  it('should use a a tag by default', () => {
    const alert = mount(AlertFactory(props, 'innerText'))
    expect(alert.find('a').hostNodes().length).toBe(1)
  })

  it('can use custom tag', () => {
    const alert = mount(AlertFactory({ tag: 'p' }))
    expect(alert.find('p').hostNodes().length).toEqual(1)
  })
})
