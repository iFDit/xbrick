import * as React from 'react'
import { Collapse, Card, CardHeader, CardBody } from 'xbrick'

class Pannel extends React.Component {
  public state = {
    show: false,
  }
  public toggle: any

  render() {
    const { show } = this.state
    return (
      <Card>
        <CardHeader onClick={() => this.toggle()}>header</CardHeader>
        <Collapse show={show} afterAnimate={(s) => this.setState({ show: s })}>
          {({ slideup, slidedown }) => {
            this.toggle = show ? slideup : slidedown
            return (
              <CardBody>
                Anim pariatur cliche reprehenderit, 
                enim eiusmod high life accusamus terry richardson ad squid.
                3 wolf moon officia aute, 
                non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
                Brunch 3 wolf moon tempor, 
                sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. 
                Nihil anim keffiyeh helvetica, 
                craft beer labore wes anderson cred nesciunt sapiente ea proident. 
                Ad vegan excepteur butcher vice lomo. 
                Leggings occaecat craft beer farm-to-table, 
                raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </CardBody>
            )
          }}
        </Collapse>
      </Card>
    )
  }
}

const Example = () => {
  return (
    <Pannel />
  )
}

export default Example
