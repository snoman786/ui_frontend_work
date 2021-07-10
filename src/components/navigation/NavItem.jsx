import React from 'react';
import classes from './NavItem.module.css';
import NavLink from 'react-router-dom';

const NavItem = (props) => {
   return(
     <li className={classes.NavItem}>
    <NavLink exact to={props.link} />
    <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
    </a>
</li>)
}

export default NavItem;