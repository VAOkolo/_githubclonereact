import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap/";
import { UserDisplay, RepoDisplay, People, TopLanguages } from "../../components";
import { useSelector, useDispatch } from 'react-redux';
import { getResult } from '../../actions';
import { useEffect } from "react";


const Home = () => {

  const name = useSelector(state => state.name);
  const description = useSelector(state => state.description);
  const stargazers_count = useSelector(state => state.stargazers_count);
  const forks_count = useSelector(state => state.forks_count);
  const open_issues = useSelector(state => state.open_issues);
  const updated_at = useSelector(state => state.updated_at);

  const dispatch = useDispatch();

useEffect(()=> {

  
dispatch(getResult());

}, [])

  const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container fluid className="bg-black">
      {/* This is the top row */}
      <Row>
        {/* displayer user info / profile */}
        <Col sm={12}>
          <UserDisplay />
        </Col>
      </Row>
      {/* This is the Second row which renders repo and people section. On small screens every column is 12units wide - so effectively a row -  but on medium and above they will break into columns*/}
      <Row className="align-items-start">
        {/* display repos section */}
        <Col sm={12} md={9} xl={10}>
          {testData.map((item) => (
            <RepoDisplay name={name} description={description} stargazers_count={stargazers_count} forks_count={forks_count} open_issues={open_issues} updated_at={updated_at}/>
          ))}
        </Col>
             {/* display people section */}
        <Col sm={12} md={3} xl={2}>
            <People />
            <TopLanguages />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
