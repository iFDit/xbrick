import React from 'react'
import { IProps } from 'src/common/props'
import { Animate, IAnimateProps } from 'src/animate/Animate'

export interface IFadeProps extends IProps, Pick<IAnimateProps, 'transition' | 'afterStateChange'> {
  /**
   * Custom render tag.
   * @default div
   */
  tag?: string | React.Factory<any>

  /**
   * opacity initial value
   * @default 0
   */
  from?: number

  /**
   * opacity final value.
   * @default 1
   */
  to?: number
}

export const Fade: React.StatelessComponent<IFadeProps> = function (props: IFadeProps) {
  const { to, from, ...others } = props
  const animateFrom = { opacity: { value: from!, config: { precision: 0.4 } } } 
  const animateTo = { opacity: to! }
  return <Animate {...others} from={animateFrom} to={animateTo} show={true} />
}

Fade.displayName = 'xbrick.Fade'
Fade.defaultProps = { tag: 'div' }
