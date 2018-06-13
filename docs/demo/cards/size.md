卡片大小

可以通过自定义样式或者使用bootstrap布局类来修改卡片的大小。

````jsx
import { Card, CardBody, CardTitle, CardText, Button } from 'xbrick'

ReactDOM.render(
  <>
    <Card className="w-75">
      <CardBody>
        <CardTitle>Title</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Detail</Button>
      </CardBody>
    </Card>
    <Card className="w-50">
      <CardBody>
        <CardTitle>Title</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Detail</Button>
      </CardBody>
    </Card>
    <Card style={{width: '18rem'}}>
      <CardBody>
        <CardTitle>Title</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Detail</Button>
      </CardBody>
    </Card>
  </>
, rootNode)
````
