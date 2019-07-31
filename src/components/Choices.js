import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleContentProp extends Component {
    constructor(props){
        super(props)
    }
    
    
    
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
      const name = this.props.name
      const content = this.props.content
  
      return (
        <Menu>
          <Menu.Item
            name={name}
            active={activeItem === 'editorials'}
            content={content}
            onClick={this.handleItemClick}
          />
  
          <Menu.Item
            name={name}
            active={activeItem === 'reviews'}
            content={content}
            onClick={this.handleItemClick}
          />
  
          <Menu.Item
            name={name}
            active={activeItem === 'upcomingEvents'}
            content={content}
            onClick={this.handleItemClick}
          />
        </Menu>
      )
    }
  }
  
