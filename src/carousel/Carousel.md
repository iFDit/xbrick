轮播图

## 何时使用
用于一组图片或卡片轮播。

````jsx
import { Carousel, CarouselItem, CarouselTrack, CarouselControl } from 'xbrick'

ReactDOM.render(
  <Carousel>
    <CarouselTrack>
      <CarouselItem>1</CarouselItem>
      <CarouselItem>2</CarouselItem>
      <CarouselItem>3</CarouselItem>
    </CarouselTrack>
    <CarouselControl direction="prev" />
    <CarouselControl direction="next" />
  </Carousel>
, rootNode)
````

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tag | 自定义标签 | string\|ReactNode | `div` |
