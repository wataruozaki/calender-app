import React from 'react';
import * as styles from './style.css';

import { Typography } from '@material-ui/core';
import dayjs from 'dayjs';

import {
  getMonth,
  isFirstDay,
  isSomeDay,
  isSomeMonth,
} from '../../services/calendar';

const CalenderElement = ({ day, month }) => {
  const today = dayjs();
  const currentMouth = getMonth(month);
  const isCurrentMouth = isSomeMonth(day, currentMouth);
  const textColor = isCurrentMouth ? 'textPrimary' : 'textSecondary';

  const format = isFirstDay(day) ? 'M月D日' : 'D';
  const isToday = isSomeDay(day, today);
  return (
    <div className={styles.element}>
      <Typography
        align="center"
        className={styles.data}
        color={textColor}
        component="div"
        variant="caption"
      >
        <span className={isToday ? styles.today : ''}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};

export default CalenderElement;
