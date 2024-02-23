import React from 'react'
import './AdminCards.css';
import { useNavigate } from 'react-router-dom';


export const AdminHome = () => {
    const navigate = useNavigate()

    const ViewExpert = (e) => {
       navigate('/expert_list') ;
      };
      const ViewCat = (e) => {
       navigate('/view_cat') ;
      };
      
      const ViewOrder = (e) => {
        navigate('/orders') ;
       };

      const ViewForums = (e) => {
       navigate('/forums') ;
      };
  return (
    <div className='centered-container'>
        <div className="card">
            <p className="heading">
                View Expert List
            </p>
            <p>
                You can approve/remove the experts.
            </p>
            <button onClick={ViewExpert}>
                view
            </button>
         </div>

         <div className="card">
            <p className="heading">
                View Categories
            </p>
            <p>
                You can add/remove/update the categories.
            </p>
            <button  className='btn btn-outline-primary' onClick={ViewCat}>
                View
            </button>
         </div>
         {/* <div className="card">
            <p className="heading">
                View Products
            </p>
            <p>
                You can add/remove/update the products.
            </p>
            <button onClick={ViewProd}>
                view
            </button>
         </div> */}
         <div className="card">
            <p className="heading">
                View Forum
            </p>
            <p>
                You can add/update/remove the questions/answers
            </p>
            <button className='btn btn-outline-primary' onClick={ViewForums}>
                View
            </button>
         </div>
         <div className="card">
            <p className="heading">
                View Orders
            </p>
            <p>
                You can view the placed orders
            </p>
            <button  className='btn btn-outline-primary' onClick={ViewOrder}>
                View
            </button>
         </div>
  </div>

  )
}
