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
      const ViewProd = (e) => {
       navigate('/view_prod') ;
      };
      const ViewFAQs = (e) => {
       navigate('/view_faq') ;
      };
      const ViewForums = (e) => {
       navigate('/view_forum') ;
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
            <button onClick={ViewCat}>
                view
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
            <button onClick={ViewForums}>
                view
            </button>
         </div>
         <div className="card">
            <p className="heading">
                View FAQs
            </p>
            <p>
                You can add/update/remove the question/answers.
            </p>
            <button onClick={ViewFAQs}>
                view
            </button>
         </div>
  </div>

  )
}
