"use client"
import { collection,addDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import db from '../../../firebase/firebaseConfig';
import {v4 as uuidv4} from "uuid" 

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    content: '',
    id:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData); // You can perform your form submission logic here
    await addDoc(collection(db,'Blogs'),{
        name:formData.name,
        title:formData.title,
        content:formData.content,
        id:uuidv4(),
    })
    setFormData({
        name: '',
        title: '',
        content: '',
    })
  };

  return (
    <div className="">
        <h2 className="text-3xl font-bold mb-6 text-yellow-300">Create a New Blog</h2>
        <form className=" flex flex-col bg-primary p-8 rounded-lg shadow-2xl" onSubmit={handleSubmit}>
            <div className="mb-4 flex justify-around align-center">
                <div className="mb-4 flex justify-center align-center flex-col">
                    <label className=" text-xl text-center font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className=" bg-gray-900 mt-1 px-4 py-2 rounded "
                    />
                </div>
                <div className="mb-4 flex justify-center align-center flex-col">
                    <label className="text-xl text-center font-medium">Title of the Blog</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="bg-gray-900 mt-1 px-4 py-2 w-full  rounded"
                    />
                </div>
                
            </div>
        <div className="mb-4">
          <label className="block text-xl font-medium ml-20">Your blog content : </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="bg-gray-900 mt-1 px-4 py-2 w-full rounded"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="border  border-slate-300 w-50% mx-auto p-4 bg-secondary text-white py-2 rounded hover:bg-opacity-90"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
