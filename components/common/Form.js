import { useRef, useState } from "react";
import { Form, Button, Alert, CloseButton } from "react-bootstrap";
const Formhome = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [isLoading, setLoading] = useState(false);
  // const [show, setShow] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        console.log(data);

        data.error ? setError(true) : setError(false);
        data.error ? setMessage(data.error) : setMessage(data.token);
      });
  };

  return (
    <div className="max-small">
      <Form>
        {message && (
          <Alert
            className="flex justify"
            variant={error ? "danger" : "success"}
          >
            {message}
            <CloseButton onClick={() => setMessage("")} variant="danger" />
          </Alert>
        )}
        <h1 className="text-center">Welcom Back</h1>
        <div className="text-center">
          <Form.Text>Sub-side text goes here</Form.Text>
        </div>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            ref={emailRef}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            required
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="d-grid gap-2">
          <Button
            disable={isLoading}
            onClick={submitHandler}
            variant="secondary"
          >
            {isLoading ? "Loading…" : "Login"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Formhome;
