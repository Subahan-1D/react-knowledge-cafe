import { CiBookmark } from "react-icons/ci";

import PropTypes from 'prop-types';
const Blog = ({ blog, handaleAddToBookmark, handaleMarkAsRead }) => {
    console.log(blog);

    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the ${title}`} />
            <div className='flex justify-between'>
                <div className='flex items-center mb-3'>
                    <img className='w-[40px] h-[40px]' src={author_img} alt="" />
                    <div className='ml-3'>
                        <h4 className="text-xl items-center">{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='mt-4 items-center flex justify-between' >
                    <div>
                        <span>{reading_time} min read</span>
                    </div>
                    <div className="mt-2">
                        <button onClick={() => handaleAddToBookmark(blog)} className="text-2xl items-center text-red-600"><CiBookmark></CiBookmark></button>
                    </div>
                </div>

            </div>
            <h2 className="text-2xl mb-2">{title}</h2>
            <p className='mb-2'>
                {
                    hashtags.map((hash, index) => <span key={index}><a href=""> # {hash}</a></span>)
                }
            </p>
            <button onClick={() => handaleMarkAsRead(reading_time)} className="text-blue-600 font-bold underline">Mark As Read</button>
        </div>
    );
};
Blog.PropTypes = {
    blog: PropTypes.object.isRequired,
    handaleAddToBookmark: PropTypes.func


}
export default Blog;