import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import style from './FormComment.module.scss';
class FormComment extends PureComponent {
	state = {
		keywords: '',
		focus: false,
	}
	input = React.createRef();
	_handleChange = (e) => {
		e.persist();
		this.setState(state => {
			return {
				...state,
				keywords: e.target.value
			}
		})
	}
	_handleFocus = () => {
		this.setState(state => {
			return {
				...state,
				focus: true
			}
		})
	}
	_handleUnFocus = (e) => {
		e.preventDefault();
		this.setState(state => {
			return {
				...state,
				focus: false
			}
		})
	}
	_handleSubmit = (e) => {
		e.preventDefault();
		this.input.current.value = '';
		this.props.onEventSubmit(this.state.keywords);
		this.setState(state => {
			return {
				...state,
				keywords: '',
			}
		})
	}
	render() {
		const { keywords, focus } = this.state;
		const { type, onEventClick } = this.props
		return (
			<div className={style.FormComment}>
				<div className={style.formContent}>
					<div className={style.avatar}>
						{type === "reply" ? <Avatar size="small" /> :<Avatar size="medium" />}
					</div>
					<div className={style.main}>
						<form>
							<input ref={this.input} type="text" className={style.formInput} onChange={this._handleChange} onFocus={this._handleFocus}/>
							<div className={`${focus ? style.footer : style.disable}`}>
								<div className={style.title}>
									
								</div>
								<div className={style.buttonGroup}>
									<button onClick={onEventClick ? onEventClick : this._handleUnFocus}>Hủy</button>
									<button onClick={this._handleSubmit} className={`${keywords ? style.able  : style.unable}`}>
										{type === "reply" ? "Phản hồi" : "Bình luận"}
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
FormComment.propTypes = {
	type: PropTypes.string,
	onEventClick: PropTypes.func,
	onEventSubmit: PropTypes.func
}
export default FormComment;