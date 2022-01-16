import type {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';

type Data = {
    name: string
}

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    return res.status(200).json({ name: 'Simply Jetpacks' })
}

export default handler;
