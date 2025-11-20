import React from 'react'
import { useState } from 'react'

const useLocalStorageForm = () => {
  const addData = (name,age,course)=>{
    localStorage.setItem(name);
    localStorage.setItem(age);
    localStorage.setItem(course);
  }
  const getData = ()=>{
    let name = localStorage.getItem(name);
    let age = localStorage.getItem(age);
    let course = localStorage.getItem(course);
    return {name,age,course};
  }
  const handleChange = ()=>{
    localStorage.setItem(name);
    localStorage.setItem(age);
    localStorage.setItem(course);
  }
  const resetForm = ()=>{
    localStorage.clear();
  }
  return {addData,getData,handleChange,resetForm};
}

export default useLocalStorageForm