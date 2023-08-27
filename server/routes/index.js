module.exports = app => {
    const parkRoutes = require('./park.routes')
    app.use("/api", parkRoutes)

    const authRoutes = require('./auth.routes')
    app.use("/api", authRoutes)
}
