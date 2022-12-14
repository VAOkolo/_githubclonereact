import React from 'react'
import { Col, Container, Figure, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getFollowers, getResult } from "../../actions";
import { Lander } from '../../pages';

const Error = () => {
  
//   return (
//     <Container fluid >
//  <Row>
//  <Col sm={12}>
//    <Col sm={12} className='my-2 bg-black text-light text-start ' border="secondary">
//   <Figure>
//       <Figure.Image
//         width={500}
//         height={500}
//         alt="171x180"
//         src="https://cdn-media-1.freecodecamp.org/images/1*FFYtzf28XKPFBdknfXf-jg.jpeg"
//       />
//       <Figure.Caption>
//         Nulla vitae elit libero, a pharetra augue mollis interdum.
//       </Figure.Caption>
//     </Figure>
//   </Col>
//  </Col>
 
//  </Row>
  
//     </Container>
   
  
//   )

  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("i am event value", searchTerm);
    dispatch(getResult(searchTerm));
    // dispatch(getFollowers(searchTerm))
  };
  const updateInput = (e) => {
    e.preventDefault();
    const input = e.target.value;
    setSearchTerm(input);
  };

  useEffect(() => {
    // setSearchTerm("github");
  }, []);

  return (
    <Container fluid >
 <Row>
 {/* <Col sm={12}>
   <Col sm={12} className='my-2 bg-black text-light text-start ' border="secondary">
   <div className="searchDiv">
       <div className="githubTitle">
         <h1>Github</h1>
       </div>
       <div className="bar">
         <form onSubmit={handleSubmit}>
         <input onChange={updateInput} className="searchBar" type="text" title="Search" value={searchTerm}></input>
         <button className="searchButton">Search</button>
         </form>
       </div>
     </div>
  </Col>
 </Col> */}
 <Lander />
 </Row>
  
    </Container>
   
  
  )

  // return (
  //   <>
  //   <div className="searchDiv">
  //     <div className="githubTitle">
  //       <h1>Github</h1>
  //     </div>
  //     <div className="bar">
  //       <input className="searchBar" type="text" title="Search"></input>
  //       <button className="searchButton">Search</button>
  //     </div>
  //   </div>
  //   </>
  // )


}

export default Error
