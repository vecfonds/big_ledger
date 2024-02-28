import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationRepository } from './location.repository';
import { SearchByNameDto } from './dto/search-by-name.dto';
import { CommentService } from '../comment/comment.service';
import { UserService } from '../user/user.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LocationService {
  constructor(
    private readonly locationRepository: LocationRepository,
    private readonly commentService: CommentService,
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  create(createLocationDto: CreateLocationDto) {
    return this.locationRepository.create(createLocationDto);
  }

  findAll() {
    return this.locationRepository.findAll();
  }

  search(searchByNameDto: SearchByNameDto) {
    return this.locationRepository.search(searchByNameDto.name);
  }

  async findOne(id: number) {
    const locationEntity = await this.locationRepository.findOneById(id);
    if (!locationEntity) {
      throw new NotFoundException(`Location #${id} not found`);
    }
    return locationEntity;
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    const locationEntity = this.locationRepository.findOneById(id);
    if (!locationEntity) {
      throw new NotFoundException(`Location #${id} not found`);
    }
    return this.locationRepository.update(id, updateLocationDto);
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }

  async addComment(
    token: string,
    id: number,
    createCommentDto: CreateCommentDto,
  ) {
    let decoded;
    try {
      decoded = this.jwtService.verify(token);
      console.log(decoded);
    } catch (error) {
      throw new ForbiddenException('Invalid token');
    }
    const user = await this.userService.findOne(decoded.id);
    const locationEntity = await this.findOne(id);
    if (!user) {
      throw new ForbiddenException('User not found');
    }
    if (!locationEntity) {
      throw new NotFoundException(`Location #${id} not found`);
    }
    return this.commentService.create(
      user,
      locationEntity,
      createCommentDto.content,
    );
  }
}
