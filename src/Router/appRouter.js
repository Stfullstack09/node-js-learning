const express = require("express");
const Router = express.Router();
const AppController = require("../Controller/AppController");

const initialRouterApp = (app) => {
    // Methods

    Router.post("/create-course", AppController.CreateCourse);
    Router.post("/update-course", AppController.UpdateCourse);
    Router.get("/get-all-courses", AppController.GetAllCourses);
    Router.get("/get-one-courses", AppController.GetOneCourses);
    Router.post("/soft-delete", AppController.SoftDeleteCourse);
    Router.post("/update-public", AppController.UpdateCoursePublic);
    Router.post("/delete/:id", AppController.DestroyCourse);

    Router.post("/register-user", AppController.RegisterUser);
    Router.post("/login-user", AppController.LoginUser);

    app.use("/api/v1/app", Router);
};

module.exports = initialRouterApp; /*  module.exports === export default */

/* 
loc:8080/api/v1/app/home

*/
