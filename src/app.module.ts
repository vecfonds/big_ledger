import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { AuthModule } from './mudules/auth/auth.module';
import { UserModule } from './mudules/user/user.module';
import { LocationModule } from './mudules/location/location.module';
import { CommentModule } from './mudules/comment/comment.module';

import { UserEntity } from './mudules/user/entities/user.entity';
import { LocationEntity } from './mudules/location/entities/location.entity';
import { CommentEntity } from './mudules/comment/entities/comment.entity';

import { Ctban } from './mudules/ctban/entities/ctban.entity';
import { CtbanModule } from './mudules/ctban/ctban.module';
import { Ctmua } from './mudules/ctmua/entities/ctmua.entity';
import { CtmuaModule } from './mudules/ctmua/ctmua.module';
import { Customer } from './mudules/customer/entities/customer.entity';
import { CustomerModule } from './mudules/customer/customer.module';
import { DonBanHang } from './mudules/don-ban-hang/entities/don-ban-hang.entity';
import { DonBanHangModule } from './mudules/don-ban-hang/don-ban-hang.module';
import { DonMuaHang } from './mudules/don-mua-hang/entities/don-mua-hang.entity';
import { DonMuaHangModule } from './mudules/don-mua-hang/don-mua-hang.module';
import { Hdban } from './mudules/hdban/entities/hdban.entity';
import { HdbanModule } from './mudules/hdban/hdban.module';
import { Hdmua } from './mudules/hdmua/entities/hdmua.entity';
import { HdmuaModule } from './mudules/hdmua/hdmua.module';
import { PhieuChi } from './mudules/phieu-chi/entities/phieu-chi.entity';
import { PhieuChiModule } from './mudules/phieu-chi/phieu-chi.module';
import { PhieuThu } from './mudules/phieu-thu/entities/phieu-thu.entity';
import { PhieuThuModule } from './mudules/phieu-thu/phieu-thu.module';
import { PhieuNhap } from './mudules/phieu-nhap/entities/phieu-nhap.entity';
import { PhieuNhapModule } from './mudules/phieu-nhap/phieu-nhap.module';
import { PhieuXuat } from './mudules/phieu-xuat/entities/phieu-xuat.entity';
import { PhieuXuatModule } from './mudules/phieu-xuat/phieu-xuat.module';
import { Product, ProductGroup } from './mudules/product/entities';
import { ProductModule } from './mudules/product/product.module';
import { Supplier, SupplierGroup } from './mudules/supplier/entities';
import { SupplierModule } from './mudules/supplier/supplier.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      // options: {
      //   encrypt: false,
      // },
      synchronize: true,
      entities: [
        UserEntity,
        LocationEntity,
        CommentEntity,
        Ctban,
        Ctmua,
        Customer,
        DonBanHang,
        DonMuaHang,
        Hdban,
        Hdmua,
        PhieuChi,
        PhieuThu,
        PhieuNhap,
        PhieuXuat,
        Product,
        ProductGroup,
        Supplier,
        SupplierGroup,
      ],
    }),
    AuthModule,
    UserModule,
    LocationModule,
    CommentModule,
    CtbanModule,
    CtmuaModule,
    CustomerModule,
    DonBanHangModule,
    DonMuaHangModule,
    HdbanModule,
    HdmuaModule,
    PhieuChiModule,
    PhieuThuModule,
    PhieuNhapModule,
    PhieuXuatModule,
    ProductModule,
    SupplierModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
