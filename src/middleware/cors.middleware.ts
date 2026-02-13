import { Request, Response, NextFunction } from 'express';

const allowedOrigins = [
  'http://localhost:4200',
  'https://mb.pavanoriginals.in',
//   'https://yourdomain.com',
];

export const corsMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const origin = req.headers.origin;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );

  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Authorization'
  );

  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }

  next();
};
