import { Body, Controller, Get, Param, Post, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

//Contorller contains the first part of the req route to simplify
//following reqs
@Controller('/messages')
export class MessagesController {
	//define the type of the service instance
	messagesService: MessagesService

	constructor() {
		//assign instance of service (creating own dependency on Service.)
		//THIS IS NOT THE RIGHT WAY
		this.messagesService = new MessagesService();
	}
	@Get()
	listMessages() {
		return this.messagesService.findAll();
	}

	@Get('/:id')
	async getMessage(
		@Param('id') id: string
	) {
		const message = await this.messagesService.findOne(id);

		if(!message) throw new NotFoundException('Message Not Found');

		return message;
	}

	@Post()
	createMessage(
		@Body() body: CreateMessageDto
	) {
		return this.messagesService.create(body.content);
	}

}
