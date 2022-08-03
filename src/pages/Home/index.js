import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col } from "react-bootstrap/";
import { UserDisplay, RepoDisplay, People, TopLanguages } from "../../components";
import { useSelector, useDispatch } from 'react-redux';
import { getResult } from '../../actions';
import { useEffect } from "react";


const Home = () => {

  const userObject = useSelector(state => state.userObject);

  const login = userObject[0].owner.login
  const profilephoto = userObject[0].owner.avatar_url
  const weblink = userObject[0].owner.url

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
          <UserDisplay login={login} profilephoto={profilephoto} weblink={weblink} />
        </Col>
      </Row>
      {/* This is the Second row which renders repo and people section. On small screens every column is 12units wide - so effectively a row -  but on medium and above they will break into columns*/}
      <Row className="align-items-start">
        {/* display repos section */}
        <Col sm={12} md={9} xl={10}>
          {userObject.map((item) => (
            <RepoDisplay name={item.name} description={item.description} stargazers_count={item.stargazers_count} forks_count={item.forks_count} open_issues={item.open_issues} updated_at={item.updated_at}/>
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
