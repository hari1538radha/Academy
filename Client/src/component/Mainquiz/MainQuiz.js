import React from 'react'
import Footer from '../Login/Footer/footer'
import "./mainquiz.css"
import Navbar from '../Navbar/navbar'
import ReactPaginate from 'react-paginate'
import { useNavigate } from 'react-router-dom'
import quizhhintlogo from "../Login/Images/quizhintlogo.svg"

const MainQuiz = () => {
    const Navigate =useNavigate();

    const handelquestionpage = (data) =>
    {
        console.log(data.selected)
    }
    const Endtest = () =>
    {
        alert("You are going to end the Test")
        Navigate("/quiz")
    }
  return (
    <div>
        <nav><Navbar/></nav>
        <div className='main-quiz--conatiner'>
            
            <div className='quiz-questions'>
                <div className='quiz-questions--header'>
                <h1 className='Question-number'>Question  1</h1>
                <div className='quizhint-logo--container'>
                <img src={quizhhintlogo}></img>
                </div>
                
                </div>

 <p className='question'>Lörem ipsum sasor någon krosk sosade far? </p>
 <div className='option--container'>
 <div className='question-option--1'><input type="radio"></input>
 <p>Option 1</p>
 </div>
 <div className='question-option--2'><input type="radio"></input>
 <p>Option 2</p>
 </div>
 <div className='question-option--3'><input type="radio"></input>
 <p>Option 3</p>
 </div>
 <div className='question-option--4'><input type="radio"></input>
 <p>Option 4</p>
 
 </div>
 </div>
 <div className='react-paginate--container'>
 
 <ReactPaginate className='react-paginate'
 previousLabel={"Previous"}
 previousClassName={"previous-class"}
 pageClassName={"page-class"}
 onPageChange={handelquestionpage}
 pageCount={"4"}
 breakClassName={"break-class"}
 breakLabel={""}
 nextLabel={"Next"}
 nextClassName={"previous-class"}
 />
 <div >
    <button className='Skip-btn' >Skip</button>
 </div>
</div>
<div className='endtest-block'>
    <button className='Endtest-btn' onClick={Endtest}>End Test</button>
</div>
 
</div>

<div>
<div  className='chapters-container'>
   <p>Chapters</p>
   <p>Machines</p>
   <p>Networks</p>
   <p> Electricals</p>
   <p>Java</p>
   <p>C++</p>
   <p>Python</p>
   <p>Javascript</p>
   <button className="chapter-seemore-btn">See More</button>
</div>

    
</div></div>
        
        <footer><Footer/></footer>

    </div>
  )
}

export default MainQuiz