不同颜色的徽标。

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
    <Badge className={`${BADGE} ${PRIMARY}`}>primary</Badge>
    <Badge className={`${BADGE} ${SECONDARY}`}>Secondary</Badge>
    <Badge className={`${BADGE} ${WARNING}`}>Warning</Badge>
    <Badge className={`${BADGE} ${SUCCESS}`}>Success</Badge>
    <Badge className={`${BADGE} ${DANGER}`}>Danger</Badge>
    <Badge className={`${BADGE} ${INFO}`}>Info</Badge>
    <Badge className={`${BADGE} ${LIGHT}`}>Light</Badge>
    <Badge className={`${BADGE} ${DARK}`}>Dark</Badge>
  </div>
, document.getElementById('root'))
````