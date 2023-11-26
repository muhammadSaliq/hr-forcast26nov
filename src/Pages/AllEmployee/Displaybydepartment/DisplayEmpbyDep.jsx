import { useContext, useEffect } from 'react';
import { Link, json, useNavigate, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import axios from 'axios';
import Navbars from '../../../Ccomponents/Header/Navbar/Navbars';
import Footer from '../../../Ccomponents/Footer/Footer';
import './displayempbydep.css';
import DashNavbar from '../../../Ccomponents/Header/DashboardNavbar/DashNavbar';

const DisplayEmpbyDep = () => {
    const navigate = useNavigate();
    const {department} = useParams();
    const [allemployees, setallemployees] = useState([]);
    const [employeeBoolean, setemployeeBoolean] = useState(false);
    const [Delete , setdelete] = useState(false);
    const buttonStyle = {
        background: '#EC0C36',
        color: 'white',
        fontWeight: 'bold',
        padding: '8px 16px',
        borderRadius: '8px',
        marginTop: '12px',
        cursor: 'pointer',
      };
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'start',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
         boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        marginTop: '15px',
        backgroundColor: '#f9f6ee',
        width: '350px', // Adjust the width as needed
        // background: 'url("https://www.osimo.com.tr/assets/images/media-bg.jpg") center/cover no-repeat',
      };
    

    
    
    
      const getAllemployee = async () => {
        try {
          const response = await axios.get(`http://localhost:8000/deaprtmentemployee/${department}`);
          console.log("response: ", response);
          console.log(allemployees);
          setallemployees(response.data.data);
        } catch (error) {
          console.log("error in getting all Departments", error);
        }
      };


    useEffect(() => {
        console.log('asdasd')
        getAllemployee()
        // return () => {
        //   console.log('Cleanup Function');
        //  }
    }, [Delete , employeeBoolean ])
    
    return (
        <>
        <DashNavbar/>

            <div className='rootcontainer2'>
                <h2 className="heado">Employees</h2>
            </div>
            <div className='flex  justify-evenly flex-wrap my-4' >
            {allemployees.map((value) => (
                    <div style={containerStyle}>
        <div className="divss">
        <h1 className="headoo ">{value.emloyeename}</h1>
        <h3 className="text-center mt-2 mb-2 h3head">{value.jobRole}</h3>
        <hr className='color-black'/>
</div>
        <span className="text-center inline mt-2">Department: {value.department}</span>
        <span className="text-center inline mt-2">Age: {value.age}</span>
        <span className="text-center inline mt-2">Gender: {value.gender}</span>
        <span className="text-center inline mt-2">Working Hours: {value.standardHours}</span>
        <span className="text-center inline mt-2">Years in the Company: {value.yearsAtCompany}</span>

        <div className="flex mt-4 space-x-3 md:mt-6 justify-center">
        <a className="inline-flex items-center bg-black text-yellow-500 px-4 py-2 text-sm font-medium text-center text-white rounded-lg hover:bg-yellow-500 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 ">View</a> 
        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">Edit</a> 

       <a href="#" className="inline-flex bg-black text-red-500 items-center px-4 py-2 text-sm font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-red-700 hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-200 ">Delete</a>
         </div>
        

      </div>
           ))}

               </div>

            <Footer/>
        </>
    );
}

export default DisplayEmpbyDep;
