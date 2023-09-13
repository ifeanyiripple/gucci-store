
import { bigshoe8, bigshoe9, bigshoe10 } from "../assets/images";
import { Link, useNavigate } from 'react-router-dom';
import  Button   from '../components/Button'
import { DetailsCard } from "../components";
import { productsArray } from "../constants";
import ScrollToTop from "../components/ScrollToTop";

 const Details = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/shoedetails1', { replace: true});
  const handleClick1 = () => navigate('/shoedetails2', { replace: true});
  const handleClick2 = () => navigate('/shoedetails3', { replace: true});

  return ( 
<section className='max-container mt-[100px] max-sm:mt-12'>
    <> <ScrollToTop />
     <div className="sm:mt-5 mt-[100px] mb-7">
    
       
     </div>
 
      <div className=' sm:gap-6 gap-14 mb-10'>
         {productsArray.slice( -1).map((product, idx) => (
           <DetailsCard key={idx} product={product} />
         ))}
       </div>
 
       <div className=" flex flex-col ">
 
       <h1 className='text-start text-3xl font-bold'>Descriptions</h1>
          <p className='mt-5  info-text'>
          GREAT GIFT IDEAS: Suitable for Women/Men/Girl/Boy. It’s a good gift for special occasions such as Christmas, birthday, celebration, housewarming gift and so on.
                   <br/><br/>
                  100% SATISFACTION GUARANTEE: If you are not happy with our product, please feel free to contact us, we will give the best solution to you within 24 hours.
          <br/> <br/>  Production time: 3 – 5 working days average after payment and all designs updated correctly.
          </p>
       </div>
 
       <h1 className=' mt-5 text-start text-3xl font-bold'>Related Products</h1>
       <div className="flex flex-1 flex-row gap-5 mt-10">
     
     <div  className='flex-1 rounded-3xl flex justify-center items-center bg-card bg-center bg-cover'>
     <button  onClick={handleClick}> 
        <Link to="shoedetails1"> 
        <img
          src={bigshoe8}
          alt='product detail'
          width={300}
          height={200}
          className='object-contain'
        /></Link> </button>

      </div>
      <div className='flex-1 rounded-3xl flex justify-center items-center bg-card bg-center bg-cover'>
      <button  onClick={handleClick1}> 
        <Link to="shoedetails2"> 
        <img
          src={bigshoe9}
          alt='product detail'
          width={300}
          height={200}
          className='object-contain'
        /></Link> </button>
      </div>
      <div className='flex-1 rounded-3xl flex justify-center items-center bg-card bg-center bg-cover'>
      <button  onClick={handleClick2}> 
        <Link to="shoedetails3">
        <img
          src={bigshoe10}
          alt='product detail'
          width={300}
          height={200}
          className='object-contain'
        /></Link> </button>
      </div>
      </div>
      </>
       </section>

   
    
  )
}

export default Details;