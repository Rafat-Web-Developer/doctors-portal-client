import React from "react";

const Login = () => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-xl font-bold text-center my-2">Login</h1>
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text font-bold">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text font-bold">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
            <button class="btn btn-secondary text-white">Login</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
