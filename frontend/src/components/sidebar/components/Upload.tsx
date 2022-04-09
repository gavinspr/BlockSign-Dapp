import React from "react";
import { Button } from "@chakra-ui/react";

export const Upload = () => {
  function buildFileSelector() {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.setAttribute("multiple", "multiple");
    return fileSelector;
  }
  const fileSelector = buildFileSelector();

  const handleIt = () => {
    fileSelector.click();
    console.log(fileSelector)
  };
  return (
    <Button onClick={handleIt} w="60%" mt={10}>
      Upload
    </Button>
    //  <input type="file" onChange={(e) => console.log(e.target.files)} />
  );
};

// import React from "react";
// // import axios from "axios";

// export function Upload() {
//   const [uploadFile, setUploadFile] = React.useState();
//   const [superHero, setSuperHero] = React.useState();
//   const [uploadResponse, setUploadResponse] = React.useState();

//   const submitForm = (event) => {
//     event.preventDefault();

//     const dataArray = new FormData();
//     dataArray.append("superHeroName", superHero);
//     dataArray.append("uploadFile", uploadFile);

//     // axios
//     //   .post("/", dataArray, {
//     //     headers: {
//     //       "Content-Type": "multipart/form-data"
//     //     }
//     //   })
//     //   .then((response) => {
//     //     setUploadResponse(`File uploaded successfully

//     //     POST - superHeroName
//     //     value - ${superHero}

//     //     FILE - uploadFile`);
//     //   })
//     //   .catch((error) => {
//     //     setUploadResponse(`File uploaded successfully

//     //     POST - superHeroName
//     //     value - ${superHero}

//     //     FILE - uploadFile`);
//     //   });
//   };

//   return (
//     <div className="App">
//       <form onSubmit={submitForm}>
//         <input
//           type="text"
//           onChange={(e) => setSuperHero(e.target.value)}
//           placeholder={"Superhero Name"}
//         />
//         <br />
//         <input type="file" onChange={(e) => setUploadFile(e.target.files)} />
//         <br />
//         <input type="submit" />
//       </form>
//       <hr />
//       <pre>{uploadResponse}</pre>
//     </div>
//   );
// }
