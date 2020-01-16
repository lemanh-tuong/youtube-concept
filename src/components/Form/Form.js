import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import SuggestionBox from '../SuggestionBox/SuggestionBox';
import style from './Form.module.scss';
class Form extends Component {
	state = {
		searching: false,
		keywords: '',
		listSuggestion: [],
		submit: false
	}
	_handleChange = (e) => {
		e.persist();
		this.setState({
			keywords: e.target.value
		})
	}
	_handleToggleFocus = () => {
		this.setState({
			searching: !this.state.searching
		})
	}
	_handleSearch = () => {
		const { keywords } = this.state;
		const { onSubmitSearch } = this.props;
		const keywordsSearched = localStorage.getItem("searched") ? JSON.parse(localStorage.getItem("searched")) : [];
		console.log(keywordsSearched);
		const newList = keywordsSearched.concat([keywords]);
		localStorage.setItem("searched", JSON.stringify(newList));
		onSubmitSearch(keywords)();
		this.setState({
			listSuggestion: [...newList],
			submit: true
		})
	}
	_handleRemoveSuggestion = (suggestionContent) => {
		return () => {
			const suggestions = localStorage.getItem("searched");
			const listSuggestion = JSON.parse(suggestions);
			const newList = listSuggestion.filter(suggestion => suggestion !== suggestionContent);
			this.setState(state => {
				return {
					...state,
					listSuggestion: [...newList]
				}
			})
			localStorage.setItem("searched", JSON.stringify(newList));
		}
	}
	render() {
		const { onSubmitSearch } = this.props;
		const { searching, keywords, submit } = this.state;
		const suggestions = localStorage.getItem("searched");
		const listSuggestion = JSON.parse(suggestions);
		return (
			<React.Fragment>
				{submit && <Redirect to={`/search?q=${keywords}`}/>}
				<form className={style.form} onSubmit={this._handleSearch} autoComplete="off">
					<input type="text"
					name="q"
					className={style.formInput}
					placeholder="Search for videos, stars or authors"
					onChange={this._handleChange}
					onFocus={this._handleToggleFocus}
					onBlur={this._handleToggleFocus}
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
				<div className={style.box}>
					{ searching && <SuggestionBox listSuggestion={listSuggestion} onEventClickDelete={this._handleRemoveSuggestion} onEventClickSubmit={onSubmitSearch}/>}
				</div>
			</React.Fragment>
		)
	}
}
Form.propTypes = {
	onSubmitSearch: PropTypes.func
}
export default Form;
