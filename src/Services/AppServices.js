const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class AppService {
    CreateCourse(data) {
        return new Promise(async (resolve, reject) => {
            try {
                if (
                    !data.title |
                    !data.level |
                    !data.image |
                    !data.description |
                    !data.videoID |
                    !data.userId
                ) {
                    return resolve({
                        errCode: 1,
                        msg: "Missing required parameters",
                    });
                }

                await db.Course.create({
                    title: data.title,
                    level: data.level,
                    image: data.image,
                    description: data.description,
                    videoID: data.videoID,
                    isDelete: 1,
                    isPublic: 1,
                    userId: data.userId,
                });

                resolve({
                    errCode: 0,
                    msg: "ok",
                    data,
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    UpdateCourse(data) {
        return new Promise(async (resolve, reject) => {
            try {
                if (
                    !data.id |
                    !data.title |
                    !data.userId |
                    !data.level |
                    !data.image |
                    !data.description |
                    !data.videoID
                ) {
                    return resolve({
                        errCode: 1,
                        msg: "Missing required parameters",
                    });
                }

                const dataRes = await db.Course.update(
                    {
                        title: data.title,
                        level: data.level,
                        image: data.image,
                        description: data.description,
                        videoID: data.videoID,
                        userId: data.userId,
                    },
                    {
                        where: {
                            id: data.id,
                        },
                    }
                );

                resolve({
                    errCode: 0,
                    msg: "update successfully",
                    data: dataRes,
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    GetAllCourses(isCustomer = "true") {
        return new Promise(async (resolve, reject) => {
            try {
                let data;

                if (isCustomer === "true") {
                    data = await db.Course.findAll({
                        where: {
                            isPublic: 1,
                            isDelete: 1,
                        },
                    });
                } else {
                    data = await db.Course.findAll();
                }

                resolve({
                    errCode: 0,
                    msg: "ok",
                    data,
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    GetOneCourses(isCustomer = "true", id) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!id) {
                    return resolve({
                        errCode: 1,
                        msg: "Missing required parameters",
                    });
                }

                let data;

                if (isCustomer === "true") {
                    data = await db.Course.findOne({
                        where: {
                            isPublic: 1,
                            isDelete: 1,
                            id: id,
                        },
                    });
                } else {
                    data = await db.Course.findOne({
                        where: {
                            id: id,
                        },
                        include: [{ model: db.User, as: "UserData" }],
                    });
                }

                // const user = await db.User.findOne({
                //     where: {
                //         id: +data.id,
                //     },
                //     // raw: false,
                //     // nest: false,
                //     // populte : =>  no SQL =>  o quan he
                // });

                resolve({
                    errCode: 0,
                    msg: "ok",
                    data,
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    SoftDeleteCourse(data) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!data.id || !data.isDelete) {
                    return resolve({
                        errCode: 1,
                        msg: "Missing required parameters",
                    });
                }

                await db.Course.update(
                    {
                        isDelete: data.isDelete,
                    },
                    {
                        where: {
                            id: data.id,
                        },
                    }
                );

                resolve({
                    errCode: 0,
                    msg: "ok",
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    UpdateCoursePublic(data) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!data.id || !data.isPublic) {
                    return resolve({
                        errCode: 1,
                        msg: "Missing required parameters",
                    });
                }

                await db.Course.update(
                    {
                        isPublic: data.isPublic,
                    },
                    {
                        where: {
                            id: data.id,
                        },
                    }
                );

                resolve({
                    errCode: 0,
                    msg: "ok",
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    DestroyCourse(id) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!id) {
                    return resolve({
                        errCode: 1,
                        msg: "Missing required parameters",
                    });
                }

                await db.Course.destroy({
                    where: {
                        id: id,
                    },
                });

                resolve({
                    errCode: 0,
                    msg: "ok",
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    RegisterUser(data) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!data.email | !data.password) {
                    return resolve({
                        errCode: 1,
                        msg: "missing required parameters",
                    });
                }

                const check = await this.CheckEmailExit(data.email);

                if (check) {
                    return resolve({
                        errCode: 3,
                        msg: "Email already exists",
                    });
                }

                const salt = bcrypt.genSaltSync(saltRounds);
                const passWodHash = bcrypt.hashSync(data.password, salt);

                await db.User.create({
                    email: data.email,
                    password: passWodHash,
                    phoneNumber: data.phoneNumber,
                    address: data.address,
                });

                resolve({
                    errCode: 0,
                    msg: "ok",
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    LoginUser(data) {
        return new Promise(async (resolve, reject) => {
            try {
                if (!data.email | !data.password) {
                    return resolve({
                        errCode: 1,
                        msg: "missing required parameters",
                    });
                }

                const user = await db.User.findOne({
                    where: {
                        email: data.email,
                    },
                });

                if (!user) {
                    return resolve({
                        errCode: 2,
                        msg: "Email not found",
                        user,
                    });
                }

                const checkPass = bcrypt.compareSync(
                    data.password,
                    user.password
                ); /* true : dung mat khau , false sai mat khau */

                if (checkPass) {
                    return resolve({
                        errCode: 0,
                        msg: "Login successful",
                        data: user,
                    });
                } else {
                    return resolve({
                        errCode: 1,
                        msg: "Wrong password",
                    });
                }
            } catch (error) {
                reject(error);
            }
        });
    }

    async CheckEmailExit(email) {
        try {
            const check = await db.User.findOne({
                where: { email: email },
            });

            if (check) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            reject(error);
        }
    }
}

module.exports = new AppService();
