import React from "react";
import Pdf from "./Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Blog = () => {
  return (
    <div className="container mx-auto my-20 px-2 text-center">
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
