import { Controller, Get } from '@nestjs/common';
import e from 'express';
import { identity } from 'rxjs';

// this is the controller for the router '/users'
@Controller('users') //localhost:3001/users
export class UsersController {
    // if we add a router inside the controller, it will be appended to the controller's path
    // for example: @Get('fetch') = '/users/fetch'
    // but because it is empty, we will get '/users'
    @Get()
    getUsers() {
        return {username: 'John Doe', email: 'foo@mail.com'};
    }

    @Get('posts')
    getUsersPosts() {
        return[{
            username: 'John Doe', email: 'foo@mail.com',
            posts: [
                {title: 'Post 1', content: 'Content 1'},
                {title: 'Post 2', content: 'Content 2'},
            ],
        }];
    
    };

    @Get('posts/comments')
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

};

