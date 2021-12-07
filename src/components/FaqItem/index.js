// Write your code here.

import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  onclickingPlusButton = () => {
    const {showingCorrespondingAnswer, eachfaq} = this.props
    const {id} = eachfaq
    showingCorrespondingAnswer(id)
  }

  render() {
    const {eachfaq} = this.props
    const {questionText, answerText, isrequested} = eachfaq
    return (
      <li className="faq-container">
        <div
          className={
            isrequested
              ? 'question-container border-question-when-selected'
              : 'question-container'
          }
        >
          <h1 className="question-style">{questionText}</h1>

          <img
            onClick={this.onclickingPlusButton}
            alt={isrequested ? 'minus' : 'plus'}
            src={
              isrequested
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
            }
          />
        </div>
        {isrequested && <p className="answer-style">{answerText}</p>}
      </li>
    )
  }
}

export default FaqItem
