import React from 'react'
import sinon from 'sinon'
import { mount } from 'enzyme'
import { Alert, AlertContext, alertClass } from 'src/alert/Alert'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('Alert', () => {
  const child = <p>111</p>
  notCrash(Alert)
  defaultTag(Alert, 'div')
  defaultProps(Alert, { tag: 'div', color: 'primary' })
  renderChild(Alert, child, 'p')
  customTag(Alert, 'a', 'a')
  displayName(Alert, 'xbrick.Alert')
  displayName(Alert.Close, 'xbrick.AlertClose')

  it('should not collapse that rende Alert.Close', () => {
    mount(<Alert.Close/>)
  })

  it('should pass down custom properties', () => {
    let eventTrigged = false
    const props = {
      style: { fontSize: 20 },
      className: 'pass-down',
      'data-other': 'custom',
      onMouseEnter: () => eventTrigged = true,
    }
    const node = mount(<Alert {...props}/>)
    node.find('div').hostNodes().simulate('mouseenter')
    expect(node.find('div').hasClass('pass-down')).toBe(true)
    expect(node.find('div').prop('style')!.fontSize).toBe(20)
    expect(node.find('div').prop('data-other')).toBe('custom')
    expect(eventTrigged).toBe(true)
  })

  it('should invoke custom onClick on Alert.Close', () => {
    const onClick = sinon.spy()
    const node = mount(<Alert><Alert.Close onClick={onClick}/></Alert>)
    node.find(Alert.Close).simulate('click')
    expect(onClick.called).toBe(true)
  })

  it('should invoke afterClose after Alert has been dismission', next => {
    const afterClose = () => next()
    const node = mount(<Alert afterClose={afterClose}><Alert.Close/></Alert>)
    node.find(Alert.Close).simulate('click')
  })

  it('should pass down handleCloseProps from AlertContext', () => {
    mount(
      <Alert>
        <AlertContext.Consumer>
          {({handleCloseProps}: {handleCloseProps: any}) => {
            expect(handleCloseProps).toBeTruthy()
            return null
          }}
        </AlertContext.Consumer>
      </Alert>,
    )
  })

  it('should create new props wrap with onClick from handleCloseProps function', () => {
    const myClick = sinon.spy()
    let innerProps: any = {}
    mount(
      <Alert>
        <AlertContext.Consumer>
          {({handleCloseProps}: {handleCloseProps: any}) => {
            innerProps = handleCloseProps({ other: 'test', onClick: myClick })
            expect(innerProps.other).toBe('test')
            return null
          }}
        </AlertContext.Consumer>
      </Alert>,
    )
    innerProps.onClick()
    expect(myClick.called).toBeTruthy()
  })

  it('should be dismission when children who invoke the pass down props handleCloseProps().onClick', next => {
    const afterClose = () => next()
    const node = mount(
      <Alert afterClose={afterClose}>
        <AlertContext.Consumer>
          {({handleCloseProps}: {handleCloseProps: any}) => <button {...handleCloseProps()}>x</button>}
        </AlertContext.Consumer>
      </Alert>,
    )
    node.find('button').simulate('click')
  })

  describe('alertClass', () => {
    it('should create default className', () => {
      const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
      const className = alertClass({className: 'test'})
      colors.forEach((color: any) => {
        expect(alertClass({className: color, color })).toBe(`${color} alert alert-${color}`)
      })
      expect(/test/.test(className)).toBe(true)
      expect(/alert/.test(className)).toBe(true)
      expect(alertClass({className: ''})).toBe('alert')
    })
  })
})
