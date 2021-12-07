// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = this.props

  componentDidMount = () => {
    const {faqsList} = this.state
    this.setState({
      faqsList: faqsList.map(eachfaq => ({
        ...eachfaq,
        isrequested: false,
      })),
    })
  }

  showingCorrespondingAnswer = id => {
    this.setState(prevstate => ({
      faqsList: prevstate.faqsList.map(eachfaq => {
        if (eachfaq.id === id) {
          return {...eachfaq, isrequested: !eachfaq.isrequested}
        }
        return eachfaq
      }),
    }))
  }

  render() {
    const {faqsList} = this.state

    return (
      <div className="background-card">
        <div className="faqs-container">
          <h1 className="heading-style">FAQs</h1>
          {faqsList.map(eachfaq => (
            <FaqItem
              showingCorrespondingAnswer={this.showingCorrespondingAnswer}
              eachfaq={eachfaq}
              key={eachfaq.id}
            />
          ))}
        </div>
      </div>
    )
  }
}
export default Faqs
