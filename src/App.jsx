import { Component } from 'react'
import Form from './components/Form/Form'
import Users from './components/Users/Users'
import SocialFooter from './components/SocialFooter/SocialFooter'

export default class App extends Component {
  render() {
    return (
      <div>
        <Form></Form>
        <Users></Users>
        <SocialFooter></SocialFooter>
      </div>
    )
  }
}
