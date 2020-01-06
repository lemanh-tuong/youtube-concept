import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './ButtonDirection.module.scss';
class ButtonDirection extends Component {
	render() {
		const { link, icon, content, notification } = this.props;
		return (
			<NavLink className={style.buttonDirection} to={`/${content}`} activeClassName={style.selected}>
				<span className={style.icon}><i className="fas fa-film"></i></span>
				<span className={style.content}>Videos</span>
				{notification && <span className={style.notification}>29 new</span>}
			</NavLink>
		)
	}
}
ButtonDirection.propTypes = {
	link: PropTypes.string,
	icon: PropTypes.string,
	content: PropTypes.string,
	notification: PropTypes.string
}
export default ButtonDirection;