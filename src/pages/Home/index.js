import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap/";
import { UserDisplay, RepoDisplay, People, TopLanguages } from "../../components";
import { useSelector } from 'react-redux';
// import { getFollowers, getResult } from '../../actions';
// import { useEffect } from "react";


const Home = () => {

  const userObject = useSelector(state => state.userObject);
  console.log('i am the user object in the the home pagae', userObject)
  const followers = useSelector(state => state.followers);
  // console.log('userobject', userObject);
  // console.log('home pagae followers', followers);


  // const login = userObject[0].owner.login
  // const profilePhoto = userObject[0].owner.avatar_url
  // const weblink = userObject[0].owner.url



  return (
    <Container fluid className="bg-black">
      {/* This is the top row */}
      <Row>
        {/* displayer user info / profile */}
        <Col sm={12}>
          <UserDisplay login={userObject[0].owner.login} profilePhoto={userObject[0].owner.avatar_url} weblink={userObject[0].owner.url} />
        </Col>
      </Row>
      {/* This is the Second row which renders repo and people section. On small screens every column is 12units wide - so effectively a row -  but on medium and above they will break into columns*/}
      <Row className="align-items-start">
        {/* display repos section */}
        <Col sm={12} md={9} xl={10}>
          {userObject.map((item) => (
            <RepoDisplay key={item.id} name={item.name} description={item.description} stargazers_count={item.stargazers_count} forks_count={item.forks_count} open_issues={item.open_issues} updated_at={item.updated_at}/>
          )) }
        </Col>
             {/* display people section */}
        <Col sm={12} md={3} xl={2}>
            <People followers={followers}/>
            <TopLanguages />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
