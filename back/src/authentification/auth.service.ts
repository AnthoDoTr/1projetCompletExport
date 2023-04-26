import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private userServe : UserService,
                private jwtServe: JwtService){}

 

    async signIn(pseudo, pass) {
        const user = await this.userServe.getOne(pseudo);
        const passwordMatches = await bcrypt.compare(pass, user.password);
        if(!passwordMatches) {
            throw new UnauthorizedException();
        }

    
        const payload = { pseudo: user.pseudo, sub: user.id}
        return {
            access_token: await this.jwtServe.signAsync(payload)
        };

    }
}