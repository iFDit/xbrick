头部和脚部信息

通过 `CardHeader` 和 `CardFooter` 来展示卡片的头部和脚部信息。

````jsx
import { Card, CardBody, CardTitle, CardText, CardHeader, CardFooter, Button } from 'xbrick'

ReactDOM.render(
  <Card>
    <CardHeader>Header</CardHeader>
    <CardBody>
      <CardTitle>Special Title Treatment</CardTitle>
      <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
      <Button>Go somewhere</Button>
    </CardBody>
    <CardFooter>footer</CardFooter>
  </Card>
, rootNode)
````