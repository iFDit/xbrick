import React from 'react'
import { Col, Button, Form, FormGroup, Label, Input } from 'xbrick'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'xbrick'
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
import * as showdown from 'showdown'
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
      describe: '',
      content: (
        <Dropdown>
          <DropdownToggle button bstype="secondary">
            Dropdown button
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Split button',
      describe: '',
      content: (
        <>
          <Col>
            <Dropdown btnGroup>
              <Button>primary</Button>
              <DropdownToggle button split/>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown btnGroup>
              <Button bstype="secondary">secondary</Button>
              <DropdownToggle bstype="secondary" button split/>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown btnGroup>
              <Button bstype="success">success</Button>
              <DropdownToggle bstype="success" button split/>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown btnGroup>
              <Button bstype="info">info</Button>
              <DropdownToggle bstype="info" button split/>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown btnGroup>
              <Button bstype="warning">warning</Button>
              <DropdownToggle bstype="warning" button split/>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown btnGroup>
              <Button bstype="danger">danger</Button>
              <DropdownToggle bstype="danger" button split/>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(split)),
    })
    .addSection({
      title: 'Sizing',
      describe: '',
      content: (
        <>
          <Col>
            <Dropdown>
              <DropdownToggle button bstype="secondary" size="large">
                Large button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <DropdownToggle button bstype="secondary">
                Middle button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
          <Col>
            <Dropdown>
              <DropdownToggle button bstype="secondary" size="small">
                Small button
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Action</DropdownItem>
                <DropdownItem>Another action</DropdownItem>
                <DropdownItem>Something else here</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(size)),
    })
    .addSection({
      title: 'Dropup',
      describe: '',
      content: (
        <Dropdown direction="up">
          <DropdownToggle button bstype="secondary">
            Dropup
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ),
      codeText: getCodeFromString(converter.makeHtml(dropup)),
    })
    .addSection({
      title: 'Dropright',
      describe: '',
      content: (
        <Dropdown direction="right">
          <DropdownToggle button bstype="secondary">
            Dropright
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ),
      codeText: getCodeFromString(converter.makeHtml(dropright)),
    })
    .addSection({
      title: 'Dropleft',
      describe: '',
      content: (
        <Dropdown direction="left">
          <DropdownToggle button bstype="secondary">
            Dropleft
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ),
      codeText: getCodeFromString(converter.makeHtml(dropleft)),
    })
    .addSection({
      title: 'Menu alignment',
      describe: '',
      content: (
        <Dropdown>
          <DropdownToggle button bstype="secondary">
            Right-aligned menu
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>Action</DropdownItem>
            <DropdownItem>Another action</DropdownItem>
            <DropdownItem>Something else here</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ),
      codeText: getCodeFromString(converter.makeHtml(alignment)),
    })
    .addSection({
      title: 'Menu Headers',
      describe: '',
      content: (
        <DropdownMenu open={true} style={{position: 'static'}}>
          <DropdownItem header>Dropdown header</DropdownItem>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
        </DropdownMenu>
      ),
      codeText: getCodeFromString(converter.makeHtml(headers)),
    })
    .addSection({
      title: 'Menu Dividers',
      describe: '',
      content: (
        <DropdownMenu open={true} style={{position: 'static'}}>
          <DropdownItem header>Dropdown header</DropdownItem>
          <DropdownItem>Action</DropdownItem>
          <DropdownItem>Another action</DropdownItem>
          <DropdownItem>Something else here</DropdownItem>
          <DropdownItem divider/>
          <DropdownItem>Separated link</DropdownItem>
        </DropdownMenu>
      ),
      codeText: getCodeFromString(converter.makeHtml(dividers)),
    })
    .addSection({
      title: 'Menu Text',
      describe: '',
      content: (
        <DropdownMenu open={true} style={{position: 'static', width: 200}} className="p-4">
          <p>
            Some example text that's free-flowing within the dropdown menu.
          </p>
          <p className="mb-0">
            And this is more example text.
          </p>
        </DropdownMenu>
      ),
      codeText: getCodeFromString(converter.makeHtml(text)),
    })
    .addSection({
      title: 'Menu Forms',
      describe: '',
      content: (
        <DropdownMenu open={true} style={{position: 'static'}}>
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
          <DropdownItem divider/>
          <DropdownItem>New around here? Sign up</DropdownItem>
          <DropdownItem>Forgot password?</DropdownItem>
        </DropdownMenu>
      ),
      codeText: getCodeFromString(converter.makeHtml(forms)),
    })
    .addAPI({
      header: true,
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
