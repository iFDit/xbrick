import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'xbrick'
import { Dropdown, SplitDropdown } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/dropdown/basic.md'
import split from 'docs/demo/dropdown/split.md'
import size from 'docs/demo/dropdown/size.md'
import dropup from 'docs/demo/dropdown/dropup.md'
import dropright from 'docs/demo/dropdown/dropright.md'
import dropleft from 'docs/demo/dropdown/dropleft.md'
import alignment from 'docs/demo/dropdown/alignment.md'
import headers from 'docs/demo/dropdown/headers.md'
import dividers from 'docs/demo/dropdown/dividers.md'
import text from 'docs/demo/dropdown/text.md'
import forms from 'docs/demo/dropdown/forms.md'

// API
import api from 'src/dropdowns/dropdown.md'
import toggleApi from 'src/dropdowns/dropdown-toggle.md'
import menuApi from 'src/dropdowns/dropdown-menu.md'
import itemApi from 'src/dropdowns/dropdown-item.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function DropdownContent() {
  return new Content('Dropdown')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Split button', anchor: 'split-button' })
    .addNav({ text: 'Sizing', anchor: 'sizing' })
    .addNav({ text: 'Dropup', anchor: 'dropup' })
    .addNav({ text: 'Dropright', anchor: 'dropright' })
    .addNav({ text: 'Dropleft', anchor: 'dropleft' })
    .addNav({ text: 'Menu alignment', anchor: 'menu-alignment' })
    .addNav({ text: 'Menu Headers', anchor: 'menu-headers' })
    .addNav({ text: 'Menu Dividers', anchor: 'menu-dividers' })
    .addNav({ text: 'Menu Text', anchor: 'menu-text' })
    .addNav({ text: 'Menu Forms', anchor: 'menu-forms' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Dropdown组件通常用来简化设计，对用户只展示被选中的内容，当用户点击下拉时可以看到所有的选项。</p>
          <p>使用：</p>
          <ul>
            <li>在一个表单中需要展示7-15个可选项的时候，应该使用Dropdown。</li>
          </ul>
          <p>不使用：</p>
          <ul>
            <li>当可选项过多的时候, 例如：超过100项(选择国家), 应该用auto-complete。</li>
            <li>当选项过少的时候, 可以考虑用radio展示所有的信息。</li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: <p>按钮类型的Dropdown，Toggle组件可将size, color属性传递到Button中。</p>,
      content: (
        <Dropdown>
          <Dropdown.Toggle button color="secondary">
            Dropdown button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Split button',
      describe: <p>分割样式的下拉组件，可以设置不同的颜色。</p>,
      content: (
        <>
          <SplitDropdown className="mr-2 mb-2">
            <Button>primary</Button>
            <SplitDropdown.Toggle button split/>
            <SplitDropdown.Menu>
              <SplitDropdown.Item>Action</SplitDropdown.Item>
              <SplitDropdown.Item>Another action</SplitDropdown.Item>
              <SplitDropdown.Item>Something else here</SplitDropdown.Item>
            </SplitDropdown.Menu>
          </SplitDropdown>
          <SplitDropdown className="mr-2 mb-2">
            <Button color="secondary">secondary</Button>
            <SplitDropdown.Toggle color="secondary" button split/>
            <SplitDropdown.Menu>
              <SplitDropdown.Item>Action</SplitDropdown.Item>
              <SplitDropdown.Item>Another action</SplitDropdown.Item>
              <SplitDropdown.Item>Something else here</SplitDropdown.Item>
            </SplitDropdown.Menu>
          </SplitDropdown>
          <SplitDropdown className="mr-2 mb-2">
            <Button color="success">success</Button>
            <SplitDropdown.Toggle color="success" button split/>
            <SplitDropdown.Menu>
              <SplitDropdown.Item>Action</SplitDropdown.Item>
              <SplitDropdown.Item>Another action</SplitDropdown.Item>
              <SplitDropdown.Item>Something else here</SplitDropdown.Item>
            </SplitDropdown.Menu>
          </SplitDropdown>
          <SplitDropdown className="mr-2 mb-2">
            <Button color="info">info</Button>
            <SplitDropdown.Toggle color="info" button split/>
            <SplitDropdown.Menu>
              <SplitDropdown.Item>Action</SplitDropdown.Item>
              <SplitDropdown.Item>Another action</SplitDropdown.Item>
              <SplitDropdown.Item>Something else here</SplitDropdown.Item>
            </SplitDropdown.Menu>
          </SplitDropdown>
          <SplitDropdown className="mr-2 mb-2">
            <Button color="warning">warning</Button>
            <SplitDropdown.Toggle color="warning" button split/>
            <SplitDropdown.Menu>
              <SplitDropdown.Item>Action</SplitDropdown.Item>
              <SplitDropdown.Item>Another action</SplitDropdown.Item>
              <SplitDropdown.Item>Something else here</SplitDropdown.Item>
            </SplitDropdown.Menu>
          </SplitDropdown>
          <SplitDropdown className="mr-2 mb-2">
            <Button color="danger">danger</Button>
            <SplitDropdown.Toggle color="danger" button split/>
            <SplitDropdown.Menu>
              <SplitDropdown.Item>Action</SplitDropdown.Item>
              <SplitDropdown.Item>Another action</SplitDropdown.Item>
              <SplitDropdown.Item>Something else here</SplitDropdown.Item>
            </SplitDropdown.Menu>
          </SplitDropdown>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(split)),
    })
    .addSection({
      title: 'Sizing',
      describe: <p>通过Toggle组件的size修改Dropdown的大小。</p>,
      content: (
        <>
          <Dropdown className="mr-2">
            <Dropdown.Toggle button color="secondary" size="large">
              Large button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mr-2">
            <Dropdown.Toggle button color="secondary">
              Middle button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mr-2">
            <Dropdown.Toggle button color="secondary" size="small">
              Small button
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Action</Dropdown.Item>
              <Dropdown.Item>Another action</Dropdown.Item>
              <Dropdown.Item>Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(size)),
    })
    .addSection({
      title: 'Dropup',
      describe: <p>设置direction属性改变下拉组件菜单展示的方向。</p>,
      content: (
        <Dropdown direction="up">
          <Dropdown.Toggle button color="secondary">
            Dropup
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
      codeText: getCodeFromString(converter.makeHtml(dropup)),
    })
    .addSection({
      title: 'Dropright',
      describe: <p>在Dropdown的右侧展开菜单。</p>,
      content: (
        <Dropdown direction="right">
          <Dropdown.Toggle button color="secondary">
            Dropright
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
      codeText: getCodeFromString(converter.makeHtml(dropright)),
    })
    .addSection({
      title: 'Dropleft',
      describe: <p>在Dropdown的左侧展开菜单。</p>,
      content: (
        <Dropdown direction="left">
          <Dropdown.Toggle button color="secondary">
            Dropleft
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
      codeText: getCodeFromString(converter.makeHtml(dropleft)),
    })
    .addSection({
      title: 'Menu alignment',
      describe: <p>在Menu组件中设置right属性来改变菜单的对齐方式。</p>,
      content: (
        <Dropdown>
          <Dropdown.Toggle button color="secondary">
            Right-aligned menu
          </Dropdown.Toggle>
          <Dropdown.Menu right>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
      codeText: getCodeFromString(converter.makeHtml(alignment)),
    })
    .addSection({
      title: 'Menu Headers',
      describe: <p>Item组件设置header属性让其变成一个标题。</p>,
      content: (
        <Dropdown.Menu open={true} style={{position: 'static', zIndex: 1}}>
          <Dropdown.Item header>Dropdown header</Dropdown.Item>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
        </Dropdown.Menu>
      ),
      codeText: getCodeFromString(converter.makeHtml(headers)),
    })
    .addSection({
      title: 'Menu Dividers',
      describe: <p>设置divider属性让Item组件变成分隔符</p>,
      content: (
        <Dropdown.Menu open={true} style={{position: 'static'}}>
          <Dropdown.Item header>Dropdown header</Dropdown.Item>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Item divider/>
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      ),
      codeText: getCodeFromString(converter.makeHtml(dividers)),
    })
    .addSection({
      title: 'Menu Text',
      describe: <p>Menu中除了展示Item以外，还能展示文本内容。</p>,
      content: (
        <Dropdown.Menu open={true} style={{position: 'static', width: 200}} className="p-4">
          <p>
            Some example text that's free-flowing within the dropdown menu.
          </p>
          <p className="mb-0">
            And this is more example text.
          </p>
        </Dropdown.Menu>
      ),
      codeText: getCodeFromString(converter.makeHtml(text)),
    })
    .addSection({
      title: 'Menu Forms',
      describe: <p>在Menu中展示表单内容。</p>,
      content: (
        <Dropdown.Menu open={true} style={{position: 'static'}}>
          <Form className="px-4 py-3">
            <FormGroup>
              <Label>
                Email address
                <Input placeholder="email@example.com" />
              </Label>
            </FormGroup>
            <FormGroup>
              <Label>
                Password
                <Input type="password" placeholder="Password" />
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input id="check" type="checkbox" label="Remember me"/>
            </FormGroup>
            <Button>Sign in</Button>
          </Form>
          <Dropdown.Item divider/>
          <Dropdown.Item href="#">New around here? Sign up</Dropdown.Item>
          <Dropdown.Item href="#">Forgot password?</Dropdown.Item>
        </Dropdown.Menu>
      ),
      codeText: getCodeFromString(converter.makeHtml(forms)),
    })
    .addAPI({
      header: true,
      title: 'SplitDropdown',
      content: '',
    })
    .addAPI({
      title: 'Dropdown',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'DropdownToggle',
      content: getTableFromString(converter.makeHtml(toggleApi)),
    })
    .addAPI({
      title: 'DropdownMenu',
      content: getTableFromString(converter.makeHtml(menuApi)),
    })
    .addAPI({
      title: 'DropdownItem',
      content: getTableFromString(converter.makeHtml(itemApi)),
    })
    .render()
}
