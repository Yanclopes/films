import { Injectable } from '@nestjs/common';
import { Film } from './dto/Film';
import { films } from '../database/films-service';

@Injectable()
export class FilmService {
  async getFilm() {
    try {
      if (films.length === 0) {
        return {
          error: false,
          id: 0,
          data: {
            name: 'Sem filmes',
            films: 'Sem filmes',
          },
        };
      }

      const randomIndex = Math.floor(Math.random() * films.length);
      return {
        error: false,
        id: randomIndex,
        data: films[randomIndex],
      };
    } catch (error) {
      return {
        error: true,
        id: 0,
      };
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
