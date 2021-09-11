import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineFieldTime, AiOutlineLink } from 'react-icons/ai';
import { BsFillGrid3X3GapFill, BsFillGridFill, BsSquareFill } from 'react-icons/bs';
import { IoSearchSharp } from 'react-icons/io5';

function Navbar(props) {
  const [navbarShow, setNavbarShow] = useState(false);

  const handleGiphyViewChange = (event) => {
    if (event.target.id === 'favorites' && props.favorites.length === 0) alert('You don\'t have any favorites');
    else if (props.giphyViewType !== event.target.id) {
      props.setPrevGiphyViewType(props.giphyViewType);
      props.setGiphyViewType(event.target.id);
      props.setSearch('');
      setNavbarShow(false);
    }
  };

  const handleSearchChange = (event) => {
    props.setSearch(event.target.value);
    if (event.target.value > 0) {
      if (props.giphyViewType !== '') {
        props.setPrevGiphyViewType(props.giphyViewType);
        props.setGiphyViewType('');
      }
    } else {
      props.setGiphyViewType(props.prevGiphyViewType);
    }
  };

  const handleShowUploadModal = () => {
    props.setShowUploadModal(true);
  };

  const handleLayoutChange = (event) => {
    props.setLayout(event.currentTarget.id);
  };

  const handleSortChange = (event) => {
    props.setSearchSortType(event.currentTarget.id);
  };

  const navbarToggle = () => {
    setNavbarShow(!navbarShow);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <button className="navbar-toggler" type="button" onClick={navbarToggle}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse justify-content-between${navbarShow ? ' show' : ''}`} id="navbarSupportedContent">
          <div className="navbar-nav">
            <a className={`nav-item nav-link${props.giphyViewType === 'trending' ? ' active' : ''}`} id="trending" onClick={handleGiphyViewChange}>Trending</a>
            <a className={`nav-item nav-link${props.giphyViewType === 'favorites' ? ' active' : ''}`} id="favorites" onClick={handleGiphyViewChange}>Favorites</a>
            <a className="nav-item nav-link" id="upload" onClick={handleShowUploadModal}>Upload</a>
          </div>
          {!props.isMobile
            ? (
              <div className="grid_layout">
                <div
                  className={`grid_layout-item${parseInt(props.layout) === 1 ? ' active' : ''}`}
                  id="1"
                  onClick={handleLayoutChange}
                >
                  <BsSquareFill className="grid_layout-icon" />
                </div>
                <div
                  className={`grid_layout-item${parseInt(props.layout) === 2 ? ' active' : ''}`}
                  id="2"
                  onClick={handleLayoutChange}
                >
                  <BsFillGridFill className="grid_layout-icon" />
                </div>
                <div
                  className={`grid_layout-item${parseInt(props.layout) === 3 ? ' active' : ''}`}
                  id="3"
                  onClick={handleLayoutChange}
                >
                  <BsFillGrid3X3GapFill className="grid_layout-icon" />
                </div>
              </div>
            ) : ''}
          <form className="form-inline search">
            { props.search !== '' && !props.isMobile
              ? (
                <div className="sort_type">
                  <div className={`sort_type-item${props.searchSortType === 'recent' ? ' active' : ''}`} id="recent" onClick={handleSortChange} title="Recent">
                    <AiOutlineFieldTime className="sort_type-icon" />
                  </div>
                  <div className={`sort_type-item${props.searchSortType === 'relevant' ? ' active' : ''}`} id="relevant" onClick={handleSortChange} title="Relevant">
                    <AiOutlineLink className="sort_type-icon" />
                  </div>
                </div>
              ) : ''}
            <input value={props.search} onChange={handleSearchChange} type="search" required />
            <IoSearchSharp className="fa fa-search" />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
