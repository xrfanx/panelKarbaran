import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Form from "react-bootstrap/Form";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [userID, setUserID] = useState("");
  const [getData, setGetData] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function getUser() {
      const response = await fetch(
        `https://xrfan-project-default-rtdb.firebaseio.com/users.json`,
      );
      const data = await response.json();
      setUsers(Object.entries(data));
    }
    getUser();
  }, [getData]);

  useEffect(() => {
    let mainUserInfo = users.find((user) => user[0] == userID);
    if (mainUserInfo) {
      setFirstName(mainUserInfo[1].firstName);
      setLastName(mainUserInfo[1].lastName);
      setEmail(mainUserInfo[1].email);
    }

    console.log(mainUserInfo);
  }, [userID]);

  const removeHandler = async () => {
    await fetch(
      `https://xrfan-project-default-rtdb.firebaseio.com/users/${userID}.json`,
      {
        method: "DELETE",
      },
    ).then((response) => console.log(response));

    setGetData((prev) => !prev);
    setShowDeleteModal(false);
  };

  const editHandler = async () => {
    let userNewInfos = {
      firstName,
      lastName,
      email,
    };

    await fetch(
      `https://xrfan-project-default-rtdb.firebaseio.com/users/${userID}.json`,
      {
        method: "PUT",
        body: JSON.stringify(userNewInfos),
      },
    ).then((response) => console.log(response));

    setGetData((prev) => !prev);
    setShowEditModal(false);
  };

  return (
    <Container className="container mt-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{user[1].firstName}</td>
              <td>{user[1].lastName}</td>
              <td>{user[1].email}</td>
              <td
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  fontSize: 22,
                }}
              >
                <MdDelete
                  onClick={() => {
                    (setShowDeleteModal(true), setUserID(user[0]));
                  }}
                  style={{ cursor: "pointer" }}
                />
                <MdEdit
                  onClick={() => {
                    setShowEditModal(true);
                    setUserID(user[0]);
                  }}
                  style={{ cursor: "pointer" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* delete modal */}
      <Modal
        show={showDeleteModal}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">Warning!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Delete confirm</h4>
          <p>Are you sure to delete this user?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowDeleteModal(false)}>Close</Button>
          <Button onClick={() => removeHandler()}>Yes, Delete!</Button>
        </Modal.Footer>
      </Modal>

      {/* edit modal */}

      <Modal
        show={showEditModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit user
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* formbox */}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>FirstName:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Firstname"
                onChange={(event) => setFirstName(event.target.value)}
                value={firstName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>LastName:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Lastname"
                onChange={(event) => setLastName(event.target.value)}
                value={lastName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </Form.Group>
          </Form>
          {/* formbox end */}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShowEditModal(false)}>Close</Button>
          <Button onClick={() => editHandler()}>Edit</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
