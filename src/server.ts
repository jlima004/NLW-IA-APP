import { fastify } from 'fastify'
import { fastifyCors } from '@fastify/cors'

import { getAllPromptsRoute } from './routes/get-all-prompts'
import { uploadVideoRoute } from './routes/upload-video'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAiCompletionsRoute } from './routes/generate-ai-completions'

const app = fastify()

app.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'POST'],
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionsRoute)

app.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP Server Running at http://localhost:3333')
})