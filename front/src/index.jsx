import React from 'react';
import ReactDOM from 'react-dom';

import CalendarBord from './components/CalendarBoard';

import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

const App = () => (
  <div>
    <CalendarBord />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
