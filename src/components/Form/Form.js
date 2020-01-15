import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Form.module.scss';
class Form extends Component {
	state = {
		keywords: ''
	}
	_handleChange = (e) => {
		e.persist();
		this.setState({
			keywords: e.target.value
		})
	}
	render() {
		const { onSubmitSearch } = this.props;
		const { keywords } = this.state;
		return (
			<form className={style.form} onSubmit={onSubmitSearch(keywords)}>
				<input type="text"
				name="q"
				className={style.formInput}
				placeholder="Search for videos, stars or authors"
				onChange={this._handleChange}
				/>
				<button type="submit" onClick={onSubmitSearch(keywords)}>
					<Link
					to={`/search/?q=${keywords}`}
					className={style.formSubmit}
					>
						<i className="fas fa-search"></i>
					</Link>
				</button>
			</form>
		)
	}
}
Form.propTypes = {
	onSubmitSearch: PropTypes.func
}
export default Form;
