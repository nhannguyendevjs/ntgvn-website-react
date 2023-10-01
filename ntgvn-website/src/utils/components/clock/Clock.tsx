import { useState, useEffect } from 'react';
import { timer, Subject, takeUntil } from 'rxjs';
import { DateTime } from 'luxon';

function Clock() {
  const destroy$ = new Subject();

  let [date, setDate] = useState('');
  let [time, setTime] = useState('');

  useEffect(() => {
    timer(0, 1000).pipe(takeUntil(destroy$)).subscribe(() => {
      const now = DateTime.now();
      setDate(now.toFormat('yyyy LLL dd'));
      setTime(now.toFormat('hh:mm a'));
    });
  }, []);

  useEffect(() => {
    return () => {
      if (destroy$) {
        destroy$.next(true);
        destroy$.complete();
      }
    };
  }, [date, time]);

  return (
    <>
      <div className='font-medium text-sm'>
        <span className="clock-date">{date}</span>
        <span className="clock-spacing">&nbsp;|&nbsp;</span>
        <span className="clock-time">{time}</span>
      </div>
    </>
  );
}

export default Clock;
