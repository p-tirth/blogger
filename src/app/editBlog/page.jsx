'use client'
import React, { useState } from 'react'
import Link from "next/link";
import db from '../../../firebase/firebaseConfig';
import { collection, setDoc, doc } from "firebase/firestore";
export default function EditBlog({searchParams}) {
    // const id = searchParams.id
    const [blog,setBlog] = useState({
        name:searchParams.name,
        title:searchParams.title,
        id:searchParams.id,
        content:searchParams.content,
    })
    console.log(blog)
    // let blogg={name:blog.name,title:blog.title,content:blog.content,
    const handleSubmit = async(e)=>{
      e.preventDefault();
      console.log(blog)
      const blogRef = setDoc(doc(db,"Blogs",blog.id),blog)
      console.log(blogRef)
    }
    const handleChange = (e) => {
      const { name, value } = e.target;
      setBlog((prevData) => ({ ...prevData, [name]: value }));
      console.log(blog)
    };
  return (
    <div className="h-full">
      <Link href="/" className='bg-gray-900 p-1 rounded text-xl'>&lt;--</Link>
      <h2 className="text-3xl font-bold mb-6 text-yellow-300">Edit the Blog</h2>
      <div className=''>
        <form className=" flex flex-col bg-primary p-8 rounded-lg shadow-2xl" onSubmit={handleSubmit}>
          <div className="md:flex justify-around items-center flex-row">
              <div className="md:flex flex-col justify-center items-center grow m-2 max-w-md">
                  <label className="text-xl font-medium">Name</label>
                  <input
                      type="text"
                      name="name"
                      value={blog.name}
                      onChange={handleChange}
                      className="bg-gray-900 mt-1 px-4 py-2 w-full rounded"
                  />
              </div>
              <div className="md:flex flex-col justify-center items-center grow m-2 max-w-md">
                  <label className="text-xl font-medium">Title of the Blog</label>
                  <input
                      type="text"
                      name="title"
                      value={blog.title}
                      onChange={handleChange}
                      className="bg-gray-900 mt-1 px-4 py-2 w-full  rounded"
                  />
              </div>
              
          </div>
        <div className="my-4">
          <label className="block text-xl font-medium">Your blog content : </label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleChange}
            className="bg-gray-900 mt-1 px-4 py-2 w-full rounded"
            rows="15"
          />
        </div>
        <button type="submit" className="border  border-slate-300 w-50% mx-auto p-4 bg-secondary text-white py-2 rounded hover:bg-opacity-90">Submit</button>
        </form>
      </div>
</div>
  )
}
