import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handaleAddToBookmark,handaleMarkAsRead}) => {
    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])

    return (
        <div className="md:w-2/3">
            <h3 className="font-bold text-2xl mb-10">Blogs :{blogs.length}</h3>
            {
               blogs.map(blog => <Blog  key={blog.id} blog={blog} handaleAddToBookmark ={handaleAddToBookmark} handaleMarkAsRead={handaleMarkAsRead}></Blog>)
            }

        </div>
    );
};

export default Blogs;