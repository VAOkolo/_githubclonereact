import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap/";
import { UserDisplay, RepoDisplay, People, TopLanguages, Error } from "../../components";
import { useSelector } from 'react-redux';
import { timeSince, dateTransformer} from '../../helpers/helpers'
// import { getFollowers, getResult } from '../../actions';
// import { useEffect } from "react";


const Home = () => {

  const userObject = useSelector(state => state.userObject);
  const extraUserData = useSelector(state => state.userData);
  console.log('extra user data',extraUserData)
  // console.log('i am the user object in the the home pagae', userObject)
  const followers = useSelector(state => state.followers);
  // console.log('userobject', userObject);
  // console.log('home pagae followers', followers);

  let login = ""
  let profilePhoto = ""
  let weblink = ""

  if(Object.keys(userObject).length !== 0){
    login = userObject[0].owner.login
    profilePhoto = userObject[0].owner.avatar_url
    weblink = userObject[0].owner.url
  }
    


  return (
    <Container fluid className="bg-black">
      {/* This is the top row */}
      <Row>
        {/* displayer user info / profile */}
        <Col sm={12}>
        { Object.keys(userObject).length !== 0 ?
          <UserDisplay login={login} profilePhoto={profilePhoto} weblink={weblink} /> : <div> </div>}
        </Col>
      </Row>
      {/* This is the Second row which renders repo and people section. On small screens every column is 12units wide - so effectively a row -  but on medium and above they will break into columns*/}
      <Row className="align-items-start">
        {/* display repos section */}
        <Col sm={12} md={9} xl={9}>
          {Object.keys(userObject).length !== 0 ? userObject.map((item,i) => (
            i < 10 && <RepoDisplay key={item.id} name={item.name} description={item.description} stargazers_count={item.stargazers_count} forks_count={item.forks_count} open_issues={item.open_issues} updated_at={timeSince(dateTransformer(item.updated_at))}/>
          )) : <Error />}
  
        </Col>
             {/* display people section */}
        <Col className="d-inlineflex justify-content-center" sm={12} md={3} xl={3}>
       { Object.keys(userObject).length !== 0 ?
            <People followers={followers}/> : <div> </div> }
          { Object.keys(userObject).length !== 0 ?
            <TopLanguages /> :<div> </div> }
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
