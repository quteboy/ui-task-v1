import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
}));
const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.toolbar}>
      <div className="row p-2 mb-5">
        <div className="offset-lg-2 mt-3 col-lg-8 col-12">
          <div className="d-flex align-items-center">
            <i className="fas fa-caret-left text-muted fa-lg"></i>
            <h4 class="ml-2 m-0 p-0 text-muted">Videos</h4>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="offset-lg-3 text-center col-lg-6">
          <input
            type="text"
            className="form-control form-rounded border-0"
            placeholder="Insert URL here"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />

          <div className="text-center mt-5 text-muted font-weight-bold">Or</div>
          <div className="col-lg-4">
            <div className="d-flex card flex-column bg-white justify-content-center align-items-center">
              <div className="text-black font-weight-bold">upload</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
