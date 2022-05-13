import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  let errorMessage;

  if (error || updateError) {
    errorMessage = (
      <p className="text-error font-bold my-2">
        {error.message || updateError.message}
      </p>
    );
  }

  const onSubmit = async (data) => {
    console.log(data);
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    navigate("/");
  };

  return (
    <section className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
      >
        <h1 className="text-xl font-bold text-center my-2">Sign Up</h1>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required.",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt font-bold text-error">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required.",
                },
                pattern: {
                  value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                  message: "Provide a valid email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt font-bold text-error">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt font-bold text-error">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
              {...register("password", {
                required: {
                  value: true,
                  message: "Email is required.",
                },
                minLength: {
                  value: 6,
                  message: "Password must have 6 character.",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt font-bold text-error">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt font-bold text-error">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          {errorMessage}
          <div className="form-control mt-6">
            <input
              className="btn btn-secondary text-white"
              type="submit"
              value="Sign Up"
            />
          </div>
          <p>
            Already have an account{" "}
            <Link to="/login" className="text-secondary font-bold">
              Login
            </Link>
          </p>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
