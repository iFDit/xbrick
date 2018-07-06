import * as React from 'react'
import * as classNames from 'classnames'
import * as classes from 'src/common/classes'
import { IProps } from 'src/common/props'

export interface IInputGroupTextProps extends IProps {
  /**
   * custom render component.
   * @default div
   */
  tag?: string | React.Factory<any>
}

export const InputGroupText: React.StatelessComponent<IInputGroupTextProps> = function (props: IInputGroupTextProps) {
  const { tag, ...others } = props
  const Tag = tag!
  const className = classNames(props.className, classes.INPUT_GROUP_TEXT)
  return <Tag {...others} className={className} />
}

InputGroupText.displayName = 'xbrick.InputGroupText'
InputGroupText.defaultProps = {
  tag: 'div',
}
