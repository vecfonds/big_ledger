import { Injectable } from '@nestjs/common';
import { Announcement } from './entities/announcement.entity';
import { DataSource, In, Repository } from 'typeorm';
import { InjectDataSource } from '@nestjs/typeorm';
import { AnnouncementType } from 'src/constants/annoucement-type';

@Injectable()
export class AnnouncementRepository {
  private readonly announcementRepository: Repository<Announcement>;
  constructor(@InjectDataSource() private readonly dataSource: DataSource) {
    this.announcementRepository = this.dataSource.getRepository(Announcement);
  }

  create(message: string, type: AnnouncementType, id: number) {
    const newAnnouncement = this.announcementRepository.create({
      message,
      type,
      id,
    });
    return this.announcementRepository.save(newAnnouncement);
  }

  findAll(isRead: boolean[], isResolved: boolean[]) {
    return this.announcementRepository.find({
      where: {
        isResolved: In(isResolved),
        isRead: In(isRead),
      },
      order: {
        createdAt: 'DESC',
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

  update(id: number, announcement: Announcement) {
    return this.announcementRepository.update(id, announcement);
  }

  delete(id: number) {
    return this.announcementRepository.delete(id);
  }
}
