// Import npm modules __________________________________________________________
import { cpus } from 'os'
import cluster from 'cluster'

// Create primary function _____________________________________________________
const primary = () => {

  // Get cpus length
  let length = cpus()
    .length

  // Fork clusters
  while (length--) cluster
    .fork()

}

// Export default primary function _____________________________________________
export default primary