import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppProvider';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import  ToggleButton from '../../components/ButtonComponent/ToggleButton/ToggleButton';
import Channel from '../../components/Channel/Channel';
import Logo from '../../components/Logo/Logo';
import Overlay from '../../components/Overlay/Overlay';
import style from './SideBar.module.scss';
const a = [
	{
		link: '/video',
		content: 'Videos',
	},
	{
		link: '/movie',
		content: 'Movies and Shows',
	},
	{
		link: '/Premium',
		content: 'Premium Contents'
	},
	{
		link: '/live',
		content: 'Live',
	}
]
const b = [
	{
		link: '/subcribtions',
		content: 'Subcribtions',
		notification: '29 news'
	},
	{
		link: '/movie',
		content: 'Movies and Shows',
	},
	{
		link: '/Premium',
		content: 'Premium Contents'
	},
	{
		link: '/live',
		content: 'Live',
	}
]
const c = [
	{
		link: '/Premium',
		content: 'Premium Contents'
	},
	{
		link: '/live',
		content: 'Live',
	}
]
class SideBar extends Component {
	render() {
		const { openMenu, onClickToggleMenu } = this.props
		return (
			<div className={`${style.sideBar} ${openMenu ? style.open : ''}`}>
				<div className={style.content}>
					<div className={style.header}>
						<div className={style.brand}>
							<Link to="/">
								<Logo />
							</Link>
						</div>
						<div className={style.channel}>
							<Channel status="busy" />
						</div>
					</div>
					<div className={style.body}>
						<ButtonGroup listBtn={a}/>
						<ButtonGroup listBtn={b}/>
						<ButtonGroup listBtn={c}/>
						<AppContext.Consumer>
							{({settings, onClickToggleDarkMode}) => {
								return (
									<div className={style.toggleButton}>
										<div className="mb-1">
											<ToggleButton active={settings.darkMode} onEventClick={onClickToggleDarkMode} />
										</div>
										<p>Light {settings.darkMode ? "ON" : "OFF"}</p>
									</div>
								)
							}}
						</AppContext.Consumer>
					</div>
				</div>
				{openMenu && <Overlay onClick={onClickToggleMenu}/>}
			</div>
		)
	}
}
SideBar.propTypes = {
	openMenu: PropTypes.bool,
	onClickToggleMenu: PropTypes.func
}
export default SideBar