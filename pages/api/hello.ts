// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const list = [
  {name: 'rock'},
  {name: 'zero'},
  {name: 'tsuki'}
]
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Data>>
) {
  res.status(200).json(list)
}
