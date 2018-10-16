基本用法

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Collapse, Button, Card, CardHeader, CardBody } from 'xbrick'
import 'xbrick/lib/style/index.css'

class Accordion extends React.Component {
  state = {
    first: true,
    second: false,
    last: false,
  }

  toggle = (key) => {
    const last = this.state[key]
    this.setState({
      first: false,
      second: false,
      last: false,
      [key]: !last,
    })
  }

  render () {
    return (
      <div className="accordion">
        <Card>
          <CardHeader><a href="#" onClick={(e) => {
            e.preventDefault()
            this.toggle('first')
          }}>Collapsible Group Item #1</a></CardHeader>
          <Collapse open={this.state.first}>
            <CardBody>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid.
              3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
              Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica,
              craft beer labore wes anderson cred nesciunt sapiente ea proident.
              Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
              raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </CardBody>
          </Collapse>
        </Card>
        <Card>
          <CardHeader><a href="#" onClick={(e) => {
            e.preventDefault()
            this.toggle('second')
          }}>Collapsible Group Item #2</a></CardHeader>
          <Collapse open={this.state.second}>
            <CardBody>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid.
              3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
              Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica,
              craft beer labore wes anderson cred nesciunt sapiente ea proident.
              Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
              raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </CardBody>
          </Collapse>
        </Card>
        <Card>
          <CardHeader><a href="#" onClick={(e) => {
            e.preventDefault()
            this.toggle('last')
          }}>Collapsible Group Item #3</a></CardHeader>
          <Collapse open={this.state.last}>
            <CardBody>
              Anim pariatur cliche reprehenderit,
              enim eiusmod high life accusamus terry richardson ad squid.
              3 wolf moon officia aute, non cupidatat skateboard dolor brunch.
              Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
              sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica,
              craft beer labore wes anderson cred nesciunt sapiente ea proident.
              Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
              raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </CardBody>
          </Collapse>
        </Card>
      </div>
    )
  }
}

ReactDOM.render(
  <Accordion />
, document.getElementById('root'))
````
