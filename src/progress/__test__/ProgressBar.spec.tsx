import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ProgressBar, progressBarClass } from 'src/progress/ProgressBar'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('ProgressBar', () => {
  const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'light', 'dark']
  const child = <p>111</p>
  notCrash(ProgressBar)
  defaultTag(ProgressBar, 'div')
  defaultProps(ProgressBar, { tag: 'div', striped: false, animate: false })
  renderChild(ProgressBar, child, 'p')
  customTag(ProgressBar, 'section', 'section')
  displayName(ProgressBar, 'xbrick.ProgressBar')

  it('should render correct className when set different props', () => {
    const node = mount(<ProgressBar />)
    expect(node.find('div').hasClass('progress-bar')).toBe(true)
    node.setProps({striped: true, style: {height: 1}})
    expect(node.find('div').hasClass('progress-bar-striped')).toBe(true)
    node.setProps({animate: true})
    expect(node.find('div').hasClass('progress-bar-animated')).toBe(true)
  })

  describe('progressBarClass', () => {
    it('should create default className', () => {
      expect(progressBarClass()).toBe('progress-bar')
      expect(progressBarClass({className: 'custom', striped: true})).toBe('custom progress-bar progress-bar-striped')
      expect(progressBarClass({className: 'custom', animate: true})).toBe('custom progress-bar progress-bar-animated')
      const classnameTest = (classnames: string[], testClass: string[]) => {
        classnames.forEach(name => {
          expect(testClass.includes(name)).toBe(true)
        })
      }
      colors.forEach((color: any) => {
        const baseClass = [`bg-${color}`]
        classnameTest(
          baseClass,
          progressBarClass({color}).split(' '),
        )
      })
    })
  })
})
