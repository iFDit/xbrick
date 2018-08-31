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
      describe: '',
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
      describe: '',
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
      describe: '',
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
      describe: '',
      content: (
        <>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={25} bgColor="success"/>
            </Progress>
          </Col>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={50} bgColor="info"/>
            </Progress>
          </Col>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={70} bgColor="warning"/>
            </Progress>
          </Col>
          <Col xs="12" className="mb-2">
            <Progress>
              <ProgressBar width={100} bgColor="danger"/>
            </Progress>
          </Col>
        </>
      ),
      codeText: getCodeFromString(converter.makeHtml(backgrounds)),
    })
    .addSection({
      title: 'Multiple bars',
      describe: '',
      content: (
        <Col xs="12">
          <Progress>
            <ProgressBar width={15}/>
            <ProgressBar width={30} bgColor="success"/>
            <ProgressBar width={40} bgColor="info"/>
          </Progress>
        </Col>
      ),
      codeText: getCodeFromString(converter.makeHtml(multiple)),
    })
    .addSection({
      title: 'Animated and stripes',
      describe: '',
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