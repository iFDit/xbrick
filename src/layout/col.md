## Col

- 网格布局中列组件。

````jsx
  <Col>1111</Col>
````

## API

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| tag | 自定义标签 | string\|ReactNode | `div` |
| render | 是否渲染container元素 | boolean | `true` |
| xs | 无论视口多大 | number\|boolean\|string\|{offset?: number;order?: number;col?: number\|"auto";align?: "auto"\|"start"\|"center"\|"end";} | 0 |
| sm | 当视口大于576px，采用水平布局 | number\|boolean\|string\|{offset?: number;order?: number;col?: number\|"auto";align?: "auto"\|"start"\|"center"\|"end";} | - |
| md | 当视口大于768px | number\|boolean\|string\|{offset?: number;order?: number;col?: number\|"auto";align?: "auto"\|"start"\|"center"\|"end";} | - |
| lg | 当视口大于992px | number\|boolean\|string\|{offset?: number;order?: number;col?: number\|"auto";align?: "auto"\|"start"\|"center"\|"end";} | - |
| xl | 当视口大于1200px | number\|boolean\|string\|{offset?: number;order?: number;col?: number\|"auto";align?: "auto"\|"start"\|"center"\|"end";} | - |