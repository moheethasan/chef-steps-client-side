import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto my-36 px-2">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium bg-red-100">
          1. What is the differences between uncontrolled and controlled
          components?
        </div>
        <div className="collapse-content bg-red-50">
          <p>
            <b>Uncontrolled</b> and <b>Controlled</b> components refer to how
            the form data is managed and updated. An <b>uncontrolled</b>{" "}
            component is a form element, such as an input field, that manages
            its own state internally. When the user enters data into the input
            field, the component updates its own state without informing the
            parent component. The parent component can still access the data by
            reading the value of the input field, but it does not have direct
            control over the component's state. A<b> controlled</b> component,
            on the other hand, is a form element that is completely{" "}
            <b>controlled</b> by the parent component. The parent component
            maintains the state of the form data and updates it through the
            onChange event. <b>Controlled</b> components give the parent
            component complete control over the form data, which can be useful
            for validation, form submission, and other advanced form behaviors.
            However, they require more code to set up and maintain than{" "}
            <b>uncontrolled</b> components.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-1"
      >
        <div className="collapse-title text-xl font-medium bg-red-100">
          1. How to validate React props using PropTypes?
        </div>
        <div className="collapse-content bg-red-50">
          <p>
            To use <b>PropTypes</b>, you first need to import it from the
            prop-types package. Then, you can define the expected types for your
            component's props using the <b>propTypes</b> object. For example, if
            you expect a prop to be a string, you can use the{" "}
            <b>PropTypes.string </b>
            property. Similarly, you can use <b>PropTypes.number</b> for numeric
            values, <b>PropTypes.array</b> for arrays, and so on. You can also
            specify that a prop is required by using the isRequired method. This
            will throw a warning in the console if the prop is not provided. If
            a prop is provided that does not match the expected type,{" "}
            <b>PropTypes </b>
            will throw a warning in the console, allowing you to catch the issue
            and fix it before it causes any major problems.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-1"
      >
        <div className="collapse-title text-xl font-medium bg-red-100">
          1. What is the difference between nodejs and express js?
        </div>
        <div className="collapse-content bg-red-50">
          <p>
            <b>Node.js</b> is a JavaScript runtime built on Chrome's V8
            JavaScript engine. It allows you to run JavaScript code on the
            server side, which means you can use JavaScript to build web
            applications, APIs, command line tools, and more. <br />
            <b>Express.js</b>, on the other hand, is a web application framework
            for <b>Node.js</b>. It provides a set of features for building web
            applications, such as routing, middleware, and template rendering.{" "}
            <b>Express.js</b> simplifies the process of building web
            applications by providing a set of conventions and tools that make
            it easier to build and maintain complex web applications.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mt-1"
      >
        <div className="collapse-title text-xl font-medium bg-red-100">
          1. What is a custom hook, and why will you create a custom hook??
        </div>
        <div className="collapse-content bg-red-50">
          <p>
            A <b>custom hook</b> is a reusable piece of logic that you can
            create in a React application. <b>Custom hooks</b> allow you to
            abstract away complex logic into a separate function, making it
            easier to reuse and maintain throughout your application.
            <b>Custom hooks</b> follow the same rules as regular hooks in React,
            which means that they can access state and lifecycle methods using
            the useState, useEffect, and other built-in hooks.{" "}
            <b>Custom hooks</b> can also be used to encapsulate other types of
            logic, such as API calls or form validation. You might create a{" "}
            <b>custom hook</b> if you find yourself repeating the same logic
            across multiple components in your application. By creating a custom
            hook, you can centralize that logic in one place, and reuse it
            throughout your application. This can help reduce duplication and
            improve the maintainability of your code.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
