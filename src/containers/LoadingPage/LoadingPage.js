import React, { PureComponent } from 'react';
import style from './LoadingPage.module.scss';
class LoadingPage extends PureComponent {
	render() {
		return (
			<div className={style.LoadingPage}>
				<div class={style.loader}>
	        <div class={style.text}>Loading</div>
	        <div class={style.dots}>
	          <div />
	          <div />
	          <div />
	          <div />
	        </div>
	      </div>
			</div>
		)
	}
}
export default LoadingPage
