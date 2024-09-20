const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); 

const validateHeaders = (req, res, next) => {
  const userId = req.headers['user-id'];
  const scope = req.headers['scope'];

  if (userId !== 'ifabula' || scope !== 'user') {
    return res.status(401).json({
      responseCode: 401,
      responseMessage: 'UNAUTHORIZED',
    });
  }

  next();
};

app.get('/api/user', validateHeaders, (req, res) => {
  res.status(200).json({
    responseCode: 200,
    responseMessage: 'Success',
    data: {
      id: 1,
      name: 'Tatang',
      role: 'Admin',
    },
  });
});

app.post('/api/user', validateHeaders, (req, res) => {
  const { id, name, role } = req.body;

  if (!id || !name || !role) {
    return res.status(400).json({
      responseCode: 400,
      responseMessage: 'Data tidak lengkap',
    });
  }

  res.status(201).json({
    responseCode: 201,
    responseMessage: 'Berhasil membuat user',
    data: {
      id,
      name,
      role,
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});