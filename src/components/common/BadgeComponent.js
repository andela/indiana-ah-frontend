import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';

const BadgeComponent = ({ eachTagDetail }) => (
<Fragment>
<Badge variant="secondary" className='mr-2'>
{eachTagDetail}
  </Badge>
</Fragment>
);

BadgeComponent.propTypes = {
  eachTagDetail: PropTypes.string.isRequired,
};

export default BadgeComponent;
