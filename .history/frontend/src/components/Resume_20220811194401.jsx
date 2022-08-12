import React, { useState, useEffect, useRef } from "react";
import { Document, Page } from "react-pdf";

function Resume({ showResume }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div
      className="flex flex-col z-40 left-0 top-0 justify-center items-center text-xl bold h-full no-scrollbar w-full border-r border-slate-200
      text-center "
    >
      {showResume}
      <Document file="VictorP-Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={numPages} />
      </Document>
    </div>
  );
}

export default Resume;
