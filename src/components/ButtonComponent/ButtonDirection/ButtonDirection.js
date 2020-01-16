import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './ButtonDirection.module.scss';
const ButtonDirection = memo (({ icon, content, notification }) => (
	<NavLink className={style.buttonDirection} to={`/${content}`} activeClassName={style.selected}>
		<span className={style.icon}><i className={`${icon ? icon : "fas fa-film"}`}></i></span>
		<span className={style.content}>Videos</span>
		{notification && <span className={style.notification}>29 new</span>}
	</NavLink>
))
ButtonDirection.propTypes = {
	icon: PropTypes.string,
	content: PropTypes.string,
	notification: PropTypes.string
}
ButtonDirection.defaultProps = {
	icon: '',
	content: '',
	notification: '',
}
export default ButtonDirection;
