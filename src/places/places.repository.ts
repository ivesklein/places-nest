import { Injectable } from "@nestjs/common";
import { Model } from "dynamoose/dist/Model";
import * as dynamoose from 'dynamoose';
import { Place, PlaceModel } from "./entities/place.entity";
import { CreatePlaceDto } from "./dto/create-place.dto";
import {v4 as uuidv4} from 'uuid';
import { UpdatePlaceDto } from "./dto/update-place.dto";

@Injectable()
export class UserRepository {
    private dbInstance: typeof PlaceModel;

    constructor() {
        this.dbInstance = PlaceModel;
    }

    async create (createPlaceDto: CreatePlaceDto) {
        return await this.dbInstance.create({
            id: uuidv4(),
            name: createPlaceDto.name,
            description: createPlaceDto.description,
            lat: createPlaceDto.lat,
            lon: createPlaceDto.lon
        });
    }

    async findAll() {
        return await this.dbInstance.scan().exec()
    }

    async findOne(id: string) {
        return await this.dbInstance.get({ id: id });
    }

    async update(id: string, updatePlaceDto: UpdatePlaceDto) {
        return await this.dbInstance.update({
          id: id,
          name: updatePlaceDto.name,
          description: updatePlaceDto.description,
          lat: updatePlaceDto.lat,
          lon: updatePlaceDto.lon
        });
    }

    async remove(id: string) {
        return await this.dbInstance.delete({ id: id });
    }

}