import React from 'react';
import PropTypes from 'prop-types';
import style from './Overlay.module.scss'
class Overlay extends React.Component {
	shouldComponentUpdate() {
		return false;
	}
	componentDidMount() {
		this._handleResize();
		window.addEventListener("resize", this._handleResize)
	}
	componentWillUnmount() {
		window.removeEventListener("resize", this._handleResize);
		document.getElementsByTagName("body")[0].style.overflow = "initial"
	}
	_handleResize() {
		if(window.innerWidth <= 768) {
			document.getElementsByTagName("body")[0].style.overflow = "hidden"
		}
		else {
			document.getElementsByTagName("body")[0].style.overflow = "initial"
		}
	}
	render() {
		const { onClick } = this.props
		return (
			<div className={style.overlay} onClick={onClick}/>
		)
	}
}
Overlay.propTypes = {
	onClick: PropTypes.func
}
export default Overlay;