require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import RxReact from 'rx-react';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends RxReact.Component {
    getStateStream() {
        return this.props.totalCount.map(x => {return { totalCount: x };});
    }

    render() {
        let totalCount = this.state? this.state.totalCount : 0;
        return (
            <div>
              <button onClick={_ => this.props.minusOne.onNext(null)}>-</button>
              [{totalCount}]
              <button onClick={_ => this.props.plusOne.onNext(null)}>+</button>
            </div>
        );
    }
}

export default AppComponent;
