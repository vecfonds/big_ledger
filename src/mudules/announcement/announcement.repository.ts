import { Injectable } from '@nestjs/common';
import { Announcement } from './entities/announcement.entity';
import { DataSource, In, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { AnnouncementType } from 'src/constants';

@Injectable()
export class AnnouncementRepository {
  private readonly announcementRepository: Repository<Announcement>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.announcementRepository = this.dataSource.getRepository(Announcement);
  }

  create(
    message: string,
    type: AnnouncementType,
    entityId: number,
    leftDate: number,
  ) {
    const newAnnouncement = this.announcementRepository.create({
      message,
      type,
      entityId,
      leftDate: leftDate,
      isRead: false,
      isResolved: false,
    });
    return this.announcementRepository.upsert(newAnnouncement, {
      conflictPaths: ['entityId', 'type'],
    });
  }

  findAll(isRead: boolean[], isResolved: boolean[], type: AnnouncementType[]) {
    return this.announcementRepository.find({
      where: {
        isResolved: In(isResolved),
        isRead: In(isRead),
        type: In(type),
      },
      order: {
        leftDate: 'ASC',
      },
    });
  }

  findOne(id: number) {
    return this.announcementRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, isRead: boolean, isResolved: boolean) {
    return this.announcementRepository.update(id, {
      isRead: isRead,
      isResolved: isResolved,
    });
  }

  delete(id: number) {
    return this.announcementRepository.delete(id);
  }
}
