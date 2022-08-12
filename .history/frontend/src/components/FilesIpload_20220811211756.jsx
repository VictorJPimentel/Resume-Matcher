import React from "react";
import axios from "axios";

function Example() {
  const toastId = React.useRef(null);
  function handleUpload() {
    axios
      .request({
        method: "post",
        url: "/foobar",
        data: myData,
        onUploadProgress: (p) => {
          const progress = p.loaded / p.total;
          if (toastId.current === null) {
            toastId = toast("Upload in Progress", {
              progress: progress,
            });
          } else {
            toast.update(toastId.current, {
              progress: progress,
            });
          }
        },
      })
      .then((data) => {
        toast.done(toastId.current);
      });
  }
  return (
    <div>
      <button onClick={handleUpload}>Upload something</button>
    </div>
  );
}

export default Example;
