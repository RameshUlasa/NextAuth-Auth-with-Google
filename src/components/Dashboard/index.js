import {Component} from 'react'

import ActivityCard from '../ActivityCard'
import LineGraph from '../LineGraph'
import Piechart from '../Piechart'

import './index.css'

const cardData = [
  {
    id: 1,
    icon:
      'https://res.cloudinary.com/drrs7nq6r/image/upload/v1687682460/Vector_1_xkp4dw.png',
    text: 'Total Revenues',
    number: '$2,344,450',
    bgColor: '#DDEFE0',
  },
  {
    id: 2,
    icon:
      'https://res.cloudinary.com/drrs7nq6r/image/upload/v1687683357/total_transactions_icon_tsosnv.png',
    text: 'Total Transactions',
    number: '4,450',
    bgColor: '#F4ECDD',
  },
  {
    id: 3,
    icon:
      'https://res.cloudinary.com/drrs7nq6r/image/upload/v1687683387/Vector_ydwmut.png',
    text: 'Total Likes',
    number: '9,450',
    bgColor: '#EFDADA',
  },
  {
    id: 4,
    icon:
      'https://res.cloudinary.com/drrs7nq6r/image/upload/v1687683424/Vector_2_pojq02.png',
    text: 'Total users',
    number: '1,450',
    bgColor: '#DEE0EF',
  },
]

class Dashboard extends Component {
  renderDashboard = () => {
    const t = null

    return (
      <div className="dashboard">
        <div className="header">
          <h1 className="main-header">Dashboard</h1>
          <div className="header-options-container">
            <div className="search-container">
              <input className="search" type="search" placeholder="Search..." />
              <img
                className="search-icon"
                alt="search"
                src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687679567/Search_icon_uhvo61.png"
              />
            </div>
            <img
              alt="vector"
              src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687680211/Vector_sf7el4.png"
            />
            <img
              className="avatar"
              alt="avatar"
              src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687680213/image_1_ahudgg.png"
            />
          </div>
        </div>
        <ul className="activity-card-list">
          {cardData.map(eachItem => (
            <ActivityCard eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
        <div className="line-graph-container">
          <h1 className="act-name">Activities</h1>
          <p className="date">
            May-June 2021
            <img
              className="arrow"
              alt="arrow"
              src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687688846/Vector_3_no0gym.png"
            />
          </p>
          <LineGraph />
        </div>
        <div className="pie-chart-calender">
          <div className="pie-chart-card">
            <div className="card-head">
              <h1 className="act-name">Top products</h1>
              <p className="date">
                May-June 2021
                <img
                  className="arrow"
                  alt="arrow"
                  src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687688846/Vector_3_no0gym.png"
                />
              </p>
            </div>

            <Piechart />
          </div>
          <div className="pie-chart-card">
            <div className="card-head">
              <h1 className="act-name">Today's schedule</h1>
              <p className="date">
                See All
                <img
                  className="arrow"
                  alt="arrow"
                  src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687688846/Vector_3_no0gym.png"
                />
              </p>
            </div>
            <div className="cal-timings">
              <p className="meet-name">Meeting with suppliers from Chennai</p>
              <p className="timings">14.00-15.00</p>
              <p className="timings">at Sunset Road, Kuta, Bali</p>
            </div>
            <div className="cal-timings">
              <p className="meet-name">Meeting with suppliers from Chennai</p>
              <p className="timings">14.00-15.00</p>
              <p className="timings">at Sunset Road, Kuta, Bali</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  renderNavigationBar = () => {
    const t = null

    return (
      <nav className="navbar">
        <div className="head-with-elements-container">
          <div>
            <h1 className="nav-head">Board.</h1>
            <ul className="list-container">
              <li className="nav-item active">
                <img
                  className="nav-icons"
                  alt="dashboard"
                  src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687675720/dashboard_icon_kazq1l.png"
                />
                Dashboard
              </li>
              <li className="nav-item">
                <img
                  className="nav-icons"
                  alt="dashboard"
                  src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687675785/transaction_icon_h4ef7t.png"
                />
                Transactions
              </li>
              <li className="nav-item">
                <img
                  className="nav-icons"
                  alt="dashboard"
                  src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687675843/schedule_icon_xeyi0o.png"
                />
                Schedules
              </li>
              <li className="nav-item">
                <img
                  className="nav-icons"
                  alt="dashboard"
                  src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687675794/user_icon_pxlcly.png"
                />
                Users
              </li>
              <li className="nav-item">
                <img
                  className="nav-icons"
                  alt="dashboard"
                  src="https://res.cloudinary.com/drrs7nq6r/image/upload/v1687675798/setting_icon_wroi5q.png"
                />
                Settings
              </li>
            </ul>
          </div>
          <ul className="list-container">
            <li className="nav-item">Help</li>
            <li className="nav-item">Contact Us</li>
          </ul>
        </div>
      </nav>
    )
  }

  render() {
    return (
      <div className="dashboard-and-nav-container">
        {this.renderNavigationBar()}
        {this.renderDashboard()}
      </div>
    )
  }
}

export default Dashboard
