import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3  bg-gray-300 rounded-md">
            <div>
                <h3 className="tex-4xl text-center text-purple-600 font-bold ">Spent Time An Read : {readingTime} min</h3>
            </div>
            <h2 className="text-2xl text-center">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;