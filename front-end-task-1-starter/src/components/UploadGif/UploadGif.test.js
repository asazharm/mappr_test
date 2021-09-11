import React from 'react';
import renderer from 'react-test-renderer';
import UploadGif from './UploadGif';

test('UploadGif test 1', () => {
  const component = renderer.create(
    <UploadGif
      setGiphyViewType={() => {}}
      setFavorite={() => {}}
      apiKey="pwZ7tgpLESvZ3AA7R8POfAs8VgTxGp7t"
      show={false}
      setShowUploadModal={() => {}}
      isMobile={false}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('UploadGif test mobile 1', () => {
  const component = renderer.create(
    <UploadGif
      setGiphyViewType={() => {}}
      setFavorite={() => {}}
      apiKey="pwZ7tgpLESvZ3AA7R8POfAs8VgTxGp7t"
      show={false}
      setShowUploadModal={() => {}}
      isMobile
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
