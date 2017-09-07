import addQuestion from './addQuestion'
export function initServices(app){
  app.use('/services',addQuestion)
}


