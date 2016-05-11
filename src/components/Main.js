require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

const AppComponent = ({plusOne, minusOne, totalCount}) => {
    return (
            <div>
              <button onClick={minusOne}>-</button>
              [{totalCount}]
              <button onClick={plusOne}>+</button>
            </div>
    );
};

export default AppComponent;
