import React, { PureComponent } from "react";
import getVideo from "./axios/getVideo";
function getQuery(stringQuery, queryName) {
  const listQuery = stringQuery.substring(1).split("&");
  const queries = listQuery.map(query => {
    let pair = query.split("=");
    if (pair[0] === queryName) return pair[1];
    return;
  });
  return queries.filter(query => query !== undefined);
}
function checkTitleVideo(videoTitle, query) {
  return videoTitle.toLowerCase().includes(query);
}
function filterVideo(listVideo, query) {
  return listVideo.filter(video => checkTitleVideo(video.snippet.title, query));
}
export const AppContext = React.createContext();
class AppProvider extends PureComponent {
  state = {
    status: "",
    data: [],
    msg: "",
    searchVideos: [],
    watchingVideo: {
      videoTitle: "A",
      publishedAt: "5 thg 3, 2017",
      imgSrcs: {
        maxres: {
          url: "https://i.ytimg.com/vi/DQGSZTxLVrI/maxresdefault.jpg"
        }
      }
    },
    openMenu: false,
    autoContinuing: false,
    settings: {
      darkMode: false,
      fontSize: "",
      fontStyle: ""
    }
  };
  componentDidMount() {
    this._handleGetVideo();
  }
  componentDidUpdate() {
    if(this.state.settings.darkMode) {
      document.getElementsByTagName("body")[0].style.background = "black;"
    }
  }
  _handleToggleMenu = () => {
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
  _handleChooseOption = (type, option) => {
    return () => {
      if (type === "font-size") {
        this.setState(state => {
          return {
            ...state,
            settings: {
              ...state.settings,
              fontSize: option.toLowerCase()
            }
          };
        });
      }
      if (type === "font-style") {
        this.setState(state => {
          return {
            ...state,
            settings: {
              ...state.settings,
              fontStyle: option.toLowerCase()
            }
          };
        });
      }
    };
  };
  _handleSubmit = (keyword, ref) => {
    return () => {
      const { data } = this.state;
      const query = keyword;
      const newListVideo = filterVideo(data, query);
      console.log(newListVideo);
      this.setState(state => {
        return {
          ...state,
          searchVideos: [...newListVideo]
        };
      });
      ref.current.value = "";
    };
  };
  _handleWatchVideo = (videoDetails) => {
    const { channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId } = videoDetails
    return () => {
      this.setState(state => {
        return {
          ...state,
          watchingVideo: {
            ...state.watchingVideo,
            channelTitle,
            channelId,
            videoTitle,
            videoId,
            publishedAt,
            imgSrcs,
            description
          }
        }
      })
    }
  }
  _handleGetVideo = async () => {
    this.setState(state => {
      return {
        ...state,
        status: "loading"
      };
    });
    try {
      const data = await getVideo();
      const stringQuery = window.location.search;
      const query = getQuery(stringQuery, "q");
      const newListVideo = filterVideo(data, query);
      this.setState(state => {
        return {
          ...state,
          status: "success",
          data: [...data],
          searchVideos: [...newListVideo]
        };
      });
    } catch (err) {
      this.setState(state => {
        return {
          ...state,
          msg: err,
          status: "error"
        };
      });
    }
  };
  render() {
    console.log(this.state)
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          onSubmit: this._handleSubmit,
          onClickToggleDarkMode: this._handleToggleDarkMode,
          onChooseOption: this._handleChooseOption,
          onClickToggleMenu: this._handleToggleMenu,
          onClickToggleAutoContinuing: this._handleToggleAutoContinuing,
          onClickWatchVideo: this._handleWatchVideo
        }}
      >
        {this.state.data && this.props.children}
      </AppContext.Provider>
    );
  }
}
export default AppProvider;
