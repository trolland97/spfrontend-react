import React from 'react';

const Button = ({styleClass, value, link}) => {
    return <a className={styleClass} href={link}>{value}</a>
};


export default Button;