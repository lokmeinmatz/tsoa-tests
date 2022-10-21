// src/users/usersController.ts
import {
  Controller,
  Get,
  Query,
  Route,
  Security,
  Request
} from "tsoa";

@Route("users")
export class UsersController extends Controller {
 
  @Get()
  @Security('user')
  async getUsers(@Query() data: string, @Request() req: Express.Request): Promise<{ name: string, data: string }> {
    return {
      name: (req as any).user.name,
      data
    }
  }
}