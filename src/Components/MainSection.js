import React from 'react';
import '../App.css';
import { Button } from './Button';
import './MainSection.css';

function MainSection() {
    return (
        <div className='main-container'>
            <video src="/videos/PMT.mp4" autoPlay loop muted />
            <h1>Check your complaincy report</h1>
            <p>What are you waiting for?</p>
            <div className="main-btns">

                <Button className ='btns' buttonStyle ='brt--outline' buttonSize='btn--large'>GET STARTED</Button>

                <Button className ='btns' buttonStyle ='brt--primary' buttonSize='btn--large'>WATCH TRAILER <i className='far fa-play-circle'/></Button>

            </div>
        
            
        </div>
    )
}

export default MainSection
