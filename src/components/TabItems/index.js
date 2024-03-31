import './index.css'

const TabItems = props => {
  const {tabItems, onChangeTabItems, isActive} = props
  const {tabId, displayText} = tabItems
  const buttonClassName = isActive ? 'active-btn' : 'un-active-btn'

  const onClickTab = () => {
    onChangeTabItems(tabId)
  }
  return (
    <li className="tab-list">
      <button
        type="button"
        className={`tab-button ${buttonClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItems
