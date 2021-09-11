import {Grid} from "@giphy/react-components";
import React, {useEffect, useState} from "react";
import {GiphyFetch} from "@giphy/js-fetch-api";
import './GiphyFetch.css'
import {BiCodeCurly} from "react-icons/bi";
import {FaRegUserCircle} from "react-icons/fa";
import {MdFavorite, MdTitle} from "react-icons/md";
import {IoMdHeartDislike} from "react-icons/io";

function GiphyView (props){
  const gf = new GiphyFetch(props.apiKey)


  const Overlay = ({ gif, isHovered }: GifOverlayProps) => {
    const [favorite, setFavorite] = useState(false);
    const [infoItemShow, setInfoItemShow] = useState('')

    useEffect(()=>{
      if(props.favorites.includes(gif.id))
        setFavorite(true)
      else
        setFavorite(false)
    })

    const handlerSetFavorite = (event) => {
      setFavorite(!favorite)
      props.setFavorite(event.currentTarget.id)
    }

    const handleInfoItemClick = (event) => {
      if (infoItemShow === event.currentTarget){
        setInfoItemShow('')
        event.currentTarget.classList.remove("show")
      }
      else if (infoItemShow !== ''){
        infoItemShow.classList.remove("show")
        event.currentTarget.className += " show"
        setInfoItemShow(event.currentTarget)
      }
      else {
        event.currentTarget.className += " show"
        setInfoItemShow(event.currentTarget)
      }
    }

    return (
      <div className="gif_overlay">
        {
          isHovered || props.isMobile ?
            <div>
              <div id={gif.id} className="gif_favorite" onClick={handlerSetFavorite}>
                {
                  props.favorites.includes(gif.id) ?
                  <IoMdHeartDislike className="gif_favorite-icon"/> :
                  <MdFavorite className="gif_favorite-icon"/>
                }

              </div>
              <div className={"gif_info"}>
                {gif.title ?
                  <div className={"gif_info-item"} onClick={handleInfoItemClick}>
                    <span>{gif.title}</span>
                    <MdTitle className={"gif_title gif_info-icon"}/>
                  </div> : ''
                }
                {gif.username ?
                  <div className={"gif_info-item"} onClick={handleInfoItemClick}>
                    <span>{gif.username}</span>
                    <FaRegUserCircle className={"gif_user gif_info-icon"}/>
                  </div> : ''
                }
                {gif.url ?
                  <div className={"gif_info-item"} onClick={handleInfoItemClick}>
                    <span><a className="link-light" href={gif.url}>{gif.url}</a></span>
                    <BiCodeCurly className={"gif_url gif_info-icon"}/>
                  </div> : ''
                }

                {/*<div className={"gif_info-item"}>*/}
                {/*  <span>{gif.create_datetime}</span>*/}
                {/*  <IoTime className={"gif_date gif_info-icon"}/>*/}
                {/*</div>*/}
              </div>
            </div>
            : ''
              }
      </div>
    )
  }

  const gifFetch = (offset: number) => {
    if (props.search.length > 0)
      return gf.search(props.search, {offset, limit: 20, sort:props.searchSortType})
    if (props.giphyViewType === 'favorites')
      return gf.gifs(props.favorites)
    if (props.giphyViewType === 'trending')
      return gf.trending({offset, limit: 20})
  }


  return (
    <Grid key={Math.floor(Math.random() * 100)} width={props.isMobile ? window.innerWidth : 1000} columns={props.isMobile ? 1 : parseInt(props.layout)} fetchGifs={gifFetch} overlay={Overlay} noLink={true}/>
  )
}

export default GiphyView