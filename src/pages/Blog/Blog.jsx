import React from "react";
import Pdf from "./Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Blog = () => {
  return (
    <div className="container mx-auto my-20 px-2 text-center">
      <fieldset className="border-t border-gray-400">
        <legend className="mx-auto px-4 text-gray-800 text-3xl md:text-4xl xl:text-5xl font-semibold mb-20">
          Frequently Asked Questions
        </legend>
      </fieldset>
      <Pdf></Pdf> <br />
      <PDFDownloadLink document={<Pdf />} fileName="blog-page.pdf">
        {({ loading }) =>
          loading ? (
            <button className="btn-primary mt-20">Loading PDF</button>
          ) : (
            <button className="btn-primary mt-20">Download PDF</button>
          )
        }
      </PDFDownloadLink>
    </div>
  );
};

export default Blog;
