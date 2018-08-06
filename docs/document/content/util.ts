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
      content: `import "./styles.css"\r\n${code}`,
    },
    'styles.css': {
      content: '.app { padding: 20px; }',
    },
    'index.html': {
      content: '<div id="root" class="app"></div>',
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