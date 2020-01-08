import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import style from './Hint.module.scss';
class Hint extends PureComponent {
	_handleDelete(itemContent) {
		return () => {
			const list = JSON.parse(localStorage.getItem("searchedList"));
			const newList = list.filter(item => itemContent !== item);
			localStorage.setItem("searchedList",JSON.stringify(newList));
			console.log(localStorage.getItem('searchedList'))
		}
	}
	_renderList() {
		const list = JSON.parse(localStorage.getItem("searchedList"));
		return list.map(item => {
			return (
				<li className={style.item}>
					<div className="name">{item}</div>
					<a href="#" className="delete" onClick={this._handleDelete(item)}>Xóa</a>
				</li>
			)
		})
	}
	render() {
		return (
			<div className="Hint">
				<div className={style.content}>
					<ul className="Hint__list">
						{this._renderList()}
					</ul>
				</div>
			</div>
		)
	}
}
export default Hint;
