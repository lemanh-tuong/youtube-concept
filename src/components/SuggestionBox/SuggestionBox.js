import React, { PureComponent } from 'react';

class SuggestionBox extends PureComponent {
	_renderSuggestionBox = () => {
		return (
			<div className={style.suggestionBox}>
				<div className={style.suggestionContent}>
					<ul className={style.listSuggestion}>
						{this._renderListSuggestion()}
					</ul>
				</div>
			</div>
		)
	}
	_renderListSuggestion = () => {
		const suggestions = localStorage.getItem("searched");
		const listSuggestion = JSON.parse(suggestions);
		return listSuggestion.map((suggestion, index) => this._renderSuggestion(suggestion, index))
	}
	_renderSuggestion = (content, key) => {
		return (
			<div className={style.suggestion}  key={key}>
				<Link to={`/search?q=${content}`}>{content}</Link>
				<button className={style.delete} onClick={this._handleRemoveSuggestion(content)}>Xóa</button>
			</div>
		)
	}
	render() {
		return null;
	}
}
