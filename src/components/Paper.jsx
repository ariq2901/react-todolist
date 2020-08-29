import React from 'react';
import PropTypes from 'prop-types';

const Paper = ({ children }) => {
  return (
    <div className="container">
      <div className="frame">
        {children}
      </div>
    </div>
  )
}

Paper.propTypes = {
  children: PropTypes.oneOfType([ // * Artinya -> children akan memiliki oneOfType() /  2 diantara type yang telah didefinisikan dibawah, bisa berupa 1 node<react node> atau sekumpulan/arrayOf(node)
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;