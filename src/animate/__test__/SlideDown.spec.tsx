import React from 'react'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { SlideDown } from 'src/animate/SlideDown'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('SlideDown', () => {
  const child = () => <p>111</p>
  notCrash(SlideDown)
  defaultTag(SlideDown, 'div')
  defaultProps(SlideDown, { tag: 'div' })
  renderChild(SlideDown, child, 'p')
  customTag(SlideDown, 'a', 'a')
  displayName(SlideDown, 'xbrick.SlideDown')
})
