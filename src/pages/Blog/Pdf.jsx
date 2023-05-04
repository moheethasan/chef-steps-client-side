import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 600,
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});

const Pdf = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>
            1. What is the differences between uncontrolled and controlled
            components?
          </Text>
          <Text>
            Uncontrolled and Controlled components refer to how the form data is
            managed and updated. An uncontrolled component is a form element,
            such as an input field, that manages its own state internally. When
            the user enters data into the input field, the component updates its
            own state without informing the parent component. The parent
            component can still access the data by reading the value of the
            input field, but it does not have direct control over the
            component's state. A controlled component, on the other hand, is a
            form element that is completely controlled by the parent component.
            The parent component maintains the state of the form data and
            updates it through the onChange event. Controlled components give
            the parent component complete control over the form data, which can
            be useful for validation, form submission, and other advanced form
            behaviors. However, they require more code to set up and maintain
            than uncontrolled components.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>
            2. How to validate React props using PropTypes?
          </Text>
          <Text>
            To use PropTypes, you first need to import it from the prop-types
            package. Then, you can define the expected types for your
            component's props using the propTypes object. For example, if you
            expect a prop to be a string, you can use the PropTypes.string
            property. Similarly, you can use PropTypes.number for numeric
            values, PropTypes.array for arrays, and so on. You can also specify
            that a prop is required by using the isRequired method. This will
            throw a warning in the console if the prop is not provided. If a
            prop is provided that does not match the expected type, PropTypes
            will throw a warning in the console, allowing you to catch the issue
            and fix it before it causes any major problems.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>
            3. What is the difference between nodejs and express js?
          </Text>
          <Text>
            Node.js is a JavaScript runtime built on Chrome's V8 JavaScript
            engine. It allows you to run JavaScript code on the server side,
            which means you can use JavaScript to build web applications, APIs,
            command line tools, and more. Express.js, on the other hand, is a
            web application framework for Node.js. It provides a set of features
            for building web applications, such as routing, middleware, and
            template rendering. Express.js simplifies the process of building
            web applications by providing a set of conventions and tools that
            make it easier to build and maintain complex web applications.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>
            4. What is a custom hook, and why will you create a custom hook?
          </Text>
          <Text>
            A custom hook is a reusable piece of logic that you can create in a
            React application. Custom hooks allow you to abstract away complex
            logic into a separate function, making it easier to reuse and
            maintain throughout your application. Custom hooks follow the same
            rules as regular hooks in React, which means that they can access
            state and lifecycle methods using the useState, useEffect, and other
            built-in hooks. Custom hooks can also be used to encapsulate other
            types of logic, such as API calls or form validation. You might
            create a custom hook if you find yourself repeating the same logic
            across multiple components in your application. By creating a custom
            hook, you can centralize that logic in one place, and reuse it
            throughout your application. This can help reduce duplication and
            improve the maintainability of your code.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default Pdf;
