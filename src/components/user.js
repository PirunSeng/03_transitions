import React, { PureComponent } from 'react';
import UserTemplate from './user_template';

class User extends PureComponent {

  state = {
    name: 'Pirun',
    age: 23,
    hobbies: ['jogging', 'cycling'],
    english: false,
    message(){},
    car:{year: 2018, color: 'red'},
    wife: 'Jane',
    color: 'red'
  }

  changeColor(){
    // this.setState({
    //   color: 'blue'
    // })
    this.refs.myColor.style.color = 'blue'
  }

  render() {
    const style = {
      color: this.state.color
    }
    return (
      <div>
        <h4 style={style} ref='myColor'>{this.state.wife}</h4>
        <div onClick={() => this.changeColor() }>Change Color</div>
        <UserTemplate {...this.state} />
      </div>
    );
  }

}

export default User;

// React reference is available, but it is not recommended to use.
// It is more recommended to use state.
