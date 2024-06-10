import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesModule } from './places/places.module';
import { FolderModule } from './folder/folder.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), PlacesModule, FolderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
