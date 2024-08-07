import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { Form, Button, Container } from "react-bootstrap";
import "../../css/forgotPassword.css";

const schema = z.object({
  email: z.string().email({ message: "Enter a valid email address" }).min(1, { message: "Email address is required" }),
});


export default function ForgotPassword() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "" },
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (values) => {
    setIsLoading(true);
    await fetch(`${process.env.REACT_APP_BASE_URL}/request-reset`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then(res => res.json())
      .then(data => {
        setIsLoading(false);
        if (data.status === "fail") {
          toast.error(data.message);
        } else {
          toast.success(data.message);
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="forgot-password">
    <Container className="forgot-password-container">
      <h2>Forgot Password</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Enter your email"
            className="input"
            {...register("email")}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </Form.Group>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Sending..." : "Send Reset Link"}
        </Button>
      </Form>
    </Container>
    </div>
  );
}
