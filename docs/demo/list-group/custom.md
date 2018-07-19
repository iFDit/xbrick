自定义布局

````jsx
import { ListGroup, ListGroupItem, Row, Col } from 'xbrick'

ReactDOM.render(
  <ListGroup>
    <ListGroupItem tag="a" href="#" action active>
      <Row xs={{justify: 'between'}}>
        <h5 className="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </Row>
      <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small>Donec id elit non mi porta.</small>
    </ListGroupItem>
    <ListGroupItem tag="a" href="#" action>
      <Row xs={{justify: 'between'}}>
        <h5 className="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </Row>
      <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small>Donec id elit non mi porta.</small>
    </ListGroupItem>
    <ListGroupItem tag="a" href="#" action>
      <Row xs={{justify: 'between'}}>
        <h5 className="mb-1">List group item heading</h5>
        <small>3 days ago</small>
      </Row>
      <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
      <small>Donec id elit non mi porta.</small>
    </ListGroupItem>
  </ListGroup>
, rootNode)
````