import { Body, ConsoleLogger, Controller, Get, Param, Post, Query, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { RESPONSE_PASSTHROUGH_METADATA } from '@nestjs/common/constants';
import e, { Request, Response } from 'express';
import { identity } from 'rxjs';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

// this is the controller for the router '/users'
@Controller('users') //localhost:3001/users
export class UsersController {
    // if we add a router inside the controller, it will be appended to the controller's path
    // for example: @Get('fetch') = '/users/fetch'
    // but because it is empty, we will get '/users'

    /* @Get()
    getUsers() {
        return {username: 'John Doe', email: 'foo@mail.com'};
    } */

    @Get('getposts')
    getUsersPosts() {
        return[{
            username: 'John Doe', email: 'foo@mail.com',
            posts: [
                {title: 'Post 1', content: 'Content 1'},
                {title: 'Post 2', content: 'Content 2'},
            ],
        }];
    
    };

    @Get('getposts/comments')
    getUsersPostsComments() {
        return[{
            id: 1,
            title: 'Post 1',
            content: 'Content 1',
            comments: [
                {id: 1, content: 'Comment 1'},
                {id: 2, content: 'Comment 2'},
            ],
        }];
    }; 

    @Get(':id')
    getUserById(@Param('id') id: string){
        console.log(id);
        return {id};
    };

    @Get(':id/:postId')
    getUserByIdPostId(@Param('id') id: string, @Param('postId') postId: string){
        console.log(id);
        return {id, postId};
    };

    // Query parameters
    @Get()
    getUsers(@Query('sortBy') sortBy: string){
        console.log(sortBy);
        return [{username: 'John Doe', email: 'foo@mail.com'}];
    }


    /* @Post('create')
    createUser(@Req() request: Request, @Res() response: Response){
        console.log(request.body);
        response.send({status: 'OK'});
        response.send('Created') 
    }; */

    // The NestJS way, better for validation
    // https://docs.nestjs.com/techniques/validation
    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userPayload: CreateUserDto){
        // now we have type safety
        console.log(userPayload);
        return {status: 'OK'};
    }
};