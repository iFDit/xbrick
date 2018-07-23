import * as React from 'react'
import { SlideDown } from 'src/animate/SlideDown'
import { SlideUp } from 'src/animate/SlideUp'
import { IProps } from 'src/common/props'
import { omit } from 'lodash'

export interface ISlideProps extends IProps {
  /**
   * initial hidden or showed.
   * @default false
   */
  show?: boolean

  /**
   * Handle invoked afer state change.
   */
  afterStateChange? (show: boolean): void

  /**
   * render props.
   * @param props 
   */
  children?(props: {slidedown: any, slideup: any}): React.ReactNode
}

export class Slide extends React.Component<ISlideProps> {
  static displayName = 'xbrick.Slide'
  static defaultProps = {
    show: false,
    tag: 'div',
  }

  public state = { show: this.props.show || false }

  render() {
    const { children, ...others } = this.props
    const { show } = this.state
    const Wrap = show ? SlideUp : SlideDown
    const noop = () => {/**/}
    const nextProps = omit(others, ['afterStateChange', 'show'])
    return (
      <Wrap {...nextProps} afterStateChange={this.handleAfterStateChange}>
        {(slideFn: any) => children && children({
          slidedown: show ? noop : slideFn,
          slideup: show ? slideFn : noop,
        })}
      </Wrap>
    )
  }

  private handleAfterStateChange = () => {
    const { afterStateChange } = this.props
    const { show } = this.state

    this.setState({show: !show}, () => afterStateChange && afterStateChange(!show))
  }
}