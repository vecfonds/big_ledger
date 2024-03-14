import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { AuthModule } from './mudules/auth/auth.module';
// import { UserModule } from './mudules/user/user.module';
// import { LocationModule } from './mudules/location/location.module';
// import { CommentModule } from './mudules/comment/comment.module';
// import { UserEntity } from './mudules/user/entities/user.entity';
// import { LocationEntity } from './mudules/location/entities/location.entity';
// import { CommentEntity } from './mudules/comment/entities/comment.entity';

import { BankAccount } from './mudules/bank-account/entities/bank-account.entity';
import { BankAccountModule } from './mudules/bank-account/bank-account.module';
import { Ctban, ProductOfCtban } from './mudules/ctban/entities/ctban.entity';
import { CtbanModule } from './mudules/ctban/ctban.module';
import { Ctmua, ProductOfCtmua } from './mudules/ctmua/entities/ctmua.entity';
import { CtmuaModule } from './mudules/ctmua/ctmua.module';
import { Customer } from './mudules/customer/entities/customer.entity';
import { CustomerModule } from './mudules/customer/customer.module';
import {
  DonBanHang,
  ProductOfDonBanHang,
} from './mudules/don-ban-hang/entities/don-ban-hang.entity';
import { DonBanHangModule } from './mudules/don-ban-hang/don-ban-hang.module';
import {
  DonMuaHang,
  ProductOfDonMuaHang,
} from './mudules/don-mua-hang/entities/don-mua-hang.entity';
import { DonMuaHangModule } from './mudules/don-mua-hang/don-mua-hang.module';
import {
  Accountant,
  Salesperson,
  PurchasingOfficer,
  WarehouseKeeper,
  Admin,
} from './mudules/employee/entities/employee.entity';
import { EmployeeModule } from './mudules/employee/employee.module';
import { Hdban } from './mudules/hdban/entities/hdban.entity';
import { HdbanModule } from './mudules/hdban/hdban.module';
import { Hdmua } from './mudules/hdmua/entities/hdmua.entity';
import { HdmuaModule } from './mudules/hdmua/hdmua.module';
import {
  PhieuChiTienMat,
  PhieuChiTienGui,
  ChungTuCuaPhieuChi,
} from './mudules/phieu-chi/entities/phieu-chi.entity';
import { PhieuChiModule } from './mudules/phieu-chi/phieu-chi.module';
import {
  PhieuThuTienMat,
  PhieuThuTienGui,
  ChungTuCuaPhieuThu,
} from './mudules/phieu-thu/entities/phieu-thu.entity';
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
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      // options: {
      //   encrypt: false,
      // },
      synchronize: true,
      entities: [
        BankAccount,
        Ctban,
        ProductOfCtban,
        Ctmua,
        ProductOfCtmua,
        Customer,
        DonBanHang,
        ProductOfDonBanHang,
        DonMuaHang,
        ProductOfDonMuaHang,
        Accountant,
        Salesperson,
        PurchasingOfficer,
        WarehouseKeeper,
        Admin,
        Hdban,
        Hdmua,
        PhieuChiTienMat,
        PhieuChiTienGui,
        ChungTuCuaPhieuChi,
        PhieuThuTienMat,
        PhieuThuTienGui,
        ChungTuCuaPhieuThu,
        PhieuNhap,
        PhieuXuat,
        Product,
        ProductGroup,
        Supplier,
        SupplierGroup,
      ],
    }),
    AuthModule,
    BankAccountModule,
    CtbanModule,
    CtmuaModule,
    CustomerModule,
    DonBanHangModule,
    DonMuaHangModule,
    EmployeeModule,
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
