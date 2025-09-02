import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const port = Number.parseInt(process.env.PORT) || 4000 

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.enableShutdownHooks()
  await app.listen(port, '0.0.0.0')
}
bootstrap()
