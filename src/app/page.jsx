'use client'
import Link from "next/link";
import { collection,addDoc, query, onSnapshot, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db from "../../firebase/firebaseConfig";

  export default function Home(){
    
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
      // console.log(blogs)
      const q = query(collection(db,'Blogs'))
      let a = []
      onSnapshot(q,(querySnapshot)=>{
        setBlogs([])
        querySnapshot.forEach((doc)=>{
          const stuff = doc.data()
          console.log(stuff)
          setBlogs(prevBlog => [...prevBlog,stuff])
          // a.push(stuff)
          // blogs.push(stuff)
        })
      })
      // console.log(a[0])
      // setBlogs(a)
      console.log(blogs)
    },[])

    return (
    <>
      <header className="flex justify-between items-center shadow-2xl p-2 mb-5">
        <h1 className="text-3xl p-2 font-bold text-yellow-300">Bloggers</h1>
        <Link href="/newBlog" className="border text-2xl p-2 font-bold border-slate-300 rounded px-2 text-slate-100">New Blog</Link>
      </header>
        <div>
          {blogs.map((blog,index) => (
            <div key={index} className="border break-words border-slate-300 rounded p-4 m-1 text-slate-100 mb-5">
                <div className="text-yellow-300 text-center text-3xl">{blog.title}</div>
                <div className="text-red-300 text-right">{"~ by "+blog.name}</div>       
                <div className="">{blog.content}</div>
            </div>
          ))}
        </div>
    </>
    )
  }
