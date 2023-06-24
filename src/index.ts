import { Elysia } from 'elysia'
import answers from './answers'
import { cors } from '@elysiajs/cors'

const app = new Elysia()
    .use(cors())
    .state('answers', answers[~~(Math.random() * answers.length)])
    .use((app) => {
        setInterval(() => {
            app.store.answers = answers[~~(Math.random() * answers.length)]
        }, 1)

        return app
    })
    .get('/', ({ store: { answers } }) => answers)
    .get('/all', () => answers)
    .listen(8080)

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
