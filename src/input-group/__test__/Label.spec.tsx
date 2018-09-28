import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Label, labelClass } from 'src/input-group/Label'
import { notCrash, renderChild, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('Label', () => {
  const child = <p>111</p>
  notCrash(Label)
  defaultProps(Label, { verticalCenter: false, check: false, size: 'middle', hiddren: false })
  renderChild(Label, child, 'p')
  displayName(Label, 'xbrick.Label')

  describe('labelClass', () => {
    it('should create default className', () => {
      expect(labelClass()).toBe('xbrick-lable')
      expect(labelClass({className: 'custom'})).toBe('custom xbrick-lable')
      expect(labelClass({className: 'custom', hiddren: true })).toBe('custom xbrick-lable sr-only')
      expect(labelClass({className: 'custom', check: true })).toBe('custom xbrick-lable form-check-label')
      expect(labelClass({className: 'custom', verticalCenter: true })).toBe('custom xbrick-lable col-form-label')
      expect(labelClass({className: 'custom', size: 'small', verticalCenter: true })).toBe('custom xbrick-lable col-form-label col-form-label-sm')
      expect(labelClass({className: 'custom', size: 'large', verticalCenter: true })).toBe('custom xbrick-lable col-form-label col-form-label-lg')
    })
  })
})
