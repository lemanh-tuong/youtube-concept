import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import style from './NotFoundPage.module.scss';
class NotFoundPage extends PureComponent {
	render() {
		return (
			<div className={style.NotFoundPage}>
				<h1 className={style.title}>404 ERROR</h1>
		        <div class={style.error}>
		            <img
		            alt="404"
		            src="https://4.bp.blogspot.com/-4i1o7vKae-A/XJEDPZGxIiI/AAAAAAAAAyA/kqx_XrSGjEUH_sgNlJQdv8zqT2HVVWGRgCLcBGAs/s1600/error.png"
		            />
		            <h1 className={style.title}>Oops !</h1>
		            <p className={style.message}>we are enable to find your page</p>

		            <Link to='/' className={style.link}>
		           	 <div class={style.btn}>Go home</div>
		            </Link>
		        </div>
			</div>
		)
	}
}
export default NotFoundPage;
