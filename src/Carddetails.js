import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Box, Button, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Addcard from "./Addcard";
import "./Carddetails.css";
function Carddetails({
  cardinput,
  addComponent,
  components,
  deletedata,
  setcomponents,
}) {
  return (
    <div className="formname">
      <Box>
        <form onSubmit={cardinput.handleSubmit}>
          <Card
            sx={{
              background: "rgb(0,175,185)",
              background:
                "linear-gradient(135deg, rgba(0,175,185,1) 0%, rgba(254,217,183,1) 100%)",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Employee Registeration form</h3>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <FormControl>
                    <TextField
                      id="filled-basic"
                      name="firstname"
                      label="First Name"
                      variant="filled"
                      onBlur={cardinput.handleBlur}
                      value={cardinput.values.firstname}
                      onChange={cardinput.handleChange}
                    />
                    {cardinput.touched.firstname &&
                    cardinput.errors.firstname ? (
                      <div style={{ color: "red" }}>
                        {cardinput.errors.firstname}
                      </div>
                    ) : null}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormControl>
                    <TextField
                      id="filled-basic"
                      name="lastname"
                      label="Last Name"
                      variant="filled"
                      onBlur={cardinput.handleBlur}
                      value={cardinput.values.lastname}
                      onChange={cardinput.handleChange}
                    />
                    {cardinput.touched.lastname && cardinput.errors.lastname ? (
                      <div style={{ color: "red" }}>
                        {cardinput.errors.lastname}
                      </div>
                    ) : null}
                  </FormControl>
                </Grid>
                <Grid item xs={6}>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    fullWidth
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="gender"
                    value={cardinput.values.gender}
                    onChange={cardinput.handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                  {cardinput.touched.gender && cardinput.errors.gender ? (
                    <div style={{ color: "red" }}>
                      {cardinput.errors.gender}
                    </div>
                  ) : null}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    //minWidth
                    id="filled-number"
                    label="Age"
                    name="age"
                    value={cardinput.values.age}
                    onChange={cardinput.handleChange}
                    type="number"
                    onBlur={cardinput.handleBlur}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="filled"
                  />
                  {cardinput.touched.age && cardinput.errors.age ? (
                    <div style={{ color: "red" }}>{cardinput.errors.age}</div>
                  ) : null}
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" type="submit">
                Submit
              </Button>
            </CardActions>
          </Card>
        </form>
        <Card
          sx={{
            my: 2,
            background: "rgb(254,217,183)",
            background:
              "linear-gradient(135deg, rgba(254,217,183,1) 0%, rgba(0,175,185,1) 100%)",
          }}
        >
          <Button size="small" color="primary" onClick={addComponent}>
            Addition Details
          </Button>

          <h3 style={{ textAlign: "center" }}>Education Details</h3>
          {components.map((item) => (
            <Addcard text={item} id={item} deletedata={deletedata} />
          ))}
          <Button
            onClick={() => {
              setcomponents([]);
            }}
          >
            Close
          </Button>
        </Card>
      </Box>
    </div>
  );
}

export default Carddetails;
