import { MessagesRepository } from "./messages.repository";

export class MessagesService {
	//define the type of the repo
	messagesRepo: MessagesRepository;

	constructor() {
		//assign repo (creating own dependency on MessagesRepo.)
		//THIS IS NOT THE RIGHT WAY
		this.messagesRepo = new MessagesRepository();
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