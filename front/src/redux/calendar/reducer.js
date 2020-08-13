import dayjs from 'dayjs';

import { CARENDER_SET_MONTH } from './actions';

import { formatMonth } from '../../services/calendar';

const day = dayjs();

const init = formatMonth(day);

const calenderReducer = (state = init, action) => {
  const { type, payload } = action;

  switch (type) {
    case CARENDER_SET_MONTH:
      return payload;
    default:
      return state;
  }
};

export default calenderReducer;
