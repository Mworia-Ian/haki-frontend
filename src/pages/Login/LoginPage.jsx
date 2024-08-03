import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import Modal from './Modal'; // Import the Modal component
import "./login.css";

const schema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }).min(1, { message: "Email address is required" }),
  password: z.string().min(1, { message: "Password is required" }),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    setIsLoading(true);
    await fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.status === "fail") {
          toast.error(data.message);
        } else {
          const user = data.user;
          const accessToken = data.access_token;

          // save user session to local storage
          localStorage.setItem("session", JSON.stringify({ user, accessToken }));
          toast.success(data.message);

          navigate("/");
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="login">
    <Container className="container">
      <div className="heading">Log In</div>
      <Form className="form" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            required
            type="email"
            placeholder="E-mail ID"
            className="input"
            {...register("email")}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control
            required
            type="password"
            placeholder="Password"
            className="input"
            {...register("password")}
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </Form.Group>

        <Button className="login-button" type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log In"}
        </Button>
        <Form.Text className="forgot-password">
          <a href="#">Reset Password?</a>
        </Form.Text>
      </Form>
      <div className="social-account-container">
        <span className="title">Or Log in with</span>
        <div className="social-accounts">
          <Button className="social-button apple">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
            </svg>
          </Button>
          <Button className="social-button twitter">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
            </svg>
          </Button>
          <Button className="social-button facebook">
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 6.016 4.432 10.984 10.207 11.852V15.18h-2.97v-3.155h2.97V9.927c0-3.475 1.693-5 4.58-5c1.384 0 2.115.102 2.462.149v2.753h-1.97c-1.226 0-1.655 1.163-1.655 2.473v1.724h3.594l-.488 3.155h-3.106v8.696C19.481 23.083 24 18.075 24 12c0-6.627-5.373-12-12-12"></path>
            </svg>
          </Button>
        </div>
      </div>
      <span className="agreement">
        <a href="#" onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}>Learn user licence agreement</a>
      </span>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Container>
    </div>
  );
}
