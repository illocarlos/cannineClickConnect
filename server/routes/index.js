module.exports = app => {
    const parkRoutes = require('./park.routes')
    app.use("/api", indexRoutes)
    const authRoutes = require('./auth.routes')
    app.use("/api", indexRoutes)
}
