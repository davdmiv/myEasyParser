import dotenv from 'dotenv'
dotenv.config() // хз как сократить

import express from 'express'
import sequelize from './db.js'
// import models from './oldmodels/models.js'

const PORT = process.env.PORT || 5000

const app = express()

const start = async () => {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ forse: true })
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

start()
