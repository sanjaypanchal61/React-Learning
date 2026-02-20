import React from 'react'
import { useForm } from "react-hook-form";

const BasicExample = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Enter name" />
      <input {...register("email")} placeholder="Enter email" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default BasicExample
