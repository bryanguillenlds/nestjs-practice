import { IsString } from 'class-validator'; //decorator for validation

export class CreateMessageDto {
	@IsString()
	content: string;
}