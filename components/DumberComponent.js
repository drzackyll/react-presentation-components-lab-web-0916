const React = require('react')

function DumberComponent(props){

  return(
    <div onClick={props.handleClick()}>
      "I am just happy"
    </div>
  )
}

module.exports = DumberComponent
