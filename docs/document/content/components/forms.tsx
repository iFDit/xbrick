import React from 'react'
import { Row, Col, Button } from 'xbrick'
import { Form, FormGroup, Input, Label, CustomInput } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/form/basic.md'
import size from 'docs/demo/form/size.md'
import readonly from 'docs/demo/form/readonly.md'
import readonlyplain from 'docs/demo/form/readonly-plain.md'
import horizontal from 'docs/demo/form/horizontal.md'
import inline from 'docs/demo/form/inline.md'
import range from 'docs/demo/form/range.md'
import custom from 'docs/demo/form/custom.md'

// API
import api from 'src/form/form.md'
import groupapi from 'src/form/form-group.md'
import customapi from 'src/input-group/custom-input.md'
import inputapi from 'src/input-group/input.md'
import labelapi from 'src/input-group/label.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function FormContent() {
  return new Content('Forms')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Sizing', anchor: 'sizing' })
    .addNav({ text: 'Readonly', anchor: 'readonly' })
    .addNav({ text: 'Readonly plain text', anchor: 'readonly-plain-text' })
    .addNav({ text: 'Range Inputs', anchor: 'range-nputs' })
    .addNav({ text: 'Horizontal', anchor: 'horizontal' })
    .addNav({ text: 'Inline', anchor: 'inline' })
    .addNav({ text: 'Custom', anchor: 'custom' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Form组件可以提供一系列组件供用户将信息输入到页面中。</p>
          <p>用户体验：</p>
          <ul>
            <li>标记好必填的字段。</li>
            <li>在必要的时候提供一些帮助信息。</li>
            <li>确保未保存的信息不会轻易丢失。</li>
            <li>不要只使用placeholders作为唯一的label。</li>
            <li>不相干的信息不要放在同一行里。</li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: <p>常用的表单，包括input, select, textarea, radio和checkbox。</p>,
      content: (
        <Form>
          <FormGroup>
            <Label>
              Email
              <Input placeholder="example@mail.com"/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Password
              <Input type="password" placeholder="Password"/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Select
              <Input type="select" defaultValue="1">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Input>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Multiple  Select
              <Input type="select" defaultValue={['1']} multiple>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Input>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              Text Area
              <Input type="textarea"/>
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              File
              <Input type="file"/>
            </Label>
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>Radio Buttons</legend>
            <FormGroup check>
              <Input type="radio" name="rd1" label="Option one is this and that—be sure to include why it's great"/>
            </FormGroup>
            <FormGroup check>
              <Input type="radio" name="rd1" label="Option two can be something else and selecting it will deselect option one"/>
            </FormGroup>
            <FormGroup check>
              <Input type="radio" name="rd1" label="Option three is disabled" disabled/>
            </FormGroup>
            <FormGroup check>
              <Input type="radio" name="rd1" label="Option one is this and that—be sure to include why it's great"/>
            </FormGroup>
          </FormGroup>
          <FormGroup check>
            <Input type="checkbox" label="Check me out"/>
          </FormGroup>
          <Button bstype="secondary">Submit</Button>
        </Form>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Sizing',
      describe: <p>设置Input组件的size来改变表单的大小。</p>,
      content: (
        <Form>
          <FormGroup>
            <Input size="large" placeholder="form-control-lg" />
          </FormGroup>
          <FormGroup>
            <Input size="middle" placeholder="Default input" />
          </FormGroup>
          <FormGroup>
            <Input size="small" placeholder="form-control-sm" />
          </FormGroup>
          <FormGroup>
            <Input type="select" size="large">
              <option>large select</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Input type="select" size="middle">
              <option>large select</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Input type="select" size="small">
              <option>large select</option>
            </Input>
          </FormGroup>
        </Form>
      ),
      codeText: getCodeFromString(converter.makeHtml(size)),
    })
    .addSection({
      title: 'Readonly',
      describe: <p>readOnly只读。</p>,
      content: (
        <Form>
          <FormGroup>
            <Input placeholder="Readonly input here..." readOnly />
          </FormGroup>
        </Form>
      ),
      codeText: getCodeFromString(converter.makeHtml(readonly)),
    })
    .addSection({
      title: 'Readonly plain text',
      describe: <p>plainText属性改变只读表单的显示样式。</p>,
      content: (
        <Form>
          <FormGroup>
            <Input placeholder="Readonly input here..." plainText readOnly />
          </FormGroup>
        </Form>
      ),
      codeText: getCodeFromString(converter.makeHtml(readonlyplain)),
    })
    .addSection({
      title: 'Range Inputs',
      describe: <p>Range表单。</p>,
      content: (
        <Form style={{width: '100%'}}>
          <FormGroup>
            <Input type="range" label="Range input" />
          </FormGroup>
        </Form>
      ),
      codeText: getCodeFromString(converter.makeHtml(range)),
    })
    .addSection({
      title: 'Horizontal',
      describe: <p>使用Col组件和FormGroup的row属性布局，具体可参考Layout组件。</p>,
      content: (
        <Form>
          <FormGroup row className="mb-2">
            <Col render={false} sm="3"><Label htmlFor="email" verticalCenter>Email</Label></Col>
            <Col sm="9"><Input id="email" placehold="Email" /></Col>
          </FormGroup>
          <FormGroup row className="mb-2">
            <Col render={false} sm="3"><Label htmlFor="password" verticalCenter>Password</Label></Col>
            <Col sm="9"><Input id="password" placehold="Password" type="password" /></Col>
          </FormGroup>
          <FormGroup tag="fieldset">
            <Row>
              <Col render={false} xs="3"><legend style={{fontSize: 14}}>Radios</legend></Col>
              <Col xs="9">
                <FormGroup check>
                  <Input type="radio" label="First radio" name="rd" />
                </FormGroup>
                <FormGroup check>
                  <Input type="radio" label="Second radio" name="rd" />
                </FormGroup>
                <FormGroup check>
                  <Input type="radio" label="Third disabled radio" name="rd" />
                </FormGroup>
              </Col>
            </Row>
          </FormGroup>
          <Button bstype="secondary">Sign in</Button>
        </Form>
      ),
      codeText: getCodeFromString(converter.makeHtml(horizontal)),
    })
    .addSection({
      title: 'Inline',
      describe: <p>在Form中设置inline属性，可以在同一水平线中显示表单元素。</p>,
      content: (
        <Form inline>
          <FormGroup>
            <Input value="email@example.com" readOnly plainText />
          </FormGroup>
          <FormGroup>
            <Input placehold="Password" type="password" />
          </FormGroup>
          <Button bstype="secondary" className="ml-2">Confirm</Button>
        </Form>
      ),
      codeText: getCodeFromString(converter.makeHtml(inline)),
    })
    .addSection({
      title: 'Custom',
      describe: <p>使用CustomInput组件显示统一的select, radio和checkbox样式。</p>,
      content: (
        <Form>
          <FormGroup>
            <Label>
              Select
              <CustomInput type="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </CustomInput>
            </Label>
          </FormGroup>
          <FormGroup check>
            <CustomInput type="checkbox" label="1" name="c" inline/>
            <CustomInput type="checkbox" label="2" name="c" inline/>
            <CustomInput type="checkbox" label="3" name="c" inline/>
          </FormGroup>
          <FormGroup check>
            <CustomInput type="radio" label="1" name="r" inline/>
            <CustomInput type="radio" label="2" name="r" inline/>
            <CustomInput type="radio" label="3" name="r" inline/>
          </FormGroup>
          <Button bstype="secondary">Submit</Button>
        </Form>
      ),
      codeText: getCodeFromString(converter.makeHtml(custom)),
    })
    .addAPI({
      header: true,
      title: 'Form',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'FormGroup',
      content: getTableFromString(converter.makeHtml(groupapi)),
    })
    .addAPI({
      title: 'CustomInput',
      content: getTableFromString(converter.makeHtml(customapi)),
    })
    .addAPI({
      title: 'Input',
      content: getTableFromString(converter.makeHtml(inputapi)),
    })
    .addAPI({
      title: 'Label',
      content: getTableFromString(converter.makeHtml(labelapi)),
    })
    .render()
}
