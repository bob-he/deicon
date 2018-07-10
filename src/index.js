import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import styles from './icon.cssx'

export default class Icon extends React.Component {
  static propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
  }

  handleClick = (e) => {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(e)
    }
  }

  render () {
    const {type, className} = this.props
    const iconClass = classNames(
      styles.deicon,
      {
        [styles[`icon-${type}`]]: type
      },
      className
    )
    return (
      <span onClick={this.handleClick} className={iconClass}></span>
    )
  }
}
