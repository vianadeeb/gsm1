import React from 'react';
import Component from '@reactions/component';
import { Col, Row, Button, Form } from 'react-bootstrap';
//import ReactDOM from 'react-dom';
import { Dialog, Pane } from 'evergreen-ui';
import './category.css'
class Category extends Component {
  state = {
    name: (''), email: (''), password: (''), bio: ('')
  }
  render() {
    return (
      <div >

        <div className="main1" >
          <Row style={{ marginRight: 0 + 'px' }} className="card1"   >

            <Col md={12} lg={4} id='ss' >


              <Row style={{ marginRight: 0 + 'px' }} id='ss' >
                <Col sm={12} md={4} lg={12} >
                  <div className="box"></div>
                </Col>



                <Col sm={12} md={4} lg={6} id="q" >
                  <button className="img2"><img className="img22" src={require('./22.png')} /></button>
                </Col>
                <Col sm={12} md={4} lg={6} id="q">
                  <button className="img2"><img className="img11" src={require('./11.png')} /></button>
                </Col>
              </Row>

            </Col>
            <Col md={12} lg={8} id='sr'>
              <Form>
                <Row id="a">
                  <Col>
                    <Row id="textbox" >
                      <Col xs={10} > <input type="text" placeholder="name" value={this.state.name} onChange={(e) => {
                        console.log(e.target.value)
                        this.setState({ name: e.target.value })
                      }} className="i" /></Col>
                      <Col xs={2}>


                        <Component initialState={{ isShown: false }}>
                          {({ state, setState }) => (
                            <Pane>
                              <Dialog
                                isShown={state.isShown}
                                title="Dialog title"
                                onCloseComplete={() => setState({ isShown: false })}
                                confirmLabel="Custom Label"
                              >
                                Dialog content
      </Dialog>

                              <Button onClick={() => setState({ isShown: true })}> <i class="fas fa-pen"></i> </Button>
                            </Pane>
                          )}
                        </Component>
                      </Col> </Row>

                    <Row id="textbox">
                      <Col xs={10}><input type="email" placeholder="email" value={this.state.email} onChange={(e) => {
                        console.log(e.target.value)
                        this.setState({ email: e.target.value })
                      }} className="i" /> </Col>

                      <Col xs={2}>


                        <Component initialState={{ isShown: false }}>
                          {({ state, setState }) => (
                            <Pane>
                              <Dialog
                                isShown={state.isShown}
                                title="Dialog title"
                                onCloseComplete={() => setState({ isShown: false })}
                                confirmLabel="Custom Label"
                              >
                                Dialog content
      </Dialog>

                              <Button onClick={() => setState({ isShown: true })}> <i class="fas fa-pen"></i> </Button>
                            </Pane>
                          )}
                        </Component>
                      </Col> </Row>

                    <Row id="textbox">
                      <Col xs={10}> <input type="password" placeholder="password" value={this.state.password} onChange={(e) => {
                        console.log(e.target.value)
                        this.setState({ password: e.target.value })
                      }} className="i" />   </Col>
                      <Col xs={2} sm={2}>

                        <Component initialState={{ isShown: false }}>
                          {({ state, setState }) => (
                            <Pane>
                              <Dialog
                                isShown={state.isShown}
                                title="Dialog title"
                                onCloseComplete={() => setState({ isShown: false })}
                                confirmLabel="Custom Label"
                              >
                                Dialog content
      </Dialog>

                              <Button onClick={() => setState({ isShown: true })}> <i class="fas fa-pen"></i> </Button>
                            </Pane>
                          )}
                        </Component>
                      </Col> </Row>





                  </Col>
                </Row>

                <textarea rows="3" placeholder="Bio" value={this.state.bio} onChange={(e) => {
                  console.log(e.target.value)
                  this.setState({ bio: e.target.value })
                }} id="place"></textarea>

              </Form>
            </Col>
          </Row>
        </div>
      </div>

    )
  }
}
export default Category;