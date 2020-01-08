import React, { PureComponent } from "react";
import { getVideo, getVideoSearch, getVideoById } from "./axios/getVideo";
import LoadingPage from './containers/LoadingPage/LoadingPage';
import ErrorPage from './containers/ErrorPage/ErrorPage';
function getQuery(stringQuery, queryName) {
  const listQuery = stringQuery.substring(1).split("&");
  const queries = listQuery.map(query => {
    let pair = query.split("=");
    if (pair[0] === queryName) return pair[1];
    return undefined;
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
      videoTitle: "",
      channelTitle: "",
      publishedAt: "",
      imgSrcs: {},
      viewCount: 0,
      likeCount: 0,
      commentCount: 0
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
    const stringQuery = window.location.search;
    const querySearch = getQuery(stringQuery, "q");
    const queryWatch = getQuery(stringQuery, "v")
    this._handleGetVideo();
    this._handleGetVideoSearch(querySearch[0]);
    this._handleGetVideoById(queryWatch[0])
  }
  componentDidUpdate() {
    if(this.state.settings.darkMode) {
      document.getElementsByTagName("body")[0].style.background = "black;"
    }
  }

  //Toggle
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

  //Setting
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

  //Submit
  _handleSubmitSearch = (keywords) => {
    return () => {
    	console.log("A")
      this._handleGetVideoSearch(keywords);
    };
  };

  _handleSubmitComment = (content) => {
    console.log(content);
  }

  //
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

  // GET VIDEO
  _handleGetVideo = async () => {
    this.setState(state => {
      return {
        ...state,
        status: "loading"
      };
    });
    try {
      const data = await getVideo();
      this.setState(state => {
        return {
          ...state,
          status: "success",
          data: [...data],
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
  _handleGetVideoSearch = async (keywords) => {
    this.setState(state => {
      return {
        ...state,
        status: "loading",
        searchVideos: []
      }
    })
    try {
      const data = await getVideoSearch(keywords);
      this.setState(state => {
        return {
          ...state,
          status: "success",
          searchVideos: [...data]
        };
      });
    } catch(err) {
      this.setState(state => {
        return {
          ...state,
          msg: err
        }
      })
    }
  }
  _handleGetVideoById = async (videoId) => {
    this.setState(state => {
      return {
        ...state,
        status: "loading"
      }
    })
    try {
      const data = await getVideoById(videoId);
      const { channelTitle, channelId, title: videoTitle, thumbnails: imgSrcs, publishedAt, description} = data[0].snippet;
      const { viewCount, likeCount, dislikeCount, commentCount} = data[0].statistics;
      this.setState(state => {
        return {
          ...state,
          status: "success",
          watchingVideo: {
            channelTitle,
            channelId,
            videoTitle,
            imgSrcs,
            description,
            viewCount,
            likeCount,
            dislikeCount,
            commentCount
          }
        };
      });
    } catch(err) {
      this.setState(state => {
        return {
          ...state,
          msg: err
        }
      })
    }
  }

  _renderSwitch() {
  	const { status } = this.state;
  	switch (status) {
  		case "loading": return <LoadingPage />
  		case "success": return this.props.children
  		default: return <ErrorPage />
  	}
  }
  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          onSubmitSearch: this._handleSubmitSearch,
          onSubmitComment: this._handleSubmitComment,
          onClickToggleDarkMode: this._handleToggleDarkMode,
          onChooseOption: this._handleChooseOption,
          onClickToggleMenu: this._handleToggleMenu,
          onClickToggleAutoContinuing: this._handleToggleAutoContinuing,
          onClickWatchVideo: this._handleWatchVideo
        }}
      >
        {this._renderSwitch()}
      </AppContext.Provider>
    );
  }
}
export default AppProvider;
