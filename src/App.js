// App.js

import React from 'react';
import NumberManag from './NumberManag';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <NumberManag />
        </div>
      </div>         
    </div>
  );
};

export default App;