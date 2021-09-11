import React, { useEffect, useState } from 'react';
import './Home.css';
import useReactSimpleMatchMedia from 'react-simple-matchmedia';
import Navbar from '../Header/Navbar';
import GiphyView from '../Giphy/GiphyView';

import useLocalStorage from '../../useLocalStorage';
import UploadGif from '../UploadGif/UploadGif';

function Home(props) {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const [search, setSearch] = useState('');
  const [searchSortType, setSearchSortType] = useState('relevant');
  const [giphyViewType, setGiphyViewType] = useState('trending');
  const [prevGiphyViewType, setPrevGiphyViewType] = useState('');
  const [layout, setLayout] = useLocalStorage('grid_layout', 3);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const isMobile = useReactSimpleMatchMedia('phone');
  const apiKey = '';

  const setFavorite = (gifId) => {
    const initFavoritesData = favorites;

    if (initFavoritesData.includes(gifId)) {
      const index = initFavoritesData.indexOf(gifId);
      if (index > -1) {
        initFavoritesData.splice(index, 1);
      }
    } else {
      initFavoritesData.push(gifId);
    }
    setFavorites(initFavoritesData);
  };

  return (
    <div>
      <div>
        <Navbar
          search={search}
          setSearch={setSearch}
          giphyViewType={giphyViewType}
          setGiphyViewType={setGiphyViewType}
          setShowUploadModal={setShowUploadModal}
          prevGiphyViewType={prevGiphyViewType}
          setPrevGiphyViewType={setPrevGiphyViewType}
          layout={layout}
          setLayout={setLayout}
          searchSortType={searchSortType}
          setSearchSortType={setSearchSortType}
          favorites={favorites}
          isMobile={isMobile}
        />
        <div id="grid_container">
          <GiphyView
            apiKey={apiKey}
            giphyViewType={giphyViewType}
            search={search}
            favorites={favorites}
            setFavorite={setFavorite}
            isMobile={isMobile}
            layout={layout}
            searchSortType={searchSortType}
          />
        </div>
        <UploadGif
          setGiphyViewType={setGiphyViewType}
          setFavorite={setFavorite}
          apiKey={apiKey}
          show={showUploadModal}
          setShowUploadModal={setShowUploadModal}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;
