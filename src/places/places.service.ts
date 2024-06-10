import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { UserRepository } from './places.repository';

@Injectable()
export class PlacesService {

  private repository = new UserRepository();

  async create(createPlaceDto: CreatePlaceDto) {
    return await this.repository.create(createPlaceDto)
  }

  async findAll() {
    return await this.repository.findAll()
  }

  async findOne(id: string) {
    return await this.repository.findOne(id)
  }

  async update(id: string, updatePlaceDto: UpdatePlaceDto) {
    return await this.repository.update(id, updatePlaceDto)
  }

  async remove(id: string) {
    return await this.repository.remove(id)
  }
}
