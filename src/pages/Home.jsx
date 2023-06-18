import React, { useState } from 'react'
import iconButton from '../assets/images/icon-arrow.svg'

const Home = () => {

  const d = new Date()

  let yyyy = d.getFullYear()
  let mm = d.getMonth() + 1
  let dd = d.getDate()
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // console.log(yyyy, mm, dd);

  const [years, setYears] = useState("--")
  const [months, setMonths] = useState("--")
  const [days, setDays] = useState("--")

  const [yearsError, setYearsError] = useState("")
  const [monthsError, setMonthsError] = useState("")
  const [daysError, setDaysError] = useState("")

  const [yearsInput, setYearsInput] = useState()
  const [monthsInput, setMonthsInput] = useState()
  const [daysInput, setDaysInput] = useState()

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
    }
    else {
      setDays(dd - daysInput)
      setMonths(mm - monthsInput)
      setYears(yyyy - yearsInput)
    }
  }


  return (
    <>
      <section className='w-screen h-screen flex justify-center items-center bg-[#efefef] font-Poppins'>
        <div className='w-fit h-fit px-14 py-14 flex flex-col gap-14 items-center bg-white rounded-2xl rounded-br-[10rem]'>

          <form onSubmit={handleSubmit} className='w-[600px] h-fit flex flex-col gap-10'>
            <div className='w-3/4 flex gap-5'>
              <div className='flex flex-col gap-1 w-[30%]'>

                <label htmlFor="day" className={`${daysError ? "text-red-500" : "text-gray-500"} text-sm font-semibold tracking-[4px]`}>DAY</label>
                <input onChange={(e) => { setDaysInput(e.target.value); setDaysError("") }} className={`${daysError ? "text-red-500 border-red-300" : "border-gray-300 hover:border-purple-400"} px-5 py-3 rounded-md border-2 focus:outline-2 outline-[#7d50f5] text-2xl font-extrabold placeholder:font-extrabold`} type="text" value={daysInput} minLength={1} maxlength={2} name="day" id="day" placeholder='DD' />
                {daysError && <p className='text-red-400 text-xs'>{daysError}</p>}

              </div>
              <div className='flex flex-col gap-1 w-[30%]'>

                <label htmlFor="month" className={`${monthsError ? "text-red-400" : "text-gray-500"} text-gray-500 text-sm font-semibold tracking-[4px]`}>MONTH</label>
                <input onChange={(e) => { setMonthsInput(e.target.value); setMonthsError("") }} className={`${monthsError ? "text-red-500 border-red-300" : "border-gray-300 hover:border-purple-400"} px-5 py-3 rounded-md border-2 focus:outline-2 outline-[#7d50f5] text-2xl font-extrabold placeholder:font-extrabold`} type="text" value={monthsInput} minLength={1} maxlength={2} name="month" id="month" placeholder='MM' />
                {monthsError && <p className='text-red-400 text-xs'>{monthsError}</p>}

              </div>
              <div className='flex flex-col gap-1 w-[30%]'>

                <label htmlFor="year" className={`${yearsError ? "text-red-400" : "text-gray-500"} text-gray-500 text-sm font-semibold tracking-[4px]`}>YEAR</label>
                <input onChange={(e) => { setYearsInput(e.target.value); setYearsError("") }} className={`${yearsError ? "text-red-500 border-red-300" : "border-gray-300 hover:border-purple-400"} px-5 py-3 rounded-md border-2 focus:outline-2 outline-[#7d50f5] text-2xl font-extrabold placeholder:font-extrabold`} type="text" value={yearsInput} minLength={4} maxlength={4} name="year" id="year" placeholder='YYYY' />
                {yearsError && <p className='text-red-400 text-xs'>{yearsError}</p>}

              </div>
            </div>

            <div className='relative w-full h-[2px] bg-gray-300'>
              <button type="submit" disabled={daysError || monthsError || yearsError} className='absolute right-0 -top-10 w-20 h-20 p-4 duration-300 bg-[#7d50f5] hover:bg-black rounded-full hover:shadow-inner shadow-white disabled:bg-gray-500'>
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