'use client'
import React, { useState } from 'react'
import db from '../../../firebase/firebaseConfig';
import { collection, setDoc, doc } from "firebase/firestore";
export default function EditBlog({searchParams}) {
    const id = searchParams.id
    // const [blog,setBlog] = useState({
    //     name:"",
    //     title:"",
    //     id:"",
    //     content:"",
    // })
    let blog={name:"me",
    title:"me",
    id:id,
    content:"me",}

    function editDoc(){
    }
    const blogRef = setDoc(doc(db,"Blogs",id),blog)
    console.log(blogRef)
  return (
    <div>{id}</div>
  )
}
