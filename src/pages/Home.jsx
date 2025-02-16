import { products } from '../data'
import { NavLink } from 'react-router';
import Product from '../components/Product';

function Home() {
  let posts=products;
  return (
    <div>
        {
          posts.length<=0 ? (
            <div>
              <p>No Data Found</p>
            </div>
          )   :
          (
            <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5
        gap-y-8 max-w-6xl p-6 mx-auto my-7 min-h-[80vh]'>
              {
                (posts.map((post)=>{

                  return(
                    <Product key={post.id} post={post}/> 
              
                  ) 
                }))
              }
            </div>
          )
          
        }
    </div>
  )
}

export default Home
