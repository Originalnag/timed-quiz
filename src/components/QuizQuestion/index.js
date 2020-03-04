import React from 'react'

class QuizQuestion extends React.Component {
render() {
  return(
      <>
      <h2>{this.props.question} </h2> 
      {this.props.answer.map((v) => {
          return <input type="button" 
          value={v.text} 
          className="answerButton" 
          onClick={() => this.props.nextQuestion()}> </input>
      })}
          </>
  )
}
}

export default QuizQuestion