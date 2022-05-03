import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MailController } from './mail/mail.controller';
import { MailModule } from './mail/mail.module';
import { RunnerModule } from './runner/runner.module';

@Module({
  controllers: [AppController, MailController],
  providers: [AppService],
  imports: [UsersModule, AuthModule, MailModule, RunnerModule],
})
export class AppModule {}
