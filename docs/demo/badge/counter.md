
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Badge, BadgeStyles } from 'xbrick'
import 'xbrick/lib/style/index.css'

const {
  BADGE,
  LIGHT,
} = BadgeStyles

ReactDOM.render(
  <Button>Messages<Badge className={`${BADGE} ${LIGHT}`}>8</Badge></Button>
, document.getElementById('root'))
````
