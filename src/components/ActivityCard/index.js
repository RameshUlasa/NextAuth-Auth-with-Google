import './index.css'

const ActivityCard = props => {
  const {eachItem} = props
  const {icon, text, number, bgColor} = eachItem
  console.log(icon)

  return (
    <li className="activity-card" style={{backgroundColor: bgColor}}>
      <img className="icon" alt="text" src={icon} />
      <p className="act-text">{text}</p>
      <p className="act-num">{number}</p>
    </li>
  )
}

export default ActivityCard
