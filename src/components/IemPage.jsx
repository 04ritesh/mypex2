import React, { useEffect } from 'react'
import { motion } from "framer-motion";
import { categories } from "../utils/data";
import { Link } from 'react-router-dom';
import ECE from "../img/ECE.jpg"
import EE from "../img/EEF.jpg"
import CSE from "../img/CSE.jpg"
import CSBS from "../img/CSBS.jpg"
import bgm2      from "../img/bgm2.jpg"
import IT from "../img/IT.jpg"
import MECH from "../img/MECH.jpg"
import IOT from "../img/IOT.jpg"
import { semester } from "../utils/data";
import { IoFastFood, IoBook } from "react-icons/io5";
import { MdElectricalServices } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { TbBusinessplan } from "react-icons/tb";
import {  FcElectronics} from "react-icons/fc";
import { GiElectricalResistance,GiMechanicalArm,GiRadioTower} from "react-icons/gi";
import { useState } from 'react'
import { HashLink as HLink } from 'react-router-hash-link'; 
import Fquestions from './Fquestions';
import AllQuestions from './AllQuestions';
import {SubjectData} from '../utils/SubjectData' 
import { iemd } from '../utils/questionData';
import { RowContainer } from '.';
import { getAllFoodItems } from '../utils/firebaseFunctions';
import { actionType } from '../Context/reducer';
import { useStateValue } from '../Context/stateProvider';
const IemPage = () => {
  const [ifilter, setiFilter] = useState(null);
    const [semester,setsemester]=useState(null);
  const [branch,setbranch]=useState(null);
  const [filter, setFilter] = useState(null);
  const [subject, setSubject] = useState(null);
  const [{ foodItems }, dispatch] = useStateValue();

//just checking is fooditems coming 
useEffect(() => {
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  fetchData();
}, []);

  return (
    <div>
    <div className="" >
    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto mb-3">
         Choose Your semester
        </p>
    </div>
        <div id='target-section' style={{backgroundImage:`url(${bgm2})`}} class='bg-cover bg-blend-overlay mt-10'
        >
  <div className="">
      <div className=" align-middle flex w-full overflow-x-scroll px-1">
        <div className=" column"
        onClick={()=>{
              setsemester("1st semester")
            }}
        >
          <motion.div 
          whileTap={{scale:0.6}}
          className={`card  w-52 flex items-center justify-start ${
                   semester === "1st semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      }
          >
            <div className="txt">
              <h1 className="font-bold text-2xl ">1st <br /> Semester</h1>
            </div>
           
            <div className="ico-card">
              <i className="fa fa-book font-bold text-3xl"></i>
            </div>
          </motion.div>
        </div>
      
        <div className=" column"
        onClick={()=>{
              setsemester("2nd semester")
           
            }}
            
        >
          <motion.div 
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "2nd semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1 className="font-bold text-2xl">2nd <br /> Semester</h1>
            </div>
           
            <div className="ico-card">
            <i className="fa fa-book font-bold text-3xl"></i>
            </div>
          </motion.div>
        </div>
        <div className=" column"
          onClick={()=>{
              setsemester("3rd semester")
            }}
        >
          <motion.div 
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "3rd semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1  className="font-bold text-2xl">3rd <br /> Semester</h1>
             
            </div>
           
            <div className="ico-card">
            <i className="fa fa-book font-bold text-3xl"></i>
            </div>
          </motion.div>
        </div>
        <div className=" column"
          onClick={()=>{
              setsemester("4th semester")
            }}
        >
          <motion.div 
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "4th semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1  className="font-bold text-2xl">4th <br /> Semester</h1>
            </div>
           
            <div className="ico-card">
            <i className="fa fa-book font-bold text-3xl"></i>
            </div>
          </motion.div>
        </div>
        <div className=" column"
          onClick={()=>{
              setsemester("5th semester")
            }}
        >
          <motion.div
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "5th semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1  className="font-bold text-2xl">5th <br /> Semester</h1>
            </div>
           
            <div className="ico-card">
            <i className="fa fa-book font-bold text-3xl"></i>
            </div>
          </motion.div>
        </div>
        <div className=" column"
          onClick={()=>{
              setsemester("6th semester")
            }}
        >
          <motion.div 
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "6th semester"
                      ? "bg-blue-500"   
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1  className="font-bold text-2xl">6th <br /> Semester</h1>
            </div>
           
            <div className="ico-card">
            <i className="fa fa-book font-bold text-3xl"></i>
            </div>
          </motion.div>
        </div>
        <div className=" column"
          onClick={()=>{
              setsemester("7th semester")
            }}
        >
          <motion.div 
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "7th semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1  className="font-bold text-2xl">7th <br /> Semester</h1>
            </div>
           
            <div className="ico-card">
            <i className="fa fa-book font-bold text-3xl"></i>
            </div>
          </motion.div>
        </div>
        <div className="col-md-6 col-lg-4 column"
          onClick={()=>{
              setsemester("8th semester")
            }}
        >
          <motion.div  
           whileTap={{scale:0.6}}
           className={`card  w-52 flex items-center justify-start ${
                   semester === "8th semester"
                      ? "bg-blue-500"
                      : "bg-green-400"
                       }`
                      }>
            <div className="txt">
              <h1  className="font-bold text-2xl">8th<br /> Semester</h1>
             
            </div>
            
            <div className="ico-card">
            <i className="fa fa-book font-bold text-3xl"></i>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </div>

    <div className="p-6 m-5">
    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto ">
         Choose Your Branch
        </p>
    </div>
    <div className=" align-middle flex w-full overflow-x-scroll">
        <motion.div 
        onClick={
          ()=>{
            setbranch("CSE CORE");
          }
        }
        whileTap={{scale:0.6}}
        className={`${
                  branch==="CSE CORE"
                      ? "bg-pink-200"
                      : "row pb-5 mb-4 p-8 "
                       }`
                      }
        class="row pb-5 mb-1 p-8 ">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0" style={{ backgroundImage: `url(${CSE})`,
         backgroundSize:"cover"
         }}>
      <div class="card rounded shadow-sm border-0 w-52">
        <div class="card-body p-4 w-52">
         
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    </div>
  <div className="flex pt-[-6]">
  <h5 class="text-dark  font-bold text-2xl pt-3">CSE CORE </h5>
    <i className="fa fa-computer font-bold text-3xl m-4"></i>
  </div>
        </motion.div>
        <motion.div
          onClick={
          ()=>{
            setbranch("IT");
          }
        }
        whileTap={{scale:0.6}}
        className={`${
                  branch==="IT"
                      ? "bg-blue-200"
                      : "row pb-5 mb-4 p-8 "
                       }`
                      }
         >
         
        <div
         class="col-lg-3 col-md-6 mb-4 mb-lg-0" 
        style={{ backgroundImage: `url(${IT})`,
         backgroundSize:"cover"
         }}>
       
      <div class="card rounded shadow-sm border-0 w-52">
        <div class="card-body p-4 w-52">
          <i className="fa font-bold text-3xl m-4"></i>
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex">
    <h5 class="text-dark  font-bold text-2xl">Information Technology </h5>
    <i className="fa fa-GrTechnology font-bold text-3xl m-4"><GrTechnology className="text-3xl"/></i>
    </div>
        </motion.div>
        <motion.div
          onClick={
          ()=>{
            setbranch("ECE");
          }
        }
        whileTap={{scale:0.6}}
        className={`   ${
                  branch==="ECE"
                      ? "bg-blue-200"
                      : "row pb-5 mb-4 p-8 "
                       }`
                      }
         class="row pb-5 mb-4 p-8 ">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0" style={{ backgroundImage: `url(${ECE})`,
        backgroundSize:"cover"
         }}>
      <div class="card rounded shadow-sm border-0 w-52">
        <div class="card-body p-4 w-52">
        
          <i className="fa  font-bold text-3xl m-4"></i>
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex">
    <h5 class="text-dark  font-bold text-2xl pt-3">ECE </h5>
    <i className="fa  font-bold text-3xl m-4"><FcElectronics  className="text-4xl"/></i>
    </div>
        </motion.div>
        <motion.div 
          onClick={
          ()=>{
            setbranch("MECH");
          }
        }
        whileTap={{scale:0.6}}
        className={`   ${
                  branch==="MECH"
                      ? "bg-violet-200"
                      : "row pb-5 mb-4 p-8 "
                       }`
                      }
        class="row pb-5 mb-4 p-8 ">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
      <div class="card rounded shadow-sm border-0 w-52"  style={{ backgroundImage: `url(${MECH})`,
       backgroundSize:"cover"
       }}>
        <div class="card-body p-4 w-52">
         
          <i className="fa  font-bold text-3xl m-4"></i>
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="flex">
    <h5 class="text-dark  font-bold text-2xl pt-4">Mechanical</h5>
    <i className="fa  font-bold text-3xl m-4"><GiMechanicalArm className="text-5xl"/></i>
    </div>
        </motion.div>
        <motion.div 
          onClick={
          ()=>{
            setbranch("EE");
          }
        }
        whileTap={{scale:0.6}}
        className={`   ${
                  branch==="EE"
                      ? "bg-gray-200"
                      : "row pb-5 mb-4 p-8 "
                       }`
                      }
        class="row pb-5 mb-4 p-8 ">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0"
        style={{ backgroundImage: `url(${EE})`,
         backgroundSize:"cover"
         }}>
        
      <div class="card rounded shadow-sm border-0 w-52">
        <div class="card-body p-6 w-52">
        
     
          <i className="fa  font-bold text-3xl m-4"></i>
        </div>
      </div>
    </div>
  <div className="flex">
  <h5 class="text-dark  font-bold text-2xl pt-6">EE </h5>
  
  <i className="fa fa-wire font-bold text-3xl m-4 pl-2 pt-[-2rem] "><GiElectricalResistance className="text-5xl"/></i>
  </div>
        </motion.div>
        <motion.div 
          onClick={
          ()=>{
            setbranch("IOT");
          }
        }
        whileTap={{scale:0.6}}
        className={`   ${
                  branch==="IOT"
                      ? "bg-teal-200"
                      : "row pb-5 mb-4 p-8 "
                       }`
                      }
        class="row pb-5 mb-4 p-8 " >
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0"  style={{ backgroundImage: `url(${IOT})`,
         backgroundSize:"cover"
         }}>
      <div class="card rounded shadow-sm border-0 w-52">
        <div class="card-body p-4 w-52">
        
          
          <i className="fa  font-bold text-3xl m-4"></i>
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex">
  <div className="flex">
  <h5 class="text-dark  font-bold text-2xl pt-3">CSE IOT</h5>
 
 <i className="fa font-bold text-3xl m-4"><GiRadioTower className="text-4xl"/></i>
  </div>
    </div>
        </motion.div>
        <motion.div 
          onClick={
          ()=>{
            setbranch("CSBS");
          }
        }
        whileTap={{scale:0.6}}
        className={`   ${
                  branch==="CSBS"
                      ? "bg-cyan-200"
                      : "row pb-5 mb-4 p-8 "
                       }`
                      }
        class="row pb-5 mb-4 p-8 ">
        <div class="col-lg-3 col-md-6 mb-4 mb-lg-0"
        style={{ backgroundImage: `url(${CSBS})`,
         backgroundSize:"cover"
         }}>
        
      <div class="card rounded shadow-sm border-0 w-52">
        <div class="card-body p-4 w-52">
 
      
          <i className="fa  font-bold text-3xl m-4"></i>
          <ul class="list-inline small">
            <li class="list-inline-item m-0"><i class="fa fa-star-o text-success"></i></li>
          </ul>
        </div>
      </div>
    </div>
  <div className="flex">
  <h5 class="text-dark  font-bold text-2xl pt-4"> CSBS </h5>
    <i className="fa font-bold text-3xl m-4"><TbBusinessplan/></i>
  </div>
        </motion.div>
        </div>
        <div className="p-6 m-5">
    <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto ">
         Choose Subject
        </p>
    </div>
{/* 
     <div className="grid grid-cols-5 gap-2">
    {SubjectData &&
        SubjectData.map((data) =>
            semester === data.semester && branch === data.branch ? (
                <motion.div
                    whileTap={{ scale: 0.6 }}
                    key={data.id}
                    className={`group ${
                        semester === data.semester && branch === data.branch ? "bg-stone-500" : "bg-black"
                    } w-48 min-w-[94px] h-48 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-400 text-xl font-bold`}
                    onClick={() => {
                        setSubject(data.subject);
                    }}
                >
                    {data.subject}
                </motion.div>
            ) : null
        )}
</div> */}

<div className="grid grid-cols-5 gap-2">
    {foodItems &&
        foodItems.map((data) =>
            semester === data.semester && branch === data.branch ? (
                <motion.div
                    whileTap={{ scale: 0.6 }
                    }
                    key={data.id}
                    className={`group ${
                        semester === data.semester && branch === data.branch ? "bg-stone-500" : "bg-black"
                    } w-48 min-w-[94px] h-48 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-red-400 text-xl font-bold`}
                    onClick={() => {
                        setSubject(data.Subject);
                    }}
                   
                >
                    {data.Subject}
                </motion.div>
            ) : null
        )}
</div>


      {/* <motion.div  
      whileTap={{scale:0.6}}
      >
     <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto hover:bg-orange-500 p-3 ">
        Get Questions 
        </p>
     </motion.div> */}
     
       <RowContainer
        subjectn={subject}
        semestern={semester}
       />
    </div>
  )
}

export default IemPage;