import { Request, response, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from '../repositories/SurveysRepository'

class SurveysController {
    async create(req: Request, res: Response) {
        const { title, description } = req.body;

        const surveysRepository = getCustomRepository(SurveysRepository);

        const survey = surveysRepository.create({
            title,
            description
        });

        await surveysRepository.save(survey);

        return res.status(201).json(survey);
    }

    async show(req: Request, res: Response) {
        const surveysRepository = getCustomRepository(SurveysRepository);

        const all = await surveysRepository.find(); // Este método apresenta todos os registros da tabela

        return res.json(all);
    }

}

export { SurveysController };

