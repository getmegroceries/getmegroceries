import { BadRequestException, Controller, Get, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { Headers } from '@nestjs/common';
import { Post, Body } from '@nestjs/common';

@Controller()
export class AppController {
  private followers: Map<string, string[]> = new Map();

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): HelloResponse {
    console.log('getting hello');
    return this.appService.getHello();
  }

  @Get('/followers')
  getFollowers(@Headers('x-user-id') userId?: string): string[] {
    if (!userId) {
      throw new BadRequestException('User id is required');
    }
    // get user id from header
    return this.followers.get(userId) || [];
  }

  // create a post request to add a follower
  @Post('/followers')
  addFollower(
    @Body() followerData: FollowerData,
    @Headers('x-user-id') userId?: string,
  ): void {
    console.log('wtf');
    console.log(followerData, userId);
    const { followerId } = followerData;
    if (!userId || !followerId) {
      console.log('Uhm');
      throw new BadRequestException('!User id and follower id are required!');
    }
    if (!this.followers.has(userId)) {
      this.followers.set(userId, []);
    }
    const followers = this.followers.get(userId);
    if (!followers.includes(followerId)) {
      followers.push(followerId);
    }
  }
}

interface FollowerData {
  followerId: string;
}

export interface HelloResponse {
  msg: string;
}
