import React from 'react'
import { SlideUp } from 'src/animate/SlideUp'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('SlideUp', () => {
  const child = () => <p>111</p>
  notCrash(SlideUp)
  defaultTag(SlideUp, 'div')
  defaultProps(SlideUp, { tag: 'div' })
  renderChild(SlideUp, child, 'p')
  customTag(SlideUp, 'a', 'a')
  displayName(SlideUp, 'xbrick.SlideUp')
})
