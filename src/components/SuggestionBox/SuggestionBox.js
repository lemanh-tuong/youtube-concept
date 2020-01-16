import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './SuggestionBox.module.scss';
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
		const { listSuggestion, onEventClickDelete, onEventClickSubmit } = this.props;
		return listSuggestion.map((suggestion, index) => this._renderSuggestion(suggestion, onEventClickDelete, onEventClickSubmit, index))
	}
	_renderSuggestion = (content, onEventClickDelete, onEventClickSubmit, key) => {
		return (
			<div className={style.suggestion}  key={key}>
				<Link to={`/search?q=${content}`} onClick={onEventClickSubmit(content)}>{content}</Link>
				<button className={style.delete} onClick={onEventClickDelete(content)}>Xóa</button>
			</div>
		)
	}
	render() {
		return this._renderSuggestionBox();
	}
}
SuggestionBox.propTypes = {
	listSuggestion: PropTypes.array,
	onEventClickDelete: PropTypes.func,
	onEventClickSubmit: PropTypes.func,
}
SuggestionBox.defaultProps = {
	onEventClickDelete: () => null,
	onEventClickSubmit: () => null,
	listSuggestion: []
}
export default SuggestionBox
