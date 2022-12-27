import '../App.css'
import React, { Component } from 'react'

export default class QuizComponent extends Component {
  render() {
    return (
      <div className='questiondiv'>
        <h1 className='questiontitle'>Question</h1>
        <p className='quesno'>1 of 15</p>
        <h1 className='question'>Which is the only mammal that cannot jump?</h1>
        <div className='optiondiv'>
        <button>Dog</button>
        <button>Elephant</button>
        <button>Goat</button>
        <button>Lion</button>
        </div>
        <div className='buttons'>
            <button>Previous</button>
            <button>Next</button>
            <button>Quit</button>
        </div>
      </div>
    )
  }
}
