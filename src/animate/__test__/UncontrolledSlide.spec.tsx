import React from 'react'
import { mount } from 'enzyme'
import { UncontrolledSlide } from 'src/animate/UncontrolledSlide'
import { Animate } from 'src/animate/Animate'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

describe('UncontrolledSlide', () => {
  const child = () => <p>111</p>
  notCrash(UncontrolledSlide)
  defaultTag(UncontrolledSlide, 'div')
  defaultProps(UncontrolledSlide, { defaultOpen: false, tag: 'div' })
  renderChild(UncontrolledSlide, child, 'p')
  customTag(UncontrolledSlide, 'a', 'a')
  displayName(UncontrolledSlide, 'xbrick.UncontrolledSlide')
  
  it('should ignore props of to, from', () => {
    const otherTo = { to: 'to' }
    const otherFrom = { from: 'from' }
    const slideup = mount(<UncontrolledSlide to={otherTo} from={otherFrom}/>)
    const props: any = slideup.find(Animate).props()
    expect(props.to === otherTo).toBe(false)
    expect(props.form === otherFrom).toBe(false)
  })

  it('should pass down slideup and slidedown method to children', () => {
    mount((
      <UncontrolledSlide>{
        (props: any) => {
          expect(!!props.slideup).toBe(true)
          expect(!!props.slideup.call).toBe(true)
          expect(!!props.slidedown).toBe(true)
          expect(!!props.slidedown.call).toBe(true)
          return <div>test</div>
        }
      }</UncontrolledSlide>
    ))
  })

  it('should be slide up when children call slideup', (next) => {
    const afterStateChange = (show: boolean) => {
      expect(show).toBe(false)
      next()
    }
    const slide = mount((
      <UncontrolledSlide defaultOpen={true} afterStateChange={afterStateChange}>
      {(props: any) => <p onClick={() => props.slideup()}>text</p>}
      </UncontrolledSlide>
    ))
    slide.find('p').simulate('click')
  })

  it('should be slide down when children call slidedown', (next) => {
    const afterStateChange = (show: boolean) => {
      expect(show).toBe(true)
      next()
    }
    const slide = mount((
      <UncontrolledSlide afterStateChange={afterStateChange}>
      {(props: any) => <p onClick={() => props.slidedown()}>text</p>}
      </UncontrolledSlide>
    ))
    slide.find('p').simulate('click')
  })
})
