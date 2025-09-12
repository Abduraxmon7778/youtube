import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import pd from '../../assets/pd.jpg'
import Mr from '../../assets/Mr.jpg'
import tom from '../../assets/tom.png'
import five from '../../assets/5.jpg'
import cameron from '../../assets/people.jpg'
import sports from '../../assets/sports.png'

const Sidebar = ({sidebar}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      <div className="sortcut-links">
        <div className="side-link">
            <img src={home} alt="" /><p>Home</p>
        </div>
        <div className="side-link">
            <img src={game_icon} alt="" /><p>Gaming</p>
        </div>
        <div className="side-link">
            <img src={automobiles} alt="" /><p>Automobiles</p>
        </div>  
        <div className="side-link">
            <img src={sports} alt="" /><p>Sports</p>
        </div>
        <div className="side-link">
            <img src={entertainment} alt="" /><p>Entertainment</p>
        </div>
        <div className="side-link">
            <img src={tech} alt="" /><p>Technology</p>
        </div>
        <div className="side-link">
            <img src={music} alt="" /><p>Music</p>
        </div>
        <div className="side-link">
            <img src={blogs} alt="" /><p>Blogs</p>
        </div>
        <div className="side-link">
            <img src={news} alt="" /><p>News</p>
        </div>
        <hr/>
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
            <img src={pd} alt="" /> <p>PewDiePie</p>
        </div>
        <div className="side-link">
            <img src={Mr} alt="" /> <p>MrBeast</p>
        </div>
        <div className="side-link">
            <img src={tom} alt="" /> <p>Justin Bieber</p>
        </div>
        <div className="side-link">
            <img src={five} alt="" /> <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
            <img src={cameron} alt="" /> <p>Nas Daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
