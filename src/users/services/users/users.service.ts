import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
        private fakeUsers = [
            {'username': 'funksoda', 'email': 'admin@mail.com'},
            {'username': 'johndoe', 'email': 'johndoe@mail.com'}
        ];

        fetchUsers(){
            return this.fakeUsers;
        };

        createUser(userDetails: CreateUserType){
            this.fakeUsers.push(userDetails);
            return;
        }

        fetchUserById(id: number){
            return this.fakeUsers[id];
        }
};
