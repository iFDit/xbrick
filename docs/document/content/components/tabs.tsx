import React from 'react'
import { Col } from 'xbrick'
import { Tab, TabContent, Nav, NavItem, NavLink } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/tabs/basic.md'

// API
import api from 'src/tabs/tab.md'
import contentapi from 'src/tabs/tab-content.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function TabsContent() {
  return new Content('Tabs')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Tab组件可以方便的在不同的视图间浏览和切换</p>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: '',
      content: (
        <Examples/>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addAPI({
      header: true,
      title: 'Tab',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'TabContent',
      content: getTableFromString(converter.makeHtml(contentapi)),
    })
    .render()
}

class Examples extends React.Component {

  public state = {
    tab1: true,
    tab2: false,
    tab3: false,
  }

  public open = (tab: string) => {
    const keys = Object.keys(this.state)
    keys.forEach(key => this.setState({ [key]: false }))
    this.setState({ [tab]: true })
  }

  render () {
    return (
      <Tab>
        <Nav tab>
          <NavItem>
            <NavLink href="#" active={this.state.tab1} onClick={(e: any) => {
              e.preventDefault()
              this.open('tab1')
            }}>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" active={this.state.tab2} onClick={(e: any) => {
              e.preventDefault()
              this.open('tab2')
            }}>Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" active={this.state.tab3} onClick={(e: any) => {
              e.preventDefault()
              this.open('tab3')
            }}>Contact</NavLink>
          </NavItem>
        </Nav>
        <TabContent open={this.state.tab1} key={`${this.state.tab1}-1`}>
          Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam.
          Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim.
          Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat.
          Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit.
          Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore.
          Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
        </TabContent>
        <TabContent open={this.state.tab2} key={`${this.state.tab2}-2`}>
          Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit.
          Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitatio
          n velit laboris fugiat cupidatat.
          Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi.
          Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit.
          Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.
        </TabContent>
        <TabContent open={this.state.tab3} key={`${this.state.tab3}-3`}>
          Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do.
          Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim cupidatat.
          Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor.
          Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim.
          Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore.
          Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet.
          Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat.
          Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna.
        </TabContent>
      </Tab>
    )
  }
}