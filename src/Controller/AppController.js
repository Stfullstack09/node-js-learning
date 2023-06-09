const AppServices = require("../Services/AppServices");

class AppController {
    async CreateCourse(req, res) {
        try {
            const data = await AppServices.CreateCourse(req.body);

            res.status(200).json(data);
        } catch (error) {
            res.status(503).json({
                errCode: -1,
                msg: "error from server",
                dataErr: `${error}`,
            });
        }
    }

    async UpdateCourse(req, res) {
        try {
            const data = await AppServices.UpdateCourse(req.body);

            res.status(200).json(data);
        } catch (error) {
            res.status(503).json({
                errCode: -1,
                msg: "error from server",
                dataErr: `${error}`,
            });
        }
    }

    async GetAllCourses(req, res) {
        try {
            const data = await AppServices.GetAllCourses(req.query.isCustomer);

            res.status(200).json(data);
        } catch (error) {
            res.status(503).json({
                errCode: -1,
                msg: "error from server",
                dataErr: `${error}`,
            });
        }
    }

    async GetOneCourses(req, res) {
        try {
            const data = await AppServices.GetOneCourses(
                req.query.isCustomer,
                req.query.id
            );

            res.status(200).json(data);
        } catch (error) {
            res.status(503).json({
                errCode: -1,
                msg: "error from server",
                dataErr: `${error}`,
            });
        }
    }

    async SoftDeleteCourse(req, res) {
        try {
            const data = await AppServices.SoftDeleteCourse(req.body);

            res.status(200).json(data);
        } catch (error) {
            res.status(503).json({
                errCode: -1,
                msg: "error from server",
                dataErr: `${error}`,
            });
        }
    }

    async UpdateCoursePublic(req, res) {
        try {
            const data = await AppServices.UpdateCoursePublic(req.body);

            res.status(200).json(data);
        } catch (error) {
            res.status(503).json({
                errCode: -1,
                msg: "error from server",
                dataErr: `${error}`,
            });
        }
    }

    async RegisterUser(req, res) {
        try {
            const data = await AppServices.RegisterUser(req.body);

            res.status(200).json(data);
        } catch (error) {
            res.status(503).json({
                errCode: -1,
                msg: "error from server",
                dataErr: `${error}`,
            });
        }
    }

    async DestroyCourse(req, res) {
        try {
            const data = await AppServices.DestroyCourse(req.params.id);

            res.status(200).json(data);
        } catch (error) {
            res.status(503).json({
                errCode: -1,
                msg: "error from server",
                dataErr: `${error}`,
            });
        }
    }

    async LoginUser(req, res) {
        try {
            const data = await AppServices.LoginUser(req.body);

            res.status(200).json(data);
        } catch (error) {
            res.status(503).json({
                errCode: -1,
                msg: "error from server",
                dataErr: `${error}`,
            });
        }
    }
}

module.exports = new AppController(); /* Dut */
