import { Injectable } from '@nestjs/common';
import { Film } from './dto/Film';
import { films } from '../database/films-service';

@Injectable()
export class FilmService {
  async getFilm() {
    try {
      if (films.length === 0) {
        new Error('No film found with this file');
      }

      const randomIndex = Math.floor(Math.random() * films.length);
      return {
        id: randomIndex,
        data: films[randomIndex],
      };
    } catch (error) {
      console.log(error);
      new Error('No film found with this file');
    }
  }

  async setNewFilm(film: Film): Promise<Film> {
    try {
      films.push(film);
      return film;
    } catch (error) {
      console.error('Erro ao adicionar o filme:', error);
    }
  }

  async deleteFilm(id: number) {
    films.splice(id, 1);
  }
}
