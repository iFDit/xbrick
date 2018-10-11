
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Nav, NavItem, NavLink, TabContent, Button } from 'xbrick'
import { Card, CardTitle, CardText, CardBody, CardHeader, CardHeaderStyle } from 'xbrick'
import 'xbrick/lib/style/index.css'

class CardTab extends React.Component {
  state = {
    current: 'Active',
  }

  handleClick = (type: string) => (e: MouseEvent) => {
    e.preventDefault()
    this.setState({
      current: type,
    })
  }

  render () {
    const { current } = this.state 
    return (
      <Card>
        <CardHeader>
          <Nav tab className={CardHeaderStyle.headerTab}>
            <NavItem><NavLink active={current === 'Active'} href="#" onClick={this.handleClick('Active')}>Active</NavLink></NavItem>
            <NavItem><NavLink active={current === 'Link'} href="#" onClick={this.handleClick('Link')}>Link</NavLink></NavItem>
            <NavItem><NavLink disabled>Disabled</NavLink></NavItem>
          </Nav>
        </CardHeader>
        <CardBody>
          <TabContent open={current === 'Active'} key={`${current}-1`}>
            <CardTitle>Special title treatment in Active</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </TabContent>
          <TabContent open={current === 'Link'} key={`${current}-2`}>
            <CardTitle>Special title treatment in Link</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
            <Button>Go somewhere</Button>
          </TabContent>
        </CardBody>
      </Card>
    )
  }
}

ReactDOM.render(
  <CardTab />
, document.getElementById('root'))
````
