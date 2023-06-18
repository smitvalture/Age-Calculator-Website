import React, { useState } from 'react'
import iconButton from '../assets/images/icon-arrow.svg'

const Home = () => {

  const d = new Date()

  let yyyy = d.getFullYear()
  let mm = d.getMonth() + 1
  let dd = d.getDate()
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let round = Math.round

  // console.log(yyyy, mm, dd);

  const [years, setYears] = useState("--")
  const [months, setMonths] = useState("--")
  const [days, setDays] = useState("--")

  // const [error.year, seterror.year] = useState("")
  // const [error.month, seterror.month] = useState("")
  // const [daysError, setDaysError] = useState("")

  const [error, setError] = useState({
    year: "",
    month: "",
    day: "",
  })

  const [yearsInput, setYearsInput] = useState("")
  const [monthsInput, setMonthsInput] = useState("")
  const [daysInput, setDaysInput] = useState("")


  function handleSubmit(e) {
    e.preventDefault()

    if (daysInput > dd) {
      dd = dd + month[mm - 1]
      mm = mm - 1
    }

    if (monthsInput > mm) {
      mm = mm + 12
      yyyy = yyyy - 1
    }


    if (!yearsInput || !monthsInput || !daysInput) {
      setDays("--")
      setMonths("--")
      setYears("--")
      setError({
        year: yearsInput ? "" : "Year is required",
        month: monthsInput ? "" : "Month is required",
        day: daysInput ? "" : "Day is required"
      });
    }
    else {
      setError({ year: "", month: "", day: "" });
    }

    if (parseInt(yearsInput) > yyyy) {
      setError((prevError) => ({ ...prevError, year: "Must be in the past" }));
    }

    if (parseInt(monthsInput) < 0 || parseInt(monthsInput) > 12) {
      setError((prevError) => ({ ...prevError, month: 'Must be a valid month' }));
    }

    console.log("daysInput:", daysInput);
    if (parseInt(daysInput) > 31) {
      console.log("error:", error.day);
      setError((prevError) => ({ ...prevError, day: "Must be a valid day" }));
      console.log("error:", error.day);
    }


    if (!error) {
      setDays(dd - daysInput)
      setMonths(mm - monthsInput)
      setYears(yyyy - yearsInput)
    }
  }


  return (
    <>
      <section className='w-screen h-screen flex justify-center items-center bg-[#efefef] font-Poppins'>
        <div className='w-fit h-fit px-14 py-14 flex flex-col gap-14 items-center bg-white shadow-xl rounded-2xl rounded-br-[10rem]'>

          <form onSubmit={handleSubmit} className='w-[600px] h-fit flex flex-col gap-10'>
            <div className='w-3/4 flex gap-5'>
              <div className='flex flex-col gap-1 w-[30%]'>

                <label htmlFor="day" className={`${error.day ? "text-red-500" : "text-gray-500"} text-sm font-semibold tracking-[4px]`}>DAY</label>
                <input onChange={(e) => { setDaysInput(e.target.value); setError({ ...error, day: "" }) }} className={`${error.day ? "text-red-500 border-red-300" : "border-gray-300 hover:border-purple-400"} px-5 py-3 rounded-md border-2 focus:outline-2 outline-[#7d50f5] text-2xl font-extrabold placeholder:font-extrabold`} type="text" value={daysInput} minLength={1} maxLength={2} name="day" id="day" placeholder='DD' />
                {error.day && <p className='text-red-400 text-xs'>{error.day}</p>}

              </div>
              <div className='flex flex-col gap-1 w-[30%]'>

                <label htmlFor="month" className={`${error.month ? "text-red-400" : "text-gray-500"} text-gray-500 text-sm font-semibold tracking-[4px]`}>MONTH</label>
                <input onChange={(e) => { setMonthsInput(e.target.value); setError({ ...error, month: "" }) }} className={`${error.month ? "text-red-500 border-red-300" : "border-gray-300 hover:border-purple-400"} px-5 py-3 rounded-md border-2 focus:outline-2 outline-[#7d50f5] text-2xl font-extrabold placeholder:font-extrabold`} type="text" value={monthsInput} minLength={1} maxLength={2} name="month" id="month" placeholder='MM' />
                {error.month && <p className='text-red-400 text-xs'>{error.month}</p>}

              </div>
              <div className='flex flex-col gap-1 w-[30%]'>

                <label htmlFor="year" className={`${error.year ? "text-red-400" : "text-gray-500"} text-gray-500 text-sm font-semibold tracking-[4px]`}>YEAR</label>
                <input onChange={(e) => { setYearsInput(e.target.value); setError({ ...error, year: "" }) }} className={`${error.year ? "text-red-500 border-red-300" : "border-gray-300 hover:border-purple-400"} px-5 py-3 rounded-md border-2 focus:outline-2 outline-[#7d50f5] text-2xl font-extrabold placeholder:font-extrabold`} type="text" value={yearsInput} minLength={4} maxLength={4} name="year" id="year" placeholder='YYYY' />
                {error.year && <p className='text-red-400 text-xs'>{error.year}</p>}

              </div>
            </div>

            <div className='relative w-full h-[2px] bg-gray-300'>
              <button type="submit" disabled={error.day || error.month || error.year} className='absolute right-0 -top-10 w-20 h-20 p-4 duration-300 bg-[#7d50f5] hover:bg-black rounded-full hover:shadow-inner shadow-white disabled:bg-gray-500'>
                <img src={iconButton} alt="buttonIcon" />
              </button>
            </div>
          </form>

          <div className='w-full h-full flex flex-col gap-1 justify-center text-[80px] leading-[5rem] font-extrabold italic'>
            <p> <span className='text-[#7d50f5]'>{years}</span> years</p>
            <p> <span className='text-[#7d50f5]'>{months}</span> months</p>
            <p> <span className='text-[#7d50f5]'>{days}</span> days</p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Home