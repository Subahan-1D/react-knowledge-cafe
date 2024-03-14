

const Blog = ({product}) => {
    const {id ,cover} = product;
    return (
        <div>
           <img src={cover} alt="" />
            <h3>Id :{id}</h3>
            
        </div>
    );
};

export default Blog;