import React, { Component } from 'react';
import ButtonDirection from '../../components/ButtonComponent/ButtonDirection/ButtonDirection';
import style from './ButtonGroup.module.scss';
class ButtonGroup extends Component {
	_renderButton({link, content, notification}, index) {
		return <li key={index} className={style.button}><ButtonDirection link={link} content={content} notification={notification}/></li>
	}
	_renderListButton(list) {
		return list.map((details, index) => this._renderButton(details, index))
	}
	render() {
		const { listBtn } = this.props
		return (
			<div className={style.buttonGroup}>
				<ul className={style.listButton}>
					{this._renderListButton(listBtn)}
				</ul>
			</div>
		)
	}
}
export default ButtonGroup;
