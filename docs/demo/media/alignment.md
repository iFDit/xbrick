`MediaObject`组件垂直布局

````jsx
import { Media, MediaObject, MediaBody } from 'xbrick'

ReactDOM.render(
  <Media>
    <MediaObject align="center">
      <img src="example.jpg" />
    </MediaObject>
    <MediaBody>
      <MediaBody>
        <h5 class="mt-0">Media heading</h5>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </MediaBody>
    </MediaBody>
  </Media>
, rootNode)
````
