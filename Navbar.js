import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
export function Logi(props) {
  return (

    <div>
      <h2>{props.start}</h2>
    </div>

  )
}
export function Navbarr(props) {
  return (

    <>
      <Navbar  className='${props.mode}' bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Converter</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto "
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">About</Nav.Link>
              <NavDropdown title="MarketPlace" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="www.instagram.com">
                  Instagram
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="ww.facebook.com" >
                Facebook
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}

export function Txtform(props) {
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext)
  }

  const handleloclick = () => {
    let newtext = text.toLocaleLowerCase();
    setText(newtext)
  }
  //handleclearclick
  const handleclearclick = () => {
    let newtext = "";
    setText(newtext)
  }
  ///bold
  const handleboldclick = () => {
    let newtext = text.bold();
    setText(newtext)
  }

  //copy
  const handlecopyclick = () => {
    let text = document.getElementById('mybox');
    text.select();
   navigator.clipboard.writeText(text.value);
  }
  const handleonchange = (event) => {


    setText(event.target.value)

  }

  /*
Harshit Satone
11 months ago
To implement alternating case:
    const onAlternatingCase = () => {
        let newtext = ""
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) == 0) {
                newtext += text[index].toLowerCase()
            }
            else {
                newtext += text[index].toUpperCase()
            }

        }
        setText(newtext)
    }*/
  const [text, setText] = useState("")
  // setText("new text");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea placeholder='Enter your text here' onChange={handleonchange}
            value={text}
            className="textarea form-control"
            id="mybox" rows="4">

          </textarea>
        </div>
        <div class="btns w3-show-inline-block">
          <div class="w3-bar">
            <button className="mx-2  btn btn-primary"
              onClick={handleupclick}
            >
              Convert to Uppercase
            </button>
          </div>


          <div class="w3-bar">

            <button className="btn mx-2 btn-primary"
              onClick={handleloclick}
            >
              Convert to lowercase
            </button>

          </div>

          <div class="w3-bar">

            <button className="btn mx-2 btn-primary"
              onClick={handleboldclick}
            >
              Convert to bold
            </button>

          </div>
          <div class="w3-bar">

<button className="btn mx-2 btn-primary"
  onClick={handlecopyclick}
>Copy Text
</button>

</div>


          <div class="w3-bar">

            <button className="btn mx-2 btn-primary"
              onClick={handleclearclick}
            >Clear Text
            </button>

          </div>

        </div>

      </div>

      <div className="my-2 footer">
        <h2>Your Text Summary</h2>
        <div className="pp">
          <p>{text.split(" ").length} words and {text.length}  characters</p>
          <p>{0.008 * text.split(" ").length}  Seconds are Required to read
          </p>
        </div>

        <h2>Preview</h2>
        <div className="pev">
          <h3>{text}</h3>
        </div>

      </div>
    </>
  )
}