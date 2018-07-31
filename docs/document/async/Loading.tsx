import * as React from 'react'

export interface ILoadingProps {
  [prop: string]: any
}

export const Loading = (props: ILoadingProps) => {
  return <h4>loading...</h4>
}
