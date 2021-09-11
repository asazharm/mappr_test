import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

test('Navbar test 1', () => {
  const component = renderer.create(
    <Navbar
      search=""
      setSearch={() => {}}
      giphyViewType="trending"
      setGiphyViewType={() => {}}
      setShowUploadModal={() => {}}
      prevGiphyViewType=""
      setPrevGiphyViewType={() => {}}
      layout={3}
      setLayout={() => {}}
      searchSortType="recent"
      setSearchSortType={() => {}}
      favorites={[]}
      isMobile={false}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Navbar test 2', () => {
  const component = renderer.create(
    <Navbar
      search="test"
      setSearch={() => {}}
      giphyViewType="search"
      setGiphyViewType={() => {}}
      setShowUploadModal={() => {}}
      prevGiphyViewType=""
      setPrevGiphyViewType={() => {}}
      layout={3}
      setLayout={() => {}}
      searchSortType="recent"
      setSearchSortType={() => {}}
      favorites={[]}
      isMobile={false}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Navbar test mobile 1', () => {
  const component = renderer.create(
    <Navbar
      search=""
      setSearch={() => {}}
      giphyViewType="trending"
      setGiphyViewType={() => {}}
      setShowUploadModal={() => {}}
      prevGiphyViewType=""
      setPrevGiphyViewType={() => {}}
      layout={3}
      setLayout={() => {}}
      searchSortType="recent"
      setSearchSortType={() => {}}
      favorites={[]}
      isMobile
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Navbar test mobile 2', () => {
  const component = renderer.create(
    <Navbar
      search="test"
      setSearch={() => {}}
      giphyViewType="search"
      setGiphyViewType={() => {}}
      setShowUploadModal={() => {}}
      prevGiphyViewType=""
      setPrevGiphyViewType={() => {}}
      layout={3}
      setLayout={() => {}}
      searchSortType="recent"
      setSearchSortType={() => {}}
      favorites={[]}
      isMobile
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
