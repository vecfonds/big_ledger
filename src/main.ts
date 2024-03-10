import { NestFactory } from '@nestjs/core';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import {
  HttpStatus,
  UnprocessableEntityException,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';

import { AppModule } from './app.module';
import { setupSwagger } from './setup-swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.setGlobalPrefix('/api/v1');
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 1000,
    }),
  );
  // app.use(morgan('dev'));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      transform: true,
      forbidNonWhitelisted: true,
      dismissDefaultMessages: true,
      exceptionFactory: (errors) => {
        let firstValidationError: ValidationError = errors[0];
        while (
          firstValidationError.children &&
          firstValidationError.children.length > 0
        ) {
          firstValidationError = firstValidationError.children[0];
        }
        return new UnprocessableEntityException(
          errors,
          Object.entries(firstValidationError.constraints ?? { '': '' })[0][1],
        );
      },
    }),
  );

  setupSwagger(app);

  await app.listen(8080, '0.0.0.0');
  console.info(`Server running on ${await app.getUrl()}`);
}
bootstrap();
