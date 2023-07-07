 
import Bloglist from "./bloglist";
import useFetch from "./useFetch";


const Home = () => {
   
   const{data:blogs,ispending,error}=useFetch(' https://s-achin0.github.io/customer.json');
   
    
  
    
    

    return ( 
        <div className="home">
            {error &&<div>{error}</div>}
          { ispending&&<div>Loading....</div>}
         {blogs&&  <Bloglist blogs={blogs} Title="All Blogs!" />}
           
        </div>
     );
}
 
export default Home;
