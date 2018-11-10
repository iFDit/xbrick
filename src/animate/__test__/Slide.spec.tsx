import React from 'react'
import { mount } from 'enzyme'
import { Slide } from 'src/animate/Slide'
import { Animate } from 'src/animate/Animate'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('Slide', () => {
  const child = <p>111</p>
  notCrash(Slide)
  defaultTag(Slide, 'div')
  defaultProps(Slide, { open: false, tag: 'div' })
  renderChild(Slide, child, 'p')
  customTag(Slide, 'a', 'a')
  displayName(Slide, 'xbrick.Slide')

  it('should ignore props of to, from', () => {
    const otherTo = { to: 'to' }
    const otherFrom = { from: 'from' }
    const slideup = mount(<Slide to={otherTo} from={otherFrom}/>)
    const props: any = slideup.find(Animate).props()
    expect(props.to === otherTo).toBe(false)
    expect(props.form === otherFrom).toBe(false)
  })
})
