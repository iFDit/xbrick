import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ButtonGroup, buttonGroupClass } from 'src/buttons/ButtonGroup'
import { notCrash, renderChild, customTag, defaultTag, defaultProps, displayName } from 'test/basic'

Enzyme.configure({ adapter: new Adapter() })

const size = {
  large: 'lg',
  small: 'sm',
}

describe('ButtonGroup', () => {
  const child = <p>111</p>
  notCrash(ButtonGroup)
  defaultTag(ButtonGroup, 'div')
  defaultProps(ButtonGroup, { tag: 'div', size: 'middle', vertical: false })
  renderChild(ButtonGroup, child, 'p')
  customTag(ButtonGroup, 'span', 'span')
  displayName(ButtonGroup, 'xbrick.ButtonGroup')

  it('should change Button size by using size props', () => {
    const node = mount(<ButtonGroup>1</ButtonGroup>)
    Object.keys(size).forEach(s => {
      node.setProps({ size: s })
      expect(node.find('div').hasClass(`btn-group-${size[s]}`)).toBe(true)
    })
  })

  it('should be render vertical styles by using vertical props', () => {
    const node = mount(<ButtonGroup vertical>vertical</ButtonGroup>)
    expect(node.find('div').hasClass('btn-group-vertical')).toBe(true)
  })

  describe('buttonGroupClass', () => {
    it('should create default className', () => {
      const classnameTest = (classnames: string[], testClass: string[]) => {
        classnames.forEach(name => {
          expect(testClass.includes(name)).toBe(true)
        })
      }
      expect(buttonGroupClass()).toBe('btn-group')
      const baseClass = ['btn-group', 'test']
      classnameTest(baseClass, buttonGroupClass({className: 'test'}).split(' '))
      classnameTest(
        baseClass.concat(['btn-group-sm']),
        buttonGroupClass({className: 'test', size: 'small' }).split(' '),
      )
      classnameTest(
        baseClass.concat(['btn-group-lg']),
        buttonGroupClass({className: 'test', size: 'large' }).split(' '),
      )
      classnameTest(
        ['btn-group-vertical', 'test'],
        buttonGroupClass({className: 'test', vertical: true }).split(' '),
      )
    })
  })
})
