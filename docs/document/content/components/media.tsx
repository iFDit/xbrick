import React from 'react'
import { Col } from 'xbrick'
import { Media, MediaObject, MediaBody  } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/media/basic.md'
import nesting from 'docs/demo/media/nesting.md'
import alignment from 'docs/demo/media/alignment.md'

// API
import api from 'src/media/media.md'
import bodyapi from 'src/media/media-body.md'
import objectapi from 'src/media/media-object.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function MediaContent() {
  return new Content('Media')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Nesting', anchor: 'nesting' })
    .addNav({ text: 'Alignment', anchor: 'alignment' })
    .addNav({ text: 'Links', anchor: 'links' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Media组件可以创建一个包含图片或视频的媒体对象，以及相关内容的条目。例如：博客的评论。</p>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: '',
      content: (
        <Media>
          <MediaObject>
            <img className="mr-3" src={imgSrc.replace(/[\r\n]/g, '')} />
          </MediaObject>
          <MediaBody>
              <h5 className="mt-0">Media heading</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
              Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
              Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </MediaBody>
        </Media>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Nesting',
      describe: <p>嵌套的Media组件。</p>,
      content: (
        <Media>
        <MediaObject>
          <img className="mr-3" src={imgSrc.replace(/[\r\n]/g, '')}/>
        </MediaObject>
        <MediaBody>
            <h5 className="mt-0">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            <Media>
              <MediaObject>
                <img className="mr-3" src={imgSrc.replace(/[\r\n]/g, '')}/>
              </MediaObject>
              <MediaBody>
                  <h5 className="mt-0">Media heading</h5>
                  Cras sit amet nibh libero, in gravida nulla.
                  Nulla vel metus scelerisque ante sollicitudin. Cras purus odio,
                  vestibulum in vulputate at, tempus viverra turpis.
                  Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </MediaBody>
            </Media>
        </MediaBody>
      </Media>
      ),
      codeText: getCodeFromString(converter.makeHtml(nesting)),
    })
    .addSection({
      title: 'Alignment',
      describe: <p>MediaObject组件可以通过align属性来设置垂直对齐方式。</p>,
      content: (
        <Media>
        <MediaObject align="center">
          <img className="mr-3" src={imgSrc.replace(/[\r\n]/g, '')}/>
        </MediaObject>
        <MediaBody>
          <MediaBody>
            <h5 className="mt-0">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla.
            Nulla vel metus scelerisque ante sollicitudin.
            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
            Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </MediaBody>
        </MediaBody>
      </Media>
      ),
      codeText: getCodeFromString(converter.makeHtml(alignment)),
    })
    .addAPI({
      header: true,
      title: 'Media',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'MediaBody',
      content: getTableFromString(converter.makeHtml(bodyapi)),
    })
    .addAPI({
      title: 'MediaObject',
      content: getTableFromString(converter.makeHtml(objectapi)),
    })
    .render()
}

const imgSrc = `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20
height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20view
Box%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3
Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164b1dfbd30%20text%20%7B%20fill%
3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetic
a%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%2
0id%3D%22holder_164b1dfbd30%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%
22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.84375%22%2
0y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E`