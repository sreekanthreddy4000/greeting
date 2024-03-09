import {ButtonsList, Button} from './styledComponents'

const LanguageItem = props => {
  const {languageDetails, isACtive, onClickChangeLanguage} = props
  const {buttonText, id} = languageDetails
  const onClickButton = () => {
    onClickChangeLanguage(id)
  }
  return (
    <ButtonsList>
      <Button type="button" active={isACtive} onClick={onClickButton}>
        {buttonText}
      </Button>
    </ButtonsList>
  )
}
export default LanguageItem
