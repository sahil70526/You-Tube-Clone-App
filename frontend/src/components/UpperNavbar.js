import React from 'react'
import { Icon } from 'semantic-ui-react'
import "./upperNav.css"
function UpperNavbar() {
    return (
        <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: 'space-between', marginTop: "20px", padding: 4 }}>
            {/* Code for first two blocks */}
            <div>
                <div style={{ width: "140%", marginLeft: "20px" }}>
                    <Icon name='bars' size='large' />
                    <span style={{ marginLeft: "20px" }}>
                        <Icon name='youtube' color='red' size='big' />
                    </span>
                    <span style={{ fontSize: 20, fontWeight: "bold" }}>YouTube</span>
                </div>
            </div>

            <div style={{ width: "40%", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                <div style={{ width: "90%" }}>
                    <input type='text' placeholder='Search...' className='inputBar' />
                </div>
                <div>
                    <Icon name='microphone' size='large' />
                </div>
            </div>

            <div style={{ width: "15%", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }} >
                <div><Icon name='video camera' size='large' /></div>
                <div><Icon name='bell outline' size='large' /></div>
                <div>
                    <Icon name='user circle' size='big' />
                </div>
            </div>
        </div>

    )
}

export default UpperNavbar