import React from 'react'
import { Col, Button, DropdownToggle, DropdownItem, DropdownMenu } from 'xbrick'
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/input-group/basic.md'
import sizing from 'docs/demo/input-group/sizing.md'
import multipleinput from 'docs/demo/input-group/multiple-input.md'
import multipleaddons from 'docs/demo/input-group/multiple-addons.md'
import button from 'docs/demo/input-group/button.md'

// API
import api from 'src/input-group/input-group.md'
import addonsapi from 'src/input-group/input-group-addons.md'
import textapi from 'src/input-group/input-group-text.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function InputGroupContent() {
  return new Content('Input Group')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Sizing', anchor: 'sizing' })
    .addNav({ text: 'Multiple inputs', anchor: 'multiple-inputs' })
    .addNav({ text: 'Multiple addons', anchor: 'multiple-addons' })
    .addNav({ text: 'Button addons', anchor: 'button-addons' })
    .addNav({ text: 'Dropdowns addons', anchor: 'dropdowns-addons' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>InputGroup组件用于组合输入框，按钮或文本等内容，可以轻松的扩展表单。</p>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: '',
      content: (
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>@</InputGroupText>
          </InputGroupAddon>
          <Input placehold="Username" />
        </InputGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Sizing',
      describe: '',
      content: (
        <>
          <InputGroup size="small" className="mb-3">
            <InputGroupAddon>
              <InputGroupText>small</InputGroupText>
            </InputGroupAddon>
            <Input placehold="Username"/>
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroupAddon>
              <InputGroupText>middle</InputGroupText>
            </InputGroupAddon>
            <Input placehold="Username"/>
          </InputGroup>
          <InputGroup size="large" className="mb-3">
            <InputGroupAddon>
              <InputGroupText>large</InputGroupText>
            </InputGroupAddon>
            <Input placehold="Username"/>
          </InputGroup>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(sizing)),
    })
    .addSection({
      title: 'Multiple inputs',
      describe: '',
      content: (
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>
              First and last name
            </InputGroupText>
          </InputGroupAddon>
          <Input />
          <Input />
        </InputGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(multipleinput)),
    })
    .addSection({
      title: 'Multiple addons',
      describe: '',
      content: (
        <InputGroup>
          <InputGroupAddon>
            <InputGroupText>
              $
            </InputGroupText>
            <InputGroupText>
              0.00
            </InputGroupText>
          </InputGroupAddon>
          <Input />
        </InputGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(multipleaddons)),
    })
    .addSection({
      title: 'Button addons',
      describe: '',
      content: (
        <InputGroup>
          <InputGroupAddon>
            <Button bstype="secondary">Button</Button>
          </InputGroupAddon>
          <Input />
        </InputGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(button)),
    })
    .addSection({
      title: 'Dropdowns addons',
      describe: '',
      content: (
        <InputGroup>
          <InputGroupAddon>
            <DropdownToggle bstype="secondary" button>Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
              <DropdownItem divider/>
              <DropdownItem>Separated link</DropdownItem>
            </DropdownMenu>
          </InputGroupAddon>
          <Input />
        </InputGroup>
      ),
      codeText: getCodeFromString(converter.makeHtml(button)),
    })
    .addAPI({
      header: true,
      title: 'InputGroup',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'InputGroupAddon',
      content: getTableFromString(converter.makeHtml(addonsapi)),
    })
    .addAPI({
      title: 'InputGroupText',
      content: getTableFromString(converter.makeHtml(textapi)),
    })
    .render()
}