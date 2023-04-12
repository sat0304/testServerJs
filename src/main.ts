import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


export async function start() {
  const PORT = 3000
  const app = await NestFactory.create(AppModule)
  await app.listen(PORT, () => console.log(`Server works on express at ${PORT}`));
}
start()
