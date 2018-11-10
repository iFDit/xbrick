import React from 'react'
import { mount } from 'enzyme'
import { UncontrolledSlideDown } from 'src/animate/UncontrolledSlideDown'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('UncontrolledSlideDown', () => {
  const child = () => <p>111</p>
  notCrash(UncontrolledSlideDown)
  defaultTag(UncontrolledSlideDown, 'div')
  defaultProps(UncontrolledSlideDown, { defaultActive: false, trigger: 'active', tag: 'div' })
  renderChild(UncontrolledSlideDown, child, 'p')
  customTag(UncontrolledSlideDown, 'a', 'a')
  displayName(UncontrolledSlideDown, 'xbrick.UncontrolledSlideDown')

  it('should not pass down slidedown method to children', () => {
    mount((
      <UncontrolledSlideDown>{
        (slidedown: any) => {
          expect(!!slidedown).toBe(true)
          expect(!!slidedown.call).toBe(true)
          return <div>test</div>
        }
      }</UncontrolledSlideDown>
    ))
  })

  it('should be slide down when children call slidedown', (next) => {
    const afterStateChange = () => next()
    const slide = mount((
      <UncontrolledSlideDown afterStateChange={afterStateChange}>
        {(slidedown: any) => <p onClick={() => slidedown()}>test</p>}
      </UncontrolledSlideDown>
    ))
    slide.find('p').simulate('click')
  })
})
