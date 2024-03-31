import './index.css'

const FruitList = props => {
  const {fruitItems, onChangeThumbnail} = props
  const {thumbnailUrl} = fruitItems
  const onClickThumbnail = () => {
    onChangeThumbnail(thumbnailUrl)
  }
  return (
    <li className="fruit-list">
      <button
        type="button"
        className="thumbnail-btn"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default FruitList
