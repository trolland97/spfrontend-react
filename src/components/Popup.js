import React from 'react'


function Popup(props) {

    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <span className='close-btn' onClick={() => props.setTrigger(false)}><i class="fa-solid fa-xmark"></i></span>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup