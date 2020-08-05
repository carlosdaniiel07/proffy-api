import app from './app'
import database from './database'

database()

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running!')
})
