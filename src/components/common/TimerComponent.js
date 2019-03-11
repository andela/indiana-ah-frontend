import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ClockIcon from '../../images/icons/clock.png';

const TimerComponent = ({ timeCount }) => (
<Fragment>
<span className = 'icon_holder'>
<img src = {ClockIcon} alt = 'ClockIcon' className= 'icon_height'/>
<sub className='count'>{ timeCount }</sub>
</span>
</Fragment>
);

TimerComponent.propTypes = {
  timeCount: PropTypes.string.isRequired,
};

export default TimerComponent;
