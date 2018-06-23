import React from 'react';
import PropTypes from 'prop-types';

const UserTemplate = (props) => {

  return(
    <div>
      user template
    </div>
  )
};

UserTemplate.propTypes = {
  name:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.oneOf(['Pirun', 'Seng'])
  ]),
  // name:PropTypes.oneOf(['Pirun', 'Seng']),
  // name:PropTypes.string,
  age:PropTypes.number,
  hobbies:PropTypes.arrayOf(PropTypes.string),
  // hobbies:PropTypes.array,
  english:PropTypes.bool,
  message:PropTypes.func,
  car:PropTypes.object,
  // wife:PropTypes.string.isRequired
  // custom check
  wife:function(props, propName, component){
    // console.log(component)
    if(props[propName] !== 'Jane'){
      // custom error message
      return new Error(`The name of ${props[propName]} should be Jane`)
    }
  }
}

export default UserTemplate;
