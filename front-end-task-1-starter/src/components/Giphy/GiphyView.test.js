import React from 'react';
import renderer from 'react-test-renderer';
import GiphyView from './GiphyView';

test('GiphyView test 1', () => {
  const component = renderer.create(
    <GiphyView
      apiKey="pwZ7tgpLESvZ3AA7R8POfAs8VgTxGp7t"
      giphyViewType="trending"
      search=""
      favorites={[]}
      setFavorite={() => {}}
      isMobile={false}
      layout={3}
      searchSortType="relevant"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('GiphyView test 2', () => {
  const component = renderer.create(
    <GiphyView
      apiKey="pwZ7tgpLESvZ3AA7R8POfAs8VgTxGp7t"
      giphyViewType="favorites"
      search=""
      favorites={['KstPDy4K2OLobLQjGG']}
      setFavorite={() => {}}
      isMobile={false}
      layout={3}
      searchSortType="relevant"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('GiphyView test 3', () => {
  const component = renderer.create(
    <GiphyView
      apiKey="pwZ7tgpLESvZ3AA7R8POfAs8VgTxGp7t"
      giphyViewType="search"
      search="test"
      favorites={['KstPDy4K2OLobLQjGG']}
      setFavorite={() => {}}
      isMobile={false}
      layout={3}
      searchSortType="relevant"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('GiphyView test mobile 1', () => {
  const component = renderer.create(
    <GiphyView
      apiKey="pwZ7tgpLESvZ3AA7R8POfAs8VgTxGp7t"
      giphyViewType="trending"
      search=""
      favorites={['KstPDy4K2OLobLQjGG']}
      setFavorite={() => {}}
      isMobile
      layout={3}
      searchSortType="relevant"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('GiphyView test mobile 2', () => {
  const component = renderer.create(
    <GiphyView
      apiKey="pwZ7tgpLESvZ3AA7R8POfAs8VgTxGp7t"
      giphyViewType="search"
      search="test"
      favorites={['KstPDy4K2OLobLQjGG']}
      setFavorite={() => {}}
      isMobile
      layout={3}
      searchSortType="relevant"
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
