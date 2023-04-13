import React from 'react'
import { Icon } from 'semantic-ui-react';
import imageLogo from "./images/shorts.png";

function Dashboard() {
  return (
    <div style={{ width: "25%", display: "flex", flexDirection: "column", marginTop: 30, marginRight: "30px" }}>
      <div style={{ width: "50%", height: "8vh", textAlign: 'center' }}>
        <span style={{ textAlign: "left", marginRight: 50 }}><Icon name='home' size='large' /></span>
        <span style={{ fontWeight: "bold", fontSize: "larger" }}>Home</span>
      </div>
      <div style={{ width: "50%", height: "8vh", textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <span style={{ textAlign: "left", }}><div style={{ height: "65%", width: "20%" }}><img style={{ height: "25px", width: "25px", objectFit: 'contain' }} src={imageLogo} alt='shorts' /></div></span>
        <span style={{ fontWeight: "bold", fontSize: "larger" }}>Shorts</span>
      </div>
      <div style={{ width: "60%", height: "8vh", textAlign: 'center' }}>
        <span style={{ textAlign: "left", marginRight: 20 }}><Icon name='caret square right outline' size='large' /></span>
        <span style={{ fontWeight: "bold", fontSize: "15px" }}>Subscription</span>
      </div >
      <div style={{ width: "52%", height: "8vh", textAlign: 'center' }}>
        <span style={{ textAlign: "left", marginRight: 20 }}><Icon name='list' size='large' /></span>
        <span style={{ fontWeight: "bold", fontSize: "18px" }}>Library</span>
      </div>
      <div style={{ width: "50%", height: "8vh", textAlign: 'center' }}>
        <span style={{ textAlign: "left", marginRight: 20 }}><Icon name='repeat' size='large' /></span>
        <span style={{ fontWeight: "bold", fontSize: "larger" }}>History</span>
      </div>
      <div style={{ width: "52%", height: "8vh", textAlign: 'center' }}>
        <span style={{ textAlign: "left", marginRight: 20 }}><Icon name='clock outline' size='large' /></span>
        <span style={{ fontWeight: "bold", fontSize: "13px" }}>Watch Lator</span>
      </div>
      <div style={{ width: "52%", height: "8vh", textAlign: 'center' }}>
        <span style={{ textAlign: "left", marginRight: 20 }}><Icon name='thumbs up' size='large' /></span>
        <span style={{ fontWeight: "bold", fontSize: "13px" }}>Liked videos</span>
      </div>
      <div style={{ width: "60%", height: "8vh", textAlign: 'center' }}>
        <span style={{ textAlign: "left", marginRight: 20 }}><Icon name='youtube play' size='large' color='red' /></span>
        <span style={{ fontWeight: "bold", fontSize: "13px" }}>YouTube Premium</span>
      </div>
      <div style={{ width: "60%", height: "8vh", textAlign: 'center' }}>
        <span style={{ textAlign: "left", marginRight: 20 }}><Icon name='play circle' size='large' color='red' /></span>
        <span style={{ fontWeight: "bold", fontSize: "13px" }}>YouTube Music</span>
      </div>
      <div style={{ width: "52%", height: "8vh", textAlign: 'center' }}>
        <span style={{ textAlign: "left", marginRight: 20 }}><Icon name='caret square right' size='large' color='red' /></span>
        <span style={{ fontWeight: "bold", fontSize: "13px" }}>YouTube Kids</span>
      </div>
    </div>
  )
}

export default Dashboard