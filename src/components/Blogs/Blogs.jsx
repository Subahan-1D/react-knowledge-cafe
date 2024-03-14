import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs,setBlogs] = useState([])

    useEffect(()=>{
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])

    return (
        <div>
            <h3 className="font-bold text-3xl">Blogs : {blogs.length}</h3>
            {
                blogs.map(product => <Blog key={blogs.id} product={product}></Blog>)
            }
        </div>
    );
};

export default Blogs;