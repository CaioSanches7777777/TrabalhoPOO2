import { Request, Response } from 'express';

class Principal{
    constructor(){}
    PaginaPrincipal(req: Request, res: Response){
        res.render('home');
    }
}
export default new Principal();