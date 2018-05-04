import React from 'react';
import ListItem from './ListItem'

class List extends React.Component {
    render(){
      let LI = this.props.list.map((item) => {
        return(<li key={item.id}><ListItem item={item} /></li>);
      });
        return (<ul>{LI}</ul>);
  }
};
                
export default List;
