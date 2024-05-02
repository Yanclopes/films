import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { FilmService } from './film-service';
import { Film } from './dto/Film';

@Controller('films')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Get()
  async getFilm() {
    return await this.filmService.getFilm();
  }

  @Post()
  async setFilm(@Body() film: Film): Promise<Film> {
    return await this.filmService.setNewFilm(film);
  }

  @Delete(':id')
  async deleteFilm(@Param('id') id: string): Promise<void> {
    await this.filmService.deleteFilm(Number(id));
  }
}
