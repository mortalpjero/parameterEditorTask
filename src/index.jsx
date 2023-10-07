import React from 'react';
import ReactDOM from 'react-dom';
import ParamEditor from './ParamEdutor';
import reportWebVitals from './reportWebVitals';

import model from './fixtures/model';
import params from './fixtures/params';

ReactDOM.render(
  <React.StrictMode>
    <ParamEditor params={params} model={model} />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
