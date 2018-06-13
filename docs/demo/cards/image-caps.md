图片

可以在卡片中嵌套图片, 或者使用图片覆盖卡片。

````jsx
import { Card, CardImg, CardBody, CardText, CardTitle } from 'xbrick'

ReactDOM.render(
  <>
    <Card>
      <CardImg src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22635%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20635%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163ef269385%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A32pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163ef269385%22%3E%3Crect%20width%3D%22635%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22235.6640625%22%20y%3D%22104.4%22%3E635x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
      <CardBody>
        <CardTitle>Title</CardTitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </CardText>
        <CardText>
          <small className="text-muted">Last updated 3 mins ago</small>
        </CardText>
      </CardBody>
    </Card>
    <Card>
      <CardImg top={false} src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22635%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20635%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163ef269385%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A32pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163ef269385%22%3E%3Crect%20width%3D%22635%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22235.6640625%22%20y%3D%22104.4%22%3E635x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
      <CardBody>
        <CardTitle>Title</CardTitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </CardText>
        <CardText>
          <small className="text-muted">Last updated 3 mins ago</small>
        </CardText>
      </CardBody>
    </Card>
    <Card inverse>
      <CardImg src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22635%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20635%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163ef269385%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A32pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163ef269385%22%3E%3Crect%20width%3D%22635%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22235.6640625%22%20y%3D%22104.4%22%3E635x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
      <CardBody overlay>
        <CardTitle>Title</CardTitle>
        <CardText>
          This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
        </CardText>
        <CardText>
          <small className="text-muted">Last updated 3 mins ago</small>
        </CardText>
      </CardBody>
    </Card>
  </>
, rootNode)
````
