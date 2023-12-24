import prismaClient from '../applications/database.js';

export const authMiddleware = async (req, res, next) => {
  const token = req.get('Authorization');
  if (!token) {
    res.status(401).json({
      errors: 'Unauthorized',
    }).end();
  } else {
    const user = await prismaClient.user.findFirst({
      where: {
        token,
      },
      select: {
        email: true,
        username: true,
        fullname: true,
        password: true,
        alamat: true,
        role: true,
        profileUrl: true,
      },
    });
    if (!user) {
      res.status(401).json({
        errors: 'Unauthorized',
      }).end();
    } else {
      req.user = user;
      next();
    }
  }
};
