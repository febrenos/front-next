import React, {useState} from 'react'
// import styled from 'styled-components';

import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserAlt, faChevronRight, faPaperPlane, faCompass, faBell, faGear, faBookmark, faChartSimple, faRightFromBracket, faHome } from '@fortawesome/free-solid-svg-icons';//faChevronCircleRight
import './style.css'

export default function(props){
    return(
        <div>
            <ul className={props.isOpen ? 'menuOpen' : 'menuClose'}>
                <li onClick={props.onClick}><FontAwesomeIcon className="icon" icon={faChevronRight} id={props.isOpen ? 'iMenuOpen' : 'iMenuClose'}/></li>
                <li><FontAwesomeIcon className="icon" icon={faHome}/><a>Home</a></li>
                <li><div className="backgroundI"><FontAwesomeIcon className="icon" icon={faUserAlt}/></div><a>Profile</a></li>
                <li><FontAwesomeIcon className="icon" icon={faCompass}/><a>To explore</a></li>
                <li><FontAwesomeIcon className="icon" icon={faPaperPlane}/><a>Chat-Bot</a></li>
                <li><FontAwesomeIcon className="icon" icon={faBell}/><a>Notifications</a></li>
                <li><FontAwesomeIcon className="icon" icon={faBookmark}/><a>Bookmarks</a></li>
                <li><FontAwesomeIcon className="icon" icon={faChartSimple}/><a>Dashboard</a></li>
                <li><FontAwesomeIcon className="icon" icon={faGear}/><a>Settings</a></li>
                <li><FontAwesomeIcon className="icon" icon={faRightFromBracket}/><a>Log out</a></li>
            </ul>
        </div>   
    )
}
