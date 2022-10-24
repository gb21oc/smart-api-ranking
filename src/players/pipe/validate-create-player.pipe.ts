import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { IBody } from '../interfaces/body.interface';

@Injectable()
export class ValidateCreatePlayerPipe implements PipeTransform {
  transform(value: IBody, metadata: ArgumentMetadata) {
    let validateCellPhone = /^\+[1-9]{1}\d{3,14}$/g.test(value.cellPhone)
    let validateCategory = /^[A-Z]/g.test(value.category)
    if(!validateCellPhone) throw new BadRequestException(`Check mobile number format: ${value.cellPhone}, follow example: '+5521999999999'`)
    if(!validateCategory) throw new BadRequestException(`Choose just one letter of the alphabet to associate with a category ${value.category}, follow example: 'A'`)
    return value
  }
}
