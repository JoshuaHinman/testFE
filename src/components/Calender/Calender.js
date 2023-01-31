import { useState, useEffect } from 'react'

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const numString = (num) => {
  let postfix = 'th';
  switch (num % 10) {
    case 1:
      postfix = 'st';
      break;
    case 2:
      postfix = 'nd';
      break;
    case 3:
      postfix = 'rd';
      break;
    default:
  }
  if (num >= 11 || num <= 13) postfix = 'th';
  return String(num + postfix);
}

const firstDateOfWeek = (date) => {
  console.log(date);
  while (days[date.getDay()] !== 'Sunday') {
    date.setDate(date.getDate() - 1);
  }
  console.log(date);

  return date;
}

const setWeekDaysArray = (date) => {
  const daysArr = [];
  for (let i = 0; i < 7; i++) {
		const day = date.getDate();
    const month = date.getMonth();
		daysArr.push({date: day, month: months[month]});
    date.setDate(date.getDate() + 1);
	}
  console.log(daysArr);
  return daysArr;
}

const Calender = () => {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [daysOfWeek, setDaysOfWeek] = useState([]);
  const [startOfWeekDate, setStartOfWeekDate] = useState();
  //const [dayOfMonth, setDayOfMonth] = useState();
  const test = async () => {
    let result = await fetch('https://samapp-production.up.railway.app/api/employee')
      .then((res => res.json()))
      .then(data => console.log(data.employeeArray));
  }
  useEffect(() => {
    const today = new Date();
    console.log(today);
    setYear(today.getFullYear());
    setMonth(months[today.getMonth()]);
    console.log(month)
    //setDayOfMonth(today.getDay());
    const startDate = firstDateOfWeek(today);
    setStartOfWeekDate(startDate);
    setDaysOfWeek(setWeekDaysArray(startDate));
    test();
  }, [])

  return (
    <>
    <div className="w-10/12 p-1 flex justify-between border-solid border-2 border-sky-500 text-2xl rounded-lg">
      <div className="px-1 mx-1 border-solid border-2 border-orange-400 rounded-lg" >ᐸ</div>
      <div className="">
        <select className="bg-white-100 inline-block" value={month} name="months" id="months">
          { months.map((monthLabel) => <option key={monthLabel} value={monthLabel}>{monthLabel}</option> )}
        </select>
        <div className="inline-block">{year}</div>
      </div>
      <div className="px-1 mx-1 border-solid border-2 border-orange-400 rounded-lg">ᐳ</div>
    </div>
    <div className="w-10/12 flex justify-end text-xl rounded-lg">
      {days.map((day) => <div className="w-1/12 mx-4 py-1">{day}</div>)}
    </div>
    <div className="w-10/12 flex justify-end text-xl rounded-lg">
    {daysOfWeek.map((day) => 
            (day.month === month) ?
              <div className="w-1/12 mx-4 py-1 text-black">{numString(day.date)}</div>
            :
              <div className="w-1/12 mx-4 py-1 text-gray-400">{numString(day.date)}</div>
          )
    }
    </div>
    <div className="w-10/12 border-solid border-2 border-sky-500 text-md rounded-lg">
      <div className="w-full py-1 flex justify-end">
        <div className="w-2/12 mx-4 py-1">John Denver</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">off</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">off</div>
      </div>
      <div className="w-full py-1 flex justify-end">
        <div className="w-2/12 mx-4 py-1">Bilbo Baggins</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">off</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">off</div>
      </div>
      <div className="w-full py-1 flex justify-end">
        <div className="w-2/12 mx-4 py-1">Clyde Drexler</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">open</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">off</div>
        <div className="border-solid border-2 border-orange-300 w-1/12 mx-4 py-1">off</div>
      </div>
    </div>
    </>

  )
}

export default Calender;