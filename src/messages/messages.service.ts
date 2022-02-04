import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessagesService {
	//This is equivalent to defining repo and assigning
	//inside the constructor. We just pass it as a public arg
	//with typescript syntatic sugar.(automatically assign as props to the class)
	constructor(public messagesRepo: MessagesRepository){

	}

	findOne(id: string) {
		return this.messagesRepo.findOne(id);
	}

	findAll() {
		return this.messagesRepo.findAll();
	}

	create(content: string) {
		return this.messagesRepo.create(content);
	}
}