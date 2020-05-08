import React from 'react'
import Head from "next/head";

export default class Layout extends React.Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
