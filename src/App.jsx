import { Component } from 'react'
import Form from './components/Form/Form'
import Users from './components/Users/Users'

export default class App extends Component {
  render() {
    return (
      <div>
        <Form></Form>
        <Users></Users>
      </div>
    )
  }
}
