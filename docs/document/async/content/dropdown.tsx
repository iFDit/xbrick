import { asyncComponent } from 'docs/document/async/asyncComponent'

// @ts-ignore
// https://github.com/Microsoft/TypeScript/issues/9944
import * as React from 'react'
// @ts-ignore
import * as l from 'docs/document/async/Loading'

export const AsyncDropdownContent = asyncComponent(() => (
  import('docs/document/content/components/dropdown').then(modules => modules.DropdownContent)
))