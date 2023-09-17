import { useState, useEffect } from 'react';
import { timer, Subscription } from 'rxjs';
import { DateTime } from 'luxon';

function Clock() {
  let clock$: Subscription;

  let [date, setDate] = useState('');
  let [time, setTime] = useState('');

  useEffect(() => {
    clock$ = timer(0, 1000).subscribe(() => {
      const now = DateTime.now();
      setDate(now.toFormat('yyyy LLL dd'));
      setTime(now.toFormat('hh:mm a'));
    });
  }, []);

  useEffect(() => {
    return () => {
      clock$.unsubscribe();
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
