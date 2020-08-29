import { Request, Response } from 'express';

import createUser from './services/CreateUser';

export default function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'Bruno.email.com',
        password: '123456789',
        techs: [
            'node',
            'react',
            'react native',
            { title: 'javaScript', experience: 100 }
        ]
    });

    return response.json(user);

}