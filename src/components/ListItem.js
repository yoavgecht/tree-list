import React from 'react';
import List from './List';

class ListItem extends React.Component {
  constructor (){
      super(...arguments);
      this.state = { showChild:false};
  }

  handleCollapse() {
      this.setState({showChild:!this.state.showChild});
      return false;
  }

  render(){
      let children;
      if(this.state.showChild && this.props.item.contacts) {
          children = (<List list={this.props.item.contacts}/>);
      }

      return (
          <div>
              <div onClick={this.handleCollapse.bind(this)}>
                 <h3>{this.props.item.name}</h3>
              </div>
               <h4>{children}</h4>
          </div>
      )
  };
}

export default ListItem;