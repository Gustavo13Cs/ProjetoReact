import React, { Component } from 'react'
import Twitter from './Twitter'

class App extends Component {

  state = {
    loading: false,
    active: true,
  }

  componentDidMount () {
    setTimeout (() => (
      this.setState({
        loading: true
      })
    ),3000)
  }

  onRemove = () => {
    this.setState({
      active: false
    })
  }
  render () {
    const posts = [{
      title: 'XPTO',
      descricao: 'foo'
    }, {
      title: 'XPTO',
      descricao: 'foo'
    }]
   return (
    <div>
      <button onClick={this.onRemove}>Remover Component</button>
      {this.state.active && (
        <Twitter posts={posts} loading={this.state.loading}/>
      )}
    </div>
   )
  }
}

export default App