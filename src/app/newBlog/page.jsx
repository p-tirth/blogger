"use client"
import { collection,addDoc ,setDoc ,doc } from 'firebase/firestore';
import Link from "next/link";
import { useRouter } from 'next/router';
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
    // const router = useRouter();
    e.preventDefault();
    console.log(formData); // You can perform your form submission logic here
    const ID = uuidv4()
    await setDoc(doc(db,"Blogs",ID),{
        name:formData.name,
        title:formData.title,
        content:formData.content,
        id:ID,
    })
    setFormData({
        name: '',
        title: '',
        content: '',
    })
    // router.push('/');
  };

  return (
    <div className="h-full">
      <Link href="/" className='bg-gray-900 p-1 rounded text-xl'>&lt;--</Link>
        <h2 className="text-3xl font-bold mb-6 text-yellow-300">Create a New Blog</h2>
        <div className=''>
          <form className=" flex flex-col bg-primary p-8 rounded-lg shadow-2xl" onSubmit={handleSubmit}>
              <div className="md:flex justify-around items-center flex-row">
                  <div className="md:flex flex-col justify-center items-center grow m-2 max-w-md">
                      <label className="text-xl font-medium">Name</label>
                      <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-gray-900 mt-1 px-4 py-2 w-full  rounded"
                      />
                  </div>
                  <div className="md:flex flex-col justify-center items-center grow m-2 max-w-md">
                      <label className="text-xl font-medium">Title of the Blog</label>
                      <input
                          type="text"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          className="bg-gray-900 mt-1 px-4 py-2 w-full  rounded"
                      />
                  </div>
                  
              </div>
          <div className="my-4">
            <label className="block text-xl font-medium">Your blog content : </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className="bg-gray-900 mt-1 px-4 py-2 w-full rounded"
              rows="15"
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
    </div>
  );
};

export default Form;
