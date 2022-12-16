import "./App.css";
import Carddetails from "./Carddetails";
import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import Viewtable from "./Viewtable";

function App() {
  const [fulldata, setfulldata] = React.useState([]);
  const [tabledata, settabledata] = React.useState([]);
  const [components, setcomponents] = React.useState([]);

  function addComponent() {
    setcomponents([...components, Date.now()]);
  }

  const cardinput = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      gender: "",
      age: "",
    },
    validationSchema: yup.object({
      firstname: yup
        .string()
        .max(20, "Character should Max 20")
        .required("First Name Required"),
      lastname: yup
        .string()
        .max(20, "Character should Max 20")
        .required("Last Name Required"),
      gender: yup.string().required("Select gender"),
      age: yup.number().max(100, "max 100").required("age is Required"),
    }),
    onSubmit: (value) => {
      get(value);
      cardinput.handleReset();
    },
  });
  function get(values) {
    console.log(values);
    setfulldata([...fulldata, values]);
    console.log(fulldata);
  }
  function deletedata(id) {
    const temp = [...components];
    const idx = temp.findIndex((item) => item === id);
    console.log(id, idx, components);
    if (idx >= 0) {
      temp.splice(idx, 1);
    }
    setcomponents(temp);
  }
  return (
    <div className="all">
      <Carddetails
        cardinput={cardinput}
        addComponent={addComponent}
        components={components}
        deletedata={deletedata}
        setcomponents={setcomponents}
      />
      <Viewtable fulldata={fulldata} />
    </div>
  );
}

export default App;
