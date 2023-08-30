module.exports = app => {
    const parkRoutes = require('./park.routes')
    app.use("/api/park", parkRoutes)

    const authRoutes = require('./auth.routes')
    app.use("/api/auth", authRoutes)

    const eventRoutes = require('./event.routes')
    app.use("/api/event", eventRoutes)

    const userRoutes = require('./user.routes')
    app.use("/api/user", userRoutes)

    const uploadRoutes = require('./upload.routes')
    app.use("/api/upload", uploadRoutes)
}
