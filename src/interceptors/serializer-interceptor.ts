import type {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

import { MetaResponseDto, ResponseDto } from '../common/dto/response.dto';

@Injectable()
export class SerializerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map((data) => {
        const res = context.switchToHttp().getResponse();
        const statusCode = res.statusCode as number;
        let meta = new MetaResponseDto(statusCode);
        if (data?.pagination) {
          meta = new MetaResponseDto(statusCode, data.pagination);
          data = data.data;
        }

        return new ResponseDto<typeof data>(data, meta);
      }),
    );
  }
}
