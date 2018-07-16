## Row

- 网格布局中行组件。

````jsx
  <Container>
    <Row>
      <Col>11</Col>
    </Row>
  </Container>
````

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tag | 自定义标签 | string\|ReactNode | `div` |
| nowrap | 是否添加wrap元素 | boolean | `false` |
| xs | 无论视口多大，都采用水平布局 | {align?: "start"\|"center"\|"end";justify?: "start"\|"center"\|"end"\|"around"\| "between";} | 无 |
| sm | 当视口大于576px时，采用水平布局 | {align?: "start"\|"center"\|"end";justify?: "start"\|"center"\|"end"\|"around"\|"between";} | 无 |
| md | 当视口大于768px时，采用水平布局 | {align?: "start"\|"center"\|"end";justify?: "start"\|"center"\|"end"\|"around"\|"between";} | 无 |
| lg | 当视口大于992px时，采用水平布局 | {align?: "start"\| "center"\|"end";justify?: "start"\|"center"\|"end"\|"around"\| "between";} | 无 |
| xl | 当视口大于1200px时，采用水平布局 | {align?: "start"\|"center"\|"end";justify?: "start"\|"center"\|"end"\|"around"\| "between";} | 无 |
