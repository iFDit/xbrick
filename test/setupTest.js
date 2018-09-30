if (global.document) {
  // global.document.createRange = () => ({
  //   setStart: () => {/**/},
  //   setEnd: () => {/**/},
  //   commonAncestorContainer: {
  //     nodeName: 'BODY',
  //     ownerDocument: document,
  //   },
  // })
}

jest.mock('popper.js', () => {
  const PopperJS = jest.requireActual('popper.js')
  return class {
    static placements = PopperJS.placements
    constructor() {
      return {
        destroy: () => {/**/},
        scheduleUpdate: () => {/**/},
      }
    }
  }
})
