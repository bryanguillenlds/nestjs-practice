import { Module } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.service';
import { MessagesController } from './messages.controller';

@Module({
  controllers: [MessagesController],
	providers: [MessagesService, MessagesRepository]
})
export class MessagesModule {}
