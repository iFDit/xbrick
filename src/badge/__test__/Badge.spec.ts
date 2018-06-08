import * as React from 'react'
import { mount } from 'enzyme'
import { Badge } from 'src/badge/Badge'

describe('Badge', () => {
  const a = React.createFactory<any>('a')
  const BadgeFactory = React.createFactory<any>(Badge)
  const indicate = React.createElement('span', null, 'test span')

  it('should render badge correct', () => {
    const badge = mount(BadgeFactory())
    expect(badge.find('span').hasClass('badge'))
    expect(badge.find('span').hasClass('badge-primary'))
  })

  it('should have default props', () => {
    const defaultProps = {
      bstype: 'primary',
      tag: 'span',
      pill: false,
      link: false,
      top: false,
      count: 0,
      maxCount: 99,
    }
    const badge = mount(BadgeFactory())
    expect(badge.prop('bstype')).toBe(defaultProps.bstype)
    expect(badge.prop('tag')).toBe(defaultProps.tag)
    expect(badge.prop('pill')).toBe(defaultProps.pill)
    expect(badge.prop('link')).toBe(defaultProps.link)
    expect(badge.prop('top')).toBe(defaultProps.top)
    expect(badge.prop('count')).toBe(defaultProps.count)
    expect(badge.prop('maxCount')).toBe(defaultProps.maxCount)
  })

  it('should pass down other props', () => {
    let flag = false
    const other = {
      style: { color: 'red' },
      className: 'pass-down',
      'data-test': 'test',
      onClick: () => flag = true,
    }
    const badge = mount(BadgeFactory(other))
    expect(badge.render().css('color')).toBe('red')
    expect(badge.hasClass('pass-down')).toBe(true)
    expect(badge.render().attr('data-test')).toBe('test')
    badge.simulate('click')
    expect(flag).toBe(true)
  })

  it('should render correct children when props.top is false', () => {
    const badge = mount(BadgeFactory(null, a(null, 'text')))
    expect(badge.find('span').hostNodes().length).toBe(1)
    expect(badge.find('span').hostNodes().text()).toBe('text')
  })

  it('should not render children inner when props.top is true', () => {
    const badge = mount(BadgeFactory({ top: true }, a(null, 'text')))
    expect(badge.find('.badge a').hostNodes().length).toBe(0)
  })

  it('should render link element when props.link is true', () => {
    const badge = mount(BadgeFactory({ link: true}))
    expect(badge.find('a').hostNodes().length).toBe(1)
    expect(badge.find('a').render().attr('href')).toBe('#')
  })

  it('can render custom tag', () => {
    const badge = mount(BadgeFactory({ tag: 'span' }))
    expect(badge.find('span').hostNodes().length).toBe(1)
  })

  it('should render ellipse badge when props.pill is true', () => {
    const badge = mount(BadgeFactory({ pill: true }))
    expect(badge.find('span').hasClass('badge-pill')).toBe(true)
  })

  it('should add badge-top to className when props.top is true', () => {
    const badge = mount(BadgeFactory({ top: true }))
    expect(badge.find('span.badge-top').hostNodes().length).toBe(1)
  })

  it('should render correct count when props.top is true', () => {
    const badge = mount(BadgeFactory({ top: true, count: 10 }))
    expect(badge.find('span.badge').text()).toBe('10')
  })

  it('should ignore count or maxCount when props.top is false', () => {
    const badge = mount(BadgeFactory({ count: 5, maxCount: 10 }, a(null, '15')))
    expect(badge.find('a').text()).toBe('15')
  })

  it('should render correct text when props.maxCount is be set', () => {
    const badge = mount(BadgeFactory({ top: true, maxCount: 10, count: 15 }, indicate))
    expect(badge.find('span.badge').text()).toBe('10+')
  })
})