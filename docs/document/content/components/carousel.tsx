import React from 'react'
import { Col } from 'xbrick'
import { UncontrolledCarousel, CarouselTrack, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'xbrick'
import { getCodeFromString, getTableFromString } from 'docs/document/content/util'
// code text
import basic from 'docs/demo/carousel/basic.md'
import control from 'docs/demo/carousel/control.md'
import indicators from 'docs/demo/carousel/indicators.md'
import captions from 'docs/demo/carousel/captions.md'
import crossfade from 'docs/demo/carousel/crossfade.md'

// API
import api from 'src/carousel/carousel.md'
import uncontrolledCarouselApi from 'src/carousel/uncontrolled-carousel.md'
import trackApi from 'src/carousel/carousel-track.md'
import itemApi from 'src/carousel/carousel-item.md'
import indicatorsApi from 'src/carousel/carousel-indicators.md'
import controlApi from 'src/carousel/carousel-control.md'
import captionApi from 'src/carousel/carousel-caption.md'

import { Content } from 'docs/document/content/components/Content'
import * as showdown from 'showdown'
const converter = new showdown.Converter()
converter.setOption('tables', true)

export function CarouselContent() {
  return new Content('Carousel')
    .addNav({ text: 'Overview', anchor: 'overview' })
    .addNav({ text: 'Slides only', anchor: 'slides-only' })
    .addNav({ text: 'With controls', anchor: 'with-controls' })
    .addNav({ text: 'With indicators', anchor: 'with-indicators' })
    .addNav({ text: 'With captions', anchor: 'with-captions' })
    .addNav({ text: 'Crossfade', anchor: 'crossfade' })
    .addNav({ text: 'API', anchor: 'api' })
    .addSection({
      title: 'Overview',
      describe: '',
      content: (
        <Col>
          <p>Carousel组件可以在有限的空间内展示多个内容，例如：一组图片的展示。</p>
          <p>使用：</p>
          <ul>
            <li>展示一组相关的图片供用户浏览。</li>
            <li>在主页面中展示一系列产品广告信息。</li>
          </ul>
          <p>指南：</p>
          <ul>
            <li>1.有用的信息，在轮播内容中应该展示对用户有帮助的内容，而不是一些无关的广告信息。</li>
            <li>2.简洁的内容，展示的内容应该清晰和简明。</li>
            <li>2.不要自动播放，轮播的内容应该在用户的控制下进行转换。</li>
          </ul>
        </Col>
      ),
    })
    .addSection({
      title: 'Slides only',
      describe: '',
      content: (
        <UncontrolledCarousel>
          {({getTrackProps, getControlProps}) => (
            <>
              <CarouselTrack {...getTrackProps()}>
                <CarouselItem>
                  <img src={img1.replace(/[\r\n]/g, '')} />
                </CarouselItem>
                <CarouselItem>
                  <img src={img2.replace(/[\r\n]/g, '')} />
                </CarouselItem>
                <CarouselItem>
                <img src={img3.replace(/[\r\n]/g, '')} />
                </CarouselItem>
              </CarouselTrack>
            </>
          )}
        </UncontrolledCarousel>
      ),
      codeText: getCodeFromString(converter.makeHtml(basic)),
    })
    .addSection({
      title: 'With controls',
      describe: '',
      content: (
        <UncontrolledCarousel>
          {({getTrackProps, getControlProps}) => (
            <>
              <CarouselTrack {...getTrackProps()}>
                <CarouselItem>
                  <img src={img1.replace(/[\r\n]/g, '')}/>
                </CarouselItem>
                <CarouselItem>
                  <img src={img2.replace(/[\r\n]/g, '')}/>
                </CarouselItem>
                <CarouselItem>
                <img src={img3.replace(/[\r\n]/g, '')}/>
                </CarouselItem>
              </CarouselTrack>
              <CarouselControl {...getControlProps({direction: 'prev'})}/>
              <CarouselControl {...getControlProps({direction: 'next'})}/>
            </>
          )}
        </UncontrolledCarousel>
      ),
      codeText: getCodeFromString(converter.makeHtml(control)),
    })
    .addSection({
      title: 'With indicators',
      describe: '',
      content: (
        <UncontrolledCarousel>
          {({getTrackProps, getControlProps, getIndicatorsProps}) => (
            <>
              <CarouselIndicators {...getIndicatorsProps({items: [{key: '1'}, {key: '2'}, {key: '3'}]})}/>
              <CarouselTrack {...getTrackProps()}>
                <CarouselItem>
                  <img src={img1.replace(/[\r\n]/g, '')}/>
                </CarouselItem>
                <CarouselItem>
                  <img src={img2.replace(/[\r\n]/g, '')}/>
                </CarouselItem>
                <CarouselItem>
                <img src={img3.replace(/[\r\n]/g, '')}/>
                </CarouselItem>
              </CarouselTrack>
              <CarouselControl {...getControlProps({direction: 'prev'})}/>
              <CarouselControl {...getControlProps({direction: 'next'})}/>
            </>
          )}
        </UncontrolledCarousel>
      ),
      codeText: getCodeFromString(converter.makeHtml(indicators)),
    })
    .addSection({
      title: 'With captions',
      describe: '',
      content: (
        <UncontrolledCarousel>
          {({getTrackProps, getControlProps, getIndicatorsProps}) => (
            <>
              <CarouselIndicators {...getIndicatorsProps({items: [{key: '1'}, {key: '2'}, {key: '3'}]})}/>
              <CarouselTrack {...getTrackProps()}>
                <CarouselItem>
                  <img src={img1.replace(/[\r\n]/g, '')}/>
                  <CarouselCaption>
                    <h5>first slide</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                  <img src={img2.replace(/[\r\n]/g, '')}/>
                  <CarouselCaption>
                    <h5>second slide</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </CarouselCaption>
                </CarouselItem>
                <CarouselItem>
                  <img src={img3.replace(/[\r\n]/g, '')}/>
                  <CarouselCaption>
                    <h5>last slide</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </CarouselCaption>
                </CarouselItem>
              </CarouselTrack>
              <CarouselControl {...getControlProps({direction: 'prev'})}/>
              <CarouselControl {...getControlProps({direction: 'next'})}/>
            </>
          )}
        </UncontrolledCarousel>
      ),
      codeText: getCodeFromString(converter.makeHtml(captions)),
    })
    .addSection({
      title: 'Crossfade',
      describe: '',
      content: (
        <UncontrolledCarousel>
          {({getTrackProps, getControlProps, getIndicatorsProps}) => (
            <>
              <CarouselTrack {...getTrackProps({crossfade: true})}>
                <CarouselItem>
                  <img src={img1.replace(/[\r\n]/g, '')}/>
                </CarouselItem>
                <CarouselItem>
                  <img src={img2.replace(/[\r\n]/g, '')}/>
                </CarouselItem>
                <CarouselItem>
                  <img src={img3.replace(/[\r\n]/g, '')}/>
                </CarouselItem>
              </CarouselTrack>
              <CarouselControl {...getControlProps({direction: 'prev'})}/>
              <CarouselControl {...getControlProps({direction: 'next'})}/>
            </>
          )}
        </UncontrolledCarousel>
      ),
      codeText: getCodeFromString(converter.makeHtml(crossfade)),
    })
    .addAPI({
      header: true,
      title: 'Carousel',
      content: getTableFromString(converter.makeHtml(api)),
    })
    .addAPI({
      title: 'UncontrolledCarousel',
      content: getTableFromString(converter.makeHtml(uncontrolledCarouselApi)),
    })
    .addAPI({
      title: 'CarouselTrack',
      content: getTableFromString(converter.makeHtml(trackApi)),
    })
    .addAPI({
      title: 'CarouselItem',
      content: getTableFromString(converter.makeHtml(itemApi)),
    })
    .addAPI({
      title: 'CarouselIndicators',
      content: getTableFromString(converter.makeHtml(indicatorsApi)),
    })
    .addAPI({
      title: 'CarouselControl',
      content: getTableFromString(converter.makeHtml(controlApi)),
    })
    .addAPI({
      title: 'CarouselCaption',
      content: getTableFromString(converter.makeHtml(captionApi)),
    })
    .render()
}


const img1 = `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%
22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fs
vg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22no
ne%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165130
f80c3%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family
%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3
C%2Fdefs%3E%3Cg%20id%3D%22holder_165130f80c3%22%3E%3Crect%20width%3D%22
800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3
E%3Ctext%20x%3D%22285.921875%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2F
text%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E
`

const img2 = `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%
22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fs
vg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22no
ne%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165130
f80c6%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family
%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3
C%2Fdefs%3E%3Cg%20id%3D%22holder_165130f80c6%22%3E%3Crect%20width%3D%22
800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3
E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22217.7%22%3ESecond%20slide%3C%
2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E
`

const img3 = `data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%
22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fs
vg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22no
ne%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165130
f80c7%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family
%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3
C%2Fdefs%3E%3Cg%20id%3D%22holder_165130f80c7%22%3E%3Crect%20width%3D%22
800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3
E%3Ctext%20x%3D%22277%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E
%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E
`
