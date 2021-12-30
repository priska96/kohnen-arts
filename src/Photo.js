import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';
const imgWithClick = { cursor: 'pointer' };

const Photo = ({ index, onClick, photo, margin, direction, top, left, key }) => {
  const imgStyle = { margin: margin, display: 'block' };
  if (direction === 'column') {
    imgStyle.position = 'absolute';
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = event => {
    onClick(event, { photo, index });
  };

  return (
      <Card key={key} className="bg-dark text-white" style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle} onClick={onClick ? handleClick : null}>
        <img {...photo} />
        <Card.ImgOverlay className="gallery-photo-overlay">
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      /*<img
      key={key}
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
    />*/
  );
};

export const photoPropType = PropTypes.shape({
  key: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string,
  srcSet: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  sizes: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
});

Photo.propTypes = {
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  photo: photoPropType.isRequired,
  margin: PropTypes.number,
  top: props => {
    if (props.direction === 'column' && typeof props.top !== 'number') {
      return new Error('top is a required number when direction is set to `column`');
    }
  },
  left: props => {
    if (props.direction === 'column' && typeof props.left !== 'number') {
      return new Error('left is a required number when direction is set to `column`');
    }
  },
  direction: PropTypes.string,
};

export default Photo;
