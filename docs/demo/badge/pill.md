展示圆角的徽标。

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
  PILL,
} = BadgeStyles

ReactDOM.render(
  <div>
    <Badge className={`${BADGE} ${PRIMARY} ${PILL}`}>primary</Badge>
    <Badge className={`${BADGE} ${SECONDARY} ${PILL}`}>Secondary</Badge>
    <Badge className={`${BADGE} ${WARNING} ${PILL}`}>Warning</Badge>
    <Badge className={`${BADGE} ${SUCCESS} ${PILL}`}>Success</Badge>
    <Badge className={`${BADGE} ${DANGER} ${PILL}`}>Danger</Badge>
    <Badge className={`${BADGE} ${INFO} ${PILL}`}>Info</Badge>
    <Badge className={`${BADGE} ${LIGHT} ${PILL}`}>Light</Badge>
    <Badge className={`${BADGE} ${DARK} ${PILL}`}>Dark</Badge>
  </div>
, document.getElementById('root'))
````
