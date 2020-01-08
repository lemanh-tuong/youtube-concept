import React, { PureComponent } from 'react';
import ToggleButton from '../../components/ButtonComponent/ToggleButton/ToggleButton';
import style from './SettingPage.module.scss';
const listOptions = [
  {
    name: "Comments on a shot",
    id: 1
  },
  {
    name: "Mentoins",
    id: 2
  },
  {
    name: "Recieve invitations to invite new users",
    id: 3
  },
  {
    name: "Someone accepts my invitation",
    id: 4
  },
  {
    name: "Anyone follow me",
    id: 5
  }
];
class SettingPage extends PureComponent{
	_renderTitle(titleMd, titleSm) {
    return (
      <div className="main__body__title">
        <div className={style.titleMd}>{titleMd}</div>
        <div className={style.titleSm}>{titleSm}</div>
      </div>
    );
  }
  _renderOption(optionName, key) {
    return (
      <div className={style.option} key={key}>
        <div className={style.optionContent}>
          <div className={style.optionName}>{optionName}</div>
          <div className={style.optionButton}>
            <ToggleButton />
          </div>
        </div>
      </div>
    );
  }
  _renderListOption(listOptions) {
    return listOptions.map(option =>
      this._renderOption(option.name, option.id)
    );
  }
  _renderOptionSection() {
    return (
      <div className="OptionSection">
        <div className={style.optionHeader}>{this._renderTitle("Activity Notification", "Email me when")}</div>
        <div className={style.optionBody}>{this._renderListOption(listOptions)}</div>
      </div>
    );
  }
	render() {
		return (
			<div className={style.SettingPage}>
        <div className={style.container}>
          <div className={style.header}>
            <div className={style.title}>
              <div className={style.titleBig}>E-mail Notification</div>
            </div>
          </div>
          <div className={style.body}>
            <div className={style.bodyContent}>
              <div className="row">
                <div className={style.col6}>{this._renderOptionSection()}</div>
                <div className={style.col6}>{this._renderOptionSection()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}
export default SettingPage;
