import {Component} from 'react'
import LanguageItem from '../LanguageItem'

import {
  BgContainer,
  Heading,
  ButtonsContainer,
  ImageItem,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Home extends Component {
  state = {
    activeId: languageGreetingsList[0].id,
  }

  onClickChangeLanguage = id => {
    this.setState({activeId: id})
  }

  renderSelectedLanguage = () => {
    const {activeId} = this.setState
    const {imageUrl} = languageGreetingsList[languageGreetingsList.findIndex(each => each.id === activeId)]
    return <ImageItem src={imageUrl} alt={languageGreetingsList.imageAltText} />
  }

  render() {
    const {activeId} = this.state
    return (
      <BgContainer>
        <Heading>Multilingual Greetings</Heading>
        <ButtonsContainer>
          {languageGreetingsList.map(each => (
            <LanguageItem
              key={each.id}
              languageDetails={each}
              isActive={activeId === each.id}
              onClickChangeLanguage={this.onClickChangeLanguage}
            />
          ))}
        </ButtonsContainer>
        {this.renderSelectedLanguage()}
      </BgContainer>
    )
  }
}

export default Home
