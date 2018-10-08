import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { UncontrolledSlideUp } from 'src/animate/UncontrolledSlideUp'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

describe('UncontrolledSlideUp', () => {
  const child = () => <p>111</p>
  notCrash(UncontrolledSlideUp)
  defaultTag(UncontrolledSlideUp, 'div')
  defaultProps(UncontrolledSlideUp, { defaultActive: false, trigger: 'active', tag: 'div' })
  renderChild(UncontrolledSlideUp, child, 'p')
  customTag(UncontrolledSlideUp, 'a', 'a')
  displayName(UncontrolledSlideUp, 'xbrick.UncontrolledSlideUp')

  it('should pass down slideup method to children', () => {
    mount((
      <UncontrolledSlideUp>
        {(slideup: any) => {
          expect(!!slideup).toBe(true)
          expect(!!slideup.call).toBe(true)
          return <div>test</div>
        }}
      </UncontrolledSlideUp>
    ))
  })

  it('should be slide up when children call slidedown', (next) => {
    const afterStateChange = () => next()
    const slide = mount((
      <UncontrolledSlideUp afterStateChange={afterStateChange}>
        {(slideup: any) => <p onClick={() => slideup()}>test</p>}
      </UncontrolledSlideUp>
    ))
    slide.find('p').simulate('click')
  })
})
