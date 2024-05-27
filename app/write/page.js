'use client'

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import React, { useState,useEffect } from "react";
import styled from "styled-components";

export default function Write() {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    console.log(startDate)
    return () => {
    };
  }, [startDate]);

  // DatePicker의 스타일을 조정하기 위해 styled-components를 사용
  const StyledDatePicker = styled(DatePicker)`
 // width: 30px; // 원하는 너비로 조정
  font-size: 14px; // 글자 크기 조정
  
  `;


  return (
    <div className="p-10 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg  border border-gray-300">
        <h1 className="text-3xl font-bold mb-6 text-center">Write</h1>
        <form action="/api/post/new" method="POST" className="space-y-4">
          {/* POST와 GET만 이렇게 이용가능 */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Project Name</label>
            <input 
              type="text" 
              id="title" 
              name="title" 
              placeholder="글 제목을 입력해주세요." 
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2" 
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Period</label>
            <StyledDatePicker
              id = "startDate"
              name = "startDate"
              className="border-gray-300  rounded-md  shadow-sm sm:text-sm bg-white"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy-MM-dd" // 날짜 형식을 년-월-일로 설정
              placeholderText="Select a date"
            />
            <StyledDatePicker
              id = "endDate"
              name = "endDate"
              className="border-gray-300  rounded-md  shadow-sm sm:text-sm bg-white"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy-MM-dd" // 날짜 형식을 년-월-일로 설정
              placeholderText="Select a date"
            />
          </div>
          {/* <DatePicker selected={startDate} onChange={date => setStartDate(date)} style={{width:'10px'}}/>
          <DatePicker selected={endDate} onChange={date => setEndDate(date)} /> */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-gray-700">Desc.</label>
            <textarea 
              id="content" 
              name="content" 
              rows="5" 
              placeholder="글 내용을 입력해주세요." 
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md px-4 py-2" 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  )
}
