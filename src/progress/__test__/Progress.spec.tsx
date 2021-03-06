import React from 'react'
import { mount } from 'enzyme'
import { Progress, progressClass } from 'src/progress/Progress'
import { notCrash, renderChild, defaultTag, customTag, defaultProps, displayName } from 'test/basic'

describe('Progress', () => {
  const child = <p>111</p>
  notCrash(Progress)
  defaultTag(Progress, 'div')
  defaultProps(Progress, { tag: 'div' })
  renderChild(Progress, child, 'p')
  customTag(Progress, 'section', 'section')
  displayName(Progress, 'xbrick.Progress')

  it('should render correct className when set different props', () => {
    const node = mount(<Progress />)
    expect(node.find('div').hasClass('progress')).toBe(true)
  })

  describe('progressClass', () => {
    it('should create default className', () => {
      expect(progressClass()).toBe('progress')
      expect(progressClass({className: 'custom'})).toBe('custom progress')
    })
  })
})
