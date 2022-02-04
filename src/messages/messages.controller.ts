import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

//Contorller contains the first part of the req route to simplify
//following reqs
@Controller('messages')
export class MessagesController {
	//This is equivalent to defining repo and assigning
	//inside the constructor. We just pass it as a public arg
	//with typescript syntatic sugar.(automatically assign as props to the class)
	constructor(public messagesService: MessagesService) {
	}

	//Get Decorator
	@Get()
	listMessages() {
		return this.messagesService.findAll();
	}

	//Get Decorator
	@Get('/:id')
	async getMessage(
		@Param('id') id: string
	) {
		const message = await this.messagesService.findOne(id);

		if(!message) throw new NotFoundException('Message Not Found');

		return message;
	}

	//Post Decorator
	@Post()
	createMessage(
		@Body() body: CreateMessageDto
	) {
		return this.messagesService.create(body.content);
	}

}
