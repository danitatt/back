// Import npm modules __________________________________________________________
import { isPrimary, isWorker } from 'cluster'

// Import slusters modules _____________________________________________________
import primary from './clusters/primary.js'
import worker from './clusters/worker.js'

// Check is primary cluster ____________________________________________________
if (isPrimary) primary()

// Check is worker cluster _____________________________________________________
if (isWorker) worker()