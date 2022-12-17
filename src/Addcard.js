import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { Container } from "@mui/system";

function Addcard({ id, deletedata }) {
  const addinput = useFormik({
    initialValues: {
      passedout: "",
      course: "",
      percentage: "",
    },
    validationSchema: yup.object({
      passedout: yup.string().required("Year Required"),
      course: yup.string().required("course Required"),
      percentage: yup
        .number()
        .max(100, "max 100")
        .required("Percentage Required"),
    }),
    onSubmit: (value) => {
      console.log(value);
      addinput.handleReset();
    },
  });
  return (
    <div>
      <Container fixed>
        <form onSubmit={addinput.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <InputLabel id="demo-simple-select-label">PassedOut</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={addinput.values.passedout}
                onChange={addinput.handleChange}
                onBlur={addinput.handleBlur}
                name="passedout"
                label="Age"
              >
                <MenuItem value={2022}>2022</MenuItem>
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2020}>2020</MenuItem>
              </Select>
              {addinput.touched.passedout && addinput.errors.passedout ? (
                <div style={{ color: "red" }}>{addinput.errors.passedout}</div>
              ) : null}
            </Grid>
            <Grid item xs={3}>
              <InputLabel id="demo-simple-select-label">Course</InputLabel>
              <Select
                fullWidth
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={addinput.values.course}
                onChange={addinput.handleChange}
                onBlur={addinput.handleBlur}
                name="course"
                label="Age"
              >
                <MenuItem value={"B.E"}>B.E</MenuItem>
                <MenuItem value={"HSL"}>HSL</MenuItem>
                <MenuItem value={"SSLC"}>SSLC</MenuItem>
              </Select>
              {addinput.touched.course && addinput.errors.course ? (
                <div style={{ color: "red" }}>{addinput.errors.course}</div>
              ) : null}
            </Grid>
            <Grid item xs={3}>
              <InputLabel id="demo-simple-select-label">Percentage</InputLabel>
              <TextField
                fullWidth
                id="filled-number"
                name="percentage"
                value={addinput.values.percentage}
                onChange={addinput.handleChange}
                onBlur={addinput.handleBlur}
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
              {addinput.touched.percentage && addinput.errors.percentage ? (
                <div style={{ color: "red" }}>{addinput.errors.percentage}</div>
              ) : null}
            </Grid>
            <Grid
              item
              xs={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button type="submit">Add</Button>
              <Button
                onClick={() => {
                  deletedata(id);
                }}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </div>
  );
}

export default Addcard;
