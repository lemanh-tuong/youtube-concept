import React, { PureComponent } from 'react';

export const AppContext = React.createContext();

class AppProvider extends PureComponent {
	state = {
		openMenu: false,
    settings: {
    	darkMode: false
    }
  };
  sideBar = React.createRef();
  componentDidUpdate() {
    if(this.state.settings.darkMode) {
      document.getElementsByTagName("body")[0].style.background = "black;"
    }
  }
  _handleToggleMenu = () => {
  	this.sideBar.current.scrollTo(0,0);
  	console.log(this.sideBar.current)
    this.setState(state => {
      return {
        ...state,
        openMenu: !state.openMenu
      }
    })
  }
  _handleToggleDarkMode = () => {
    this.setState(state => {
      return {
        ...state,
        settings: {
          ...state.settings,
          darkMode: !state.settings.darkMode
        }
      };
    });
  };
  _handleToggleAutoContinuing = () => {
    this.setState(state => {
      return {
        ...state,
        autoContinuing: !state.autoContinuing
      }
    })
  }
  _handleSubmitComment(content) {
  	console.log(content)
  }
	render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          refSideBar: this.sideBar,
          onClickToggleMenu: this._handleToggleMenu,
          onClickToggleDarkMode: this._handleToggleDarkMode,
          onClickToggleAutoContinuing: this._handleToggleAutoContinuing,
          onSubmitComment: this._handleSubmitComment
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppProvider;
