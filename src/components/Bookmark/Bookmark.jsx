
const Bookmark = ({bookmark}) => {
    const {title,posted_date} = bookmark;
    return (
        <div className="bg-blue-300 p-4 m-4 rounded-lg">
            <h3 className="text-2xl">{title}</h3>
            <p>{posted_date}</p>
        </div>
    );
};

export default Bookmark;
