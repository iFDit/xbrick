import React from 'react'
import { Col, Button } from 'xbrick'
import { ListGroup, ListGroupItem  } from 'xbrick'
import { CardGroup, CardDeck, CardColumns } from 'xbrick'
import { Card, CardTitle, CardBody, CardText, CardImg, CardLink, CardHeader, CardFooter } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import base from 'docs/demo/cards/basic.md'
import mixContent from 'docs/demo/cards/mix-multiple-content.md'
import append from 'docs/demo/cards/append.md'
import size from 'docs/demo/cards/size.md'
import listgroup from 'docs/demo/cards/list-group.md'
import align from 'docs/demo/cards/align.md'
import backgound from 'docs/demo/cards/backgound.md'
import border from 'docs/demo/cards/border.md'
import group from 'docs/demo/cards/group.md'
import deck from 'docs/demo/cards/deck.md'
import columns from 'docs/demo/cards/columns.md'

// API
import cardapi from 'src/cards/card.md'
import headerapi from 'src/cards/card-header.md'
import bodyapi from 'src/cards/card-body.md'
import titleapi from 'src/cards/card-title.md'
import imgapi from 'src/cards/card-img.md'
import linkapi from 'src/cards/card-link.md'
import textapi from 'src/cards/card-text.md'
import footerapi from 'src/cards/card-footer.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function CardContent() {
  return new Content('Card 卡片')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Mix multiple content', anchor: 'mix-multiple-content' })
    .addNav({ text: 'Sizing', anchor: 'sizing' })
    .addNav({ text: 'List groups', anchor: 'list-groups' })
    .addNav({ text: 'Header and footer', anchor: 'header-and-footer' })
    .addNav({ text: 'Text alignment', anchor: 'text-alignment' })
    .addNav({ text: 'Navigation', anchor: 'navigation' })
    .addNav({ text: 'Background and color', anchor: 'background-and-color' })
    .addNav({ text: 'Border', anchor: 'border' })
    .addNav({ text: 'Card groups', anchor: 'card-groups' })
    .addNav({ text: 'Card decks', anchor: 'card-decks' })
    .addNav({ text: 'Card columns', anchor: 'card-columns' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Card组件通常用于展示一个主题下的相关内容和动作，例如：带标题的照片。</p>
          <p>使用：</p>
          <ul>
            <li>由不同数据类型组成的集合，例如图片、视频、文本。</li>
            <li>不需要直接进行对比（用户不会直接与图片或文本进行比较）。</li>
            <li>包含可变长度的内容，例如评论。</li>
            <li>包含交互性的内容，例如 +1按钮或评论。</li>
          </ul>
          <p>不使用：</p>
          <ul>
            <li>图片展示应该使用网格列表。</li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: '',
      content: (
        <Card style={{width: '18rem'}}>
          <CardBody>
            <CardTitle>Word of the Day</CardTitle>
            <CardText>
              "a benevolent smile".
            </CardText>
            <Button bstype="light" size="small" outline style={{color: '#000', fontWeight: 500}}>LEARN MORE</Button>
          </CardBody>
        </Card>
      ),
      codeText: getCodeFromString(converter.makeHtml(base)),
    })
    .addSection({
      title: 'Mix multiple content',
      describe: '',
      content: (
        <Card style={{width: '18rem'}}>
          <CardImg src={imageSrc.replace(/[\r\n]/g, '')} />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
          </CardBody>
          <ListGroup flush>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <CardBody>
            <CardLink href="#">Card link</CardLink>
            <CardLink href="#">Another link</CardLink>
          </CardBody>
        </Card>
      ),
      codeText: getCodeFromString(converter.makeHtml(mixContent)),
    })
    .addSection({
      title: 'Header and footer',
      describe: '',
      content: (
        <Card>
          <CardHeader>
            Featured
          </CardHeader>
          <CardBody>
            <CardTitle>Special title treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <CardLink href="#">Go somewhere</CardLink>
          </CardBody>
          <CardFooter>2 days ago</CardFooter>
        </Card>
      ),
      codeText: getCodeFromString(converter.makeHtml(append)),
    })
    .addSection({
      title: 'Sizing',
      describe: '',
      content: (
        <>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle>Special title treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional content.
                </CardText>
                <CardLink href="#">Go somewhere</CardLink>
              </CardBody>
            </Card>
          </Col>
          <Col sm="6">
            <Card>
              <CardBody>
                <CardTitle>Special title treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional content.
                </CardText>
                <CardLink href="#">Go somewhere</CardLink>
              </CardBody>
            </Card>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(size)),
    })
    .addSection({
      title: 'List groups',
      describe: '',
      content: (
        <Card style={{width: '18rem'}}>
          <CardHeader>Featured</CardHeader>
          <ListGroup flush>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
        </Card>
      ),
      codeText: getCodeFromString(converter.makeHtml(listgroup)),
    })
    .addSection({
      title: 'Text alignment',
      describe: '',
      content: (
        <>
          <Col xs="12">
            <Card style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Special title treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>detail</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card align="center" style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Special title treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>detail</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card align="right" style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Special title treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <Button>detail</Button>
              </CardBody>
            </Card>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(align)),
    })
    .addSection({
      title: 'Navigation',
      describe: '',
      content: <p>todo</p>,
      // codeText: getCodeFromString(converter.makeHtml(align)),
    })
    .addSection({
      title: 'Background and color',
      describe: '',
      content: (
        <>
          <Col xs="12">
            <Card bstype="primary" inverse style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Primary card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="secondary" inverse style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Secondary card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="success" inverse style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Success card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="danger" inverse style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Danger card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="warning" inverse style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Warning card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="info" inverse style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Info card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="light" style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Light card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="dark" inverse style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Dark card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(backgound)),
    })
    .addSection({
      title: 'Border',
      describe: '',
      content: (
        <>
          <Col xs="12">
            <Card bstype="primary" outline style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Primary card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="secondary" outline style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Secondary card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="success" outline style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Success card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="danger" outline style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Danger card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="warning" outline style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Warning card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="info" outline style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Info card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="light" outline style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Light card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12">
            <Card bstype="dark" outline style={{width: '18rem'}}>
              <CardBody>
                <CardTitle>Dark card title</CardTitle>
                <CardText>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(border)),
    })
    .addSection({
      title: 'Card groups',
      describe: '',
      content: (
        <CardGroup>
          <Card>
            <CardBody>
              <CardTitle>title</CardTitle>
              <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>title</CardTitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>title</CardTitle>
              <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(group)),
    })
    .addSection({
      title: 'Card decks',
      describe: '',
      content: (
        <CardDeck>
          <Card>
            <CardBody>
              <CardTitle>title</CardTitle>
              <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>title</CardTitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>title</CardTitle>
              <CardText>
              This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
              </CardText>
            </CardBody>
          </Card>
        </CardDeck>
      ),
      codeText: getCodeFromString(converter.makeHtml(deck)),
    })
    .addSection({
      title: 'Card columns',
      describe: '',
      content: (
        <CardColumns>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>content</CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
            </CardBody>
          </Card>
          <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
            </CardBody>
          </Card>
          <Card inverse bstype="primary">
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          </Card>
      </CardColumns>
      ),
      codeText: getCodeFromString(converter.makeHtml(columns)),
    })
    .addAPI({
      header: true,
      title: 'Card',
      content: getTableFromString(converter.makeHtml(cardapi)),
    })
    .addAPI({
      title: 'CardHeader',
      content: getTableFromString(converter.makeHtml(headerapi)),
    })
    .addAPI({
      title: 'CardBody',
      content: getTableFromString(converter.makeHtml(bodyapi)),
    })
    .addAPI({
      title: 'CardTitle',
      content: getTableFromString(converter.makeHtml(titleapi)),
    })
    .addAPI({
      title: 'CardImg',
      content: getTableFromString(converter.makeHtml(imgapi)),
    })
    .addAPI({
      title: 'CardLink',
      content: getTableFromString(converter.makeHtml(linkapi)),
    })
    .addAPI({
      title: 'CardText',
      content: getTableFromString(converter.makeHtml(textapi)),
    })
    .addAPI({
      title: 'CardFooter',
      content: getTableFromString(converter.makeHtml(footerapi)),
    })
    .render()
}

const imageSrc = `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height
%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200
%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22te
xt%2Fcss%22%3E%23holder_1650f187ce8%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%
3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%
7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1650f187ce8%22%3E%3Crect%20width
%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%
20x%3D%2299.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%
2Fsvg%3E`
