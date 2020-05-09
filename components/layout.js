import React from 'react'
import Head from "next/head";

export default class Layout extends React.Component {
  render () {
    return (
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh"}}>
        <header style={{padding: "20px 15px"}}>
          <div className="container">
            <h1 style={{fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif", fontSize: "1em"}}>umm3</h1>
          </div>
        </header>
        <main className="container" style={{marginTop: "50px", flexGrow: 4}}>
                {this.props.children}
        </main>
      </div>
    )
  }
}
