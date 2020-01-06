import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Form.module.scss';
class Form extends Component {
	input = React.createRef();
	state = {
		keywords: ''
	}
	_handleChange = () => {
		this.setState({
			keywords: this.input.current.value
		})
	}
	render() {
		const { onSubmit } = this.props;
		const { keywords } = this.state;
		return (
			<form className={style.form}>
				<input type="text" 
				ref={this.input} 
				className={style.formInput} 
				placeholder="Search for videos, stars or authors" 
				onChange={this._handleChange}
				/>
				<Link 
				to={`/search/?q=${keywords}`}
				className={style.formSubmit} 
				onClick={onSubmit(keywords, this.input)}>
					<i className="fas fa-search"></i>
				</Link>
			</form>
		)
	}
}
Form.propTypes = {
	onSubmit: PropTypes.func
}
export default Form;