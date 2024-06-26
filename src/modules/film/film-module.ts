import { Module } from '@nestjs/common';
import { FilmService } from './film-service';
import { FilmController } from './film-controller';

@Module({
  imports: [],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
