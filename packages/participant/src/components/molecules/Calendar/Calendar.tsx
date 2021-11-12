import moment from "moment-timezone";

import React, { useState, useEffect } from "react";

import { Grid, Divider } from "@chakra-ui/react";

import CalendarHead from "./CalendarHead";
import CalendarBody from "./CalendarBody";

interface Props {
  date: string;
  setDate: React.Dispatch<React.SetStateAction<string | undefined>>;
}

function Calendar({ date, setDate }: Props) {
  const [month, setMonth] = useState(NaN);
  const [year, setYear] = useState(NaN);

  useEffect(() => {
    const momentDate = moment(date || undefined);
    setMonth(momentDate.month());
    setYear(momentDate.year());
  }, [date]);

  const backYear = () => {
    setYear((prev) => prev - 1);
  };

  const nextYear = () => {
    setYear((prev) => prev + 1);
  };

  const backMonth = () => {
    setMonth((prev) => {
      if (prev === 0) {
        backYear();
        return 11;
      }
      return prev - 1;
    });
  };

  const nextMonth = () => {
    setMonth((prev) => {
      if (prev === 11) {
        nextYear();
        return 0;
      }
      return prev + 1;
    });
  };

  return (
    <Grid gap="8px" width="300px">
      <CalendarHead
        month={month}
        year={year}
        backYear={backYear}
        backMonth={backMonth}
        nextYear={nextYear}
        nextMonth={nextMonth}
      />
      <Divider />
      <CalendarBody month={month} year={year} date={date} setDate={setDate} />
    </Grid>
  );
}

export default Calendar;
