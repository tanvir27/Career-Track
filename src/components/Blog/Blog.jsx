import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Blog = () => {
  return (
    <div ClassName="">
      <div className="container">
        <div className="mt-5">
          <h1 className="text-danger fw-bold text-center">
            {" "}
            Frequently Asked Questions
          </h1>
        </div>
        <div class="row row-cols-1 row-cols-md-2 g-2 mt-2">
          <div class="col rounded shadow p-3">
            <div class="card border border-0">
              <div class="card-body">
                <h5 class="card-title">When should you use context API?</h5>
                <p class="card-text">
                  Basically, Context API is to provide a way for child
                  components to update the state of their parents without having
                  to pass a function down through multiple levels of components.
                  Context API should be used when we have data that needs to be
                  shared across multiple components and we want to avoid prop
                  drilling and simplify state management in our application.
                </p>
              </div>
            </div>
          </div>
          <div class="col rounded shadow p-3">
            <div class="card border border-0">
              <div class="card-body">
                <h5 class="card-title">What is a custom hook?</h5>
                <p class="card-text">
                  A custom hook is a JavaScript function which name starts with
                  use and can be used to call other hooks.Actually, A custom
                  hook is a function that uses one or more built-in React hooks
                  and returns a stateful value or values, which can then be used
                  in a React functional component.
                </p>
              </div>
            </div>
          </div>
          <div class="col rounded shadow p-3">
            <div class="card border border-0">
              <div class="card-body">
                <h5 class="card-title">What is useRef?</h5>
                <p class="card-text">
                  useRef is a built-in React hook that accepts one argument as
                  the initial value and returns a reference. It returns a
                  mutable ref object. It can be used to access and modify the
                  properties of a DOM element, store values that persist across
                  renders, and hold on to a value that does not trigger a
                  re-render when it changes.
                </p>
              </div>
            </div>
          </div>
          <div class="col rounded shadow p-3">
            <div class="card border border-0">
              <div class="card-body">
                <h5 class="card-title">What is useMemo?</h5>
                <p class="card-text">
                  useMemo is a hook provided by React that allows us to memoize
                  expensive computations so that they are only performed when
                  necessary. It is very useful in optimizing the performance of
                  a React component by eliminating repeating heavy computations.
                  useMemo takes two arguments: a function that returns a value,
                  and an array of dependencies. The function is only executed
                  when one of the dependencies changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
