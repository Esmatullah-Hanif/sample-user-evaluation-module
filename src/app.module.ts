import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { SampleUserModule } from "./sample-user/sample-user.module";

@Module({
  imports: [SampleUserModule],
  controllers: [AppController],
})
export class AppModule {}
