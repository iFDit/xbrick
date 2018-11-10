import React from 'react'
import { SlideDown } from 'src/animate/SlideDown'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('SlideDown', () => {
  const child = () => <p>111</p>
  notCrash(SlideDown)
  defaultTag(SlideDown, 'div')
  defaultProps(SlideDown, { tag: 'div' })
  renderChild(SlideDown, child, 'p')
  customTag(SlideDown, 'a', 'a')
  displayName(SlideDown, 'xbrick.SlideDown')
})
