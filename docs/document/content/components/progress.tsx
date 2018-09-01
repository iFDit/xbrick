import React from 'react'
import { Col } from 'xbrick'
import { Progress, ProgressBar } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/progress/basic.md'
import labels from 'docs/demo/progress/labels.md'
import height from 'docs/demo/progress/height.md'
import backgrounds from 'docs/demo/progress/backgrounds.md'
import multiple from 'docs/demo/progress/multiple.md'
import animate from 'docs/demo/progress/animate.md'

// API
import api from 'src/progress/progress.md'
import barapi from 'src/progress/progress-bar.md'

import { Content } from 'docs/document/content/components/Content'
import showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function ProgressContent() {
  return new Content('Progress')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Examples', anchor: 'examples' })
    .addNav({ text: 'Labels', anchor: 'labels' })
    .addNav({ text: 'Height', anchor: 'height' })
    .addNav({ text: 'Backgrounds', anchor: 'backgrounds' })
    .addNav({ text: 'Multiple bars', anchor: 'multiple-bars' })
    .addNav({ text: 'Animated and stripes', anchor: 'animated-and-stripes' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Progress组件可以让用户清楚的看到应用当前的加载情况。</p>
        </Col>
      ),
    })
    .addSection({
      title: 'Examples',
      describe: <p>通过width属性可以设置不同的进度</p>,
      content: (
        <>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={0}/>
            </Progress>
          </Col>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={25}/>
            </Progress>
          </Col>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={50}/>
            </Progress>
          </Col>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={70}/>
            </Progress>
          </Col>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={100}/>
            </Progress>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'Labels',
      describe: <p>可以在ProgressBar中显示文字。</p>,
      content: (
        <Col xs="12">
          <Progress>
            <ProgressBar width={25}>25%</ProgressBar>
          </Progress>
        </Col>
      ),
      codeText: getCodeFromString(converter.makeHtml(labels)),
    })
    .addSection({
      title: 'Height',
      describe: <p>可以通过style来修改Progress的样式，例如高度。</p>,
      content: (
        <>
          <Col xs="12" className="mb-2">
            <Progress style={{height: 1}}>
              <ProgressBar width={25}/>
            </Progress>
          </Col>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={25}/>
            </Progress>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(height)),
    })
    .addSection({
      title: 'Backgrounds',
      describe: <p>使用color属性来设置不同的颜色。</p>,
      content: (
        <>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={25} color="success"/>
            </Progress>
          </Col>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={50} color="info"/>
            </Progress>
          </Col>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={70} color="warning"/>
            </Progress>
          </Col>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={100} color="danger"/>
            </Progress>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(backgrounds)),
    })
    .addSection({
      title: 'Multiple bars',
      describe: <p>可以将多个ProgressBar组合在一行，每个ProgressBar可以设置不同的样式。</p>,
      content: (
        <Col xs="12">
          <Progress>
            <ProgressBar width={15}/>
            <ProgressBar width={30} color="success"/>
            <ProgressBar width={40} color="info"/>
          </Progress>
        </Col>
      ),
      codeText: getCodeFromString(converter.makeHtml(multiple)),
    })
    .addSection({
      title: 'Animated and stripes',
      describe: <p>通过stripes和animate来开启动画效果。</p>,
      content: (
        <Col xs="12">
          <Progress>
            <ProgressBar width={75} striped animate/>
          </Progress>
        </Col>
      ),
      codeText: getCodeFromString(converter.makeHtml(animate)),
    })
    .addAPI({
      header: true,
      title: 'Progress',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'ProgressBar',
      content: getTableFromString(converter.makeHtml(barapi)),
    })
    .render()
}