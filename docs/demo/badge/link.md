设置`link = true`将徽标变成一个链接。

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Badge, BadgeStyles } from 'xbrick'
import 'xbrick/lib/style/index.css'

const {
  BADGE,
  PRIMARY,
  SECONDARY,
  SUCCESS,
  DANGER,
  WARNING,
  INFO,
  LIGHT,
  DARK,
} = BadgeStyles

ReactDOM.render(
  <div>
    <Badge className={`${BADGE} ${PRIMARY}`} tag="a" href="#">primary</Badge>
    <Badge className={`${BADGE} ${SECONDARY}`} tag="a" href="#">Secondary</Badge>
    <Badge className={`${BADGE} ${WARNING}`} tag="a" href="#">Warning</Badge>
    <Badge className={`${BADGE} ${SUCCESS}`} tag="a" href="#">Success</Badge>
    <Badge className={`${BADGE} ${DANGER}`} tag="a" href="#">Danger</Badge>
    <Badge className={`${BADGE} ${INFO}`} tag="a" href="#">Info</Badge>
    <Badge className={`${BADGE} ${LIGHT}`} tag="a" href="#">Light</Badge>
    <Badge className={`${BADGE} ${DARK}`} tag="a" href="#">Dark</Badge>
  </div>
, document.getElementById('root'))
````
