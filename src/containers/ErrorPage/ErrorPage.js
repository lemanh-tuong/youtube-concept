import React, { PureComponent } from 'react';
import style from './ErrorPage.module.scss';
class ErrorPage extends PureComponent {
	render() {
		return (
			<div className={style.ErrorPage}>
				<div className={style.message}>
					<p>Something</p>
					<p>
						Went 
					</p>
					<div className={style.wrong}>
						<div className={style.wrongText}></div>
						<div className={style.wrongText}></div>
						<div className={style.wrongText}></div>
					</div>
				</div>
			</div>
		)
	}
}
export default ErrorPage;