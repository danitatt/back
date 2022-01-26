// Import npm modules __________________________________________________________
import koa from 'koa'

// Create worker function ______________________________________________________
const worker = () => {

  // Create koa app
  const app = new koa()

  // Listen app
  app
    .listen(3000)

  // Console log pid
  console
    .log(process.pid)

}

// Export default worker function ______________________________________________
export default worker