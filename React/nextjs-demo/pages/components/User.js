import React from 'react';

const User = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
            <style jsx>{`
                    div{
                        border : 1px solid #eee;
                        padding: 20px;
                        box-shadow: 0 2px 3px #eee;
                        margin : 10px auto;
                        text-align: center
                    }
                `}
            </style>
        </div>
    )
}

export default User;