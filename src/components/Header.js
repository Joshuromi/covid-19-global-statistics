import React from 'react';

const Header = (props) => {
    return (
        <div>
            <br />
                <h2 className="text-center">{props.head}</h2>
            <br />
        </div>
    )
}

export default Header;