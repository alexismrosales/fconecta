import { Request, Response } from "express";

export const getUsers = (req: Request, res: Response) => {

  // Lógica para obtener usuarios (por ejemplo, desde una base de datos)
  const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];

  res.status(200).json(users)
}
