import { getParameters } from 'codesandbox/lib/api/define'

export function getCodeFromString(str: string) {
  const dom = new DOMParser()
  const doc = dom.parseFromString(str, 'text/html')
  const codes = doc.querySelectorAll('code')
  return codes.length > 0 ? codes[codes.length - 1].textContent : ''
}

export function getTableFromString(str: string) {
  const dom = new DOMParser()
  const doc = dom.parseFromString(str, 'text/html')
  return doc.querySelector('table') ? doc.querySelector('table')!.outerHTML : ''
}

export const getcodesandboxParam = (code: string) => getParameters({
  files: {
    'index.js': {
      content: `import "./styles.css"\nimport * as data from "./data.js"\n${code}`,
    },
    'styles.css': {
      content: '.app { padding: 20px; }',
    },
    'index.html': {
      content: '<div id="root" class="app"></div>',
    },
    'data.js': {
      content: dataContent,
    },
    'package.json': {
      content: {
        dependencies: {
          react: 'latest',
          xbrick: 'latest',
          'react-dom': 'latest',
        },
      },
    },
  },
} as any)

const dataContent = `
  export const imageSrc = "${`data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height
%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200
%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22te
xt%2Fcss%22%3E%23holder_1650f187ce8%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%
3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%
7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1650f187ce8%22%3E%3Crect%20width
%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%
20x%3D%2299.125%22%20y%3D%2296.3%22%3EImage%20cap%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%
2Fsvg%3E`.replace(/[\r\n]/g, '')}"
export const overlayImage = "${`data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22696%22%20he
ight%3D%22270%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220
%200%20696%20270%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%
22text%2Fcss%22%3E%23holder_1657f5f4887%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.
75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A35pt
%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1657f5f4887%22%3E%3Crect%20w
idth%3D%22696%22%20height%3D%22270%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ct
ext%20x%3D%22258.4921875%22%20y%3D%22150.6%22%3E696x270%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%
3E%3C%2Fsvg%3E`.replace(/[\r\n]/g, '')}"
`
