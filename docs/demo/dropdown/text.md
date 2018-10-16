
````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { DropdownItem, DropdownMenu } from 'xbrick'
import 'xbrick/lib/style/index.css'

ReactDOM.render(
  <DropdownMenu open={true} style={{position: 'static', width: 200}} className="p-4">
    <p>
      Some example text that's free-flowing within the dropdown menu.
    </p>
    <p className="mb-0">
      And this is more example text.
    </p>
  </DropdownMenu>
, document.getElementById('root'))
````
