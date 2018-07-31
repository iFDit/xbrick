import { asyncComponent } from 'docs/document/async/asyncComponent'

// function sleep(time: number = 3000) {
//   return (data: any) => new Promise(resolve => {
//     setTimeout(() => resolve(data), time)
//   })
// }
export const Home = asyncComponent(() => {
  return import('docs/document/home/home')
    .then(modules => modules.Home)
})
