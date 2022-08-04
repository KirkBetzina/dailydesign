import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className='close'>Exit</div>
            <h3>Where do you want to play</h3>
            <div className='radio'>
                <input type='radio' value='Bergen' name='city' /> Bergen
                <input type='radio' value='Oslo' name='city' /> Oslo
            </div>
        </div>
    )
};
export default Header