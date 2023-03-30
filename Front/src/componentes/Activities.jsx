import React from 'react'
import { connect } from 'react-redux'
import ActivitiesIDitinerary from '../redux/actions/actionactivity'
import {
  Row,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import Store from '../redux/store'
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser } from '../redux/actions/LoginAction'
import jwt_decode from "jwt-decode";


class Activities extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      Activity: [],
      idIti: ""
    }
  }

  async componentDidMount() {
    await this.props.ActivitiesIDitinerary(this.props.id_itinerario);

    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      setAuthToken(token)

      const decoded = jwt_decode(token)
      Store.dispatch(setCurrentUser(decoded))
      const currentTime = Date.now / 1000;
      if (decoded.exp < currentTime) {
        Store.dispatch(setCurrentUser())
        window.location.href = "./"
      }
    }


    this.setState({
      Activity: this.props.Activity
    })
  }
  render() {
    return (
      <div>
        <h1>Activities</h1>
        {this.state.Activity.map((i, key) => {
          return (
            <div key={key}>
              <Container>
                <Row>
                  {i.details.map((e, key) => {
                    return (
                      <div key={key}>
                        <Col xs="6" key={e.city}>
                          <img src={e.activityPic} alt="" width="200px" height="200px" />
                        </Col>
                        <h5>{e.title}</h5>
                      </div>
                    )
                  })}
                </Row>
              </Container>

              <h3>Comments</h3>
              {
                this.props.isAuthenticated === true ? (
                  <Form>
                    <FormGroup>
                      <Label for="13">Email</Label>
                      <Input type="text" name="text" id="text" placeholder="Your Comments.." />
                    </FormGroup>
                  </Form>

                ) : ("")

              }

              {i.comment.map((e, key) => {
                return (
                  <div key={key}>
                    <ListGroup>
                      <ListGroupItem>{e.comment}</ListGroupItem>
                    </ListGroup>
                  </div>
                )
              })}
            </div>
          )
        })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Activity: state.Activity,
    isAuthenticated: state.isAuthenticated
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    ActivitiesIDitinerary: (idIti) => dispatch(ActivitiesIDitinerary(idIti))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Activities);

