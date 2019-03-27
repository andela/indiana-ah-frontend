import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const DislikeSvg = color => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    version="1.1"
    id="Capa_1"
    x="0px"
    y="0px"
    viewBox="0 0 490.3 490.3"
    style={{ enableBackground: 'new 90 70 490.3 490.3' }}
    xmlSpace="preserve"
    width="4rem"
    height="4rem"
    className="icon-height icon_margin"
  >
    <g>
      <g>
        <path
          fill={color}
          d={
            'M202,469.2c13.6,10,29.5,12.7,42.9,12.7c15.6,0,27.7-3.7,28.6-4c5.1-1.6,8.6-6.3,'
            + '8.6-11.7v-85.5   c0-67.3,78.1-90.2,81.4-91.2c1-0.3,1.9-0.6,2.7-1.1C372,300,384,'
            + '308,397.8,308h57.3c19.4,0,35.2-15.8,35.2-35.2V65   c0-19.4-15.8-35.2-35.2-35.2H4'
            + '22c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.1,12.2,12.1H455c5.9,0,10.7,4.8,10.7,10.7v207'
            + '.9   c0,5.9-4.8,10.7-10.7,10.7h-57.3c-5.9,0-10.7-4.8-10.7-10.7V76.7c0-37.6-30.6-'
            + '68.3-68.3-68.3H109.5c-46.4,0-75.9,24.3-81.1,66.3   l-28.2,177C0.1,252.3,0,253,0,'
            + '253.6v2.1C0,293.3,30.6,324,68.3,324h105.6v76.2C174,432.4,183.4,455.6,202,469.2z '
            + 'M68.4,299.6   c-24.1,0-43.8-19.6-43.8-43.8v-1.1L52.7,78.2c3.7-30,22.8-45.3,56.8-'
            + '45.3h209.2c24.1,0,43.8,19.6,43.8,43.8v189.1   c-1.8-0.4-3.7-0.3-5.6,0.2c-4.1,1.1'
            + '-99.3,28.7-99.3,114.8v75.6c-10.4,1.7-28.2,2.5-41.1-6.9c-11.9-8.8-18-25.3-18-49.3'
            + 'v-88.4   c0-6.8-5.5-12.3-12.3-12.3H68.4V299.6z'
          }
          data-original="#000000"
          className="active-path"
          data-old_color="#0b41cd"
        />
      </g>
    </g>
  </svg>
);

const DislikeComponent = ({
  dislikeCount, color, onClick, id
}) => (
  <Fragment>
    <span className="icon-holder" onClick={() => onClick(id, 'dislike')}>
      {DislikeSvg(color)}
      <sub className="count dislike-count">{dislikeCount || ''}</sub>
    </span>
  </Fragment>
);

DislikeComponent.propTypes = {
  dislikeCount: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

export default DislikeComponent;
