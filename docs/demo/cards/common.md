一般卡片

包括标题/副标题，文本和链接。

````jsx
import { Card, CardBody, CardText, CardTitle, CardLink } from 'xbrick'

ReactDOM.render(
  <Card>
    <CardBody>
      <CardTitle>Title</CardTitle>
      <CardTitle subtitle>subTitle</CardTitle>
      <CardText>
        Some quick example text to build on the card title and make up the bulk of the card's content.M
      </CardText>
      <CardLink>Card link</CardLink>
      <CardLink>Another link</CardLink>
    </CardBody>
  </Card>
, rootNode)
````
