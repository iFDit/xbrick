import { asyncComponent } from 'docs/document/async/asyncComponent'

export const Document = asyncComponent(() => {
  return import('docs/document/doc').then(modules => modules.Doc)
})
