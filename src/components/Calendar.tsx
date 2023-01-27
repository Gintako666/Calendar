import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../hooks/reduxHooks';
import { getMonthDataRender } from '../utils/calendar';
import { Week } from './Week';

export const Calendar: React.FunctionComponent = () => {
  const { year, month } = useAppSelector(state => state.calendar);

  const [monthData, setmonthData] = useState(getMonthDataRender(year, month));

  useEffect(() => {
    setmonthData(getMonthDataRender(year, month));
  }, [month, year]);

  return (
    <div className="calendar">
      {monthData.map((week, indexWeek) => {
        const keyWeek = (indexWeek * Math.random());

        return (
          <div key={keyWeek} className="calendar__week">
            {week.map((dateDisplay, indexDate) => {
              const keyDate = (indexDate * Math.random());

              return <Week key={keyDate} dateDisplay={dateDisplay} indexDate={indexDate} />;
            })}
          </div>
        );
      })}
    </div>
  );
};
