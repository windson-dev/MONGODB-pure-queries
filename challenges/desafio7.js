db.produtos.find(
  { tags: { $exists: false }, vendidos: { $ne: 50 } },
  { nome: 1, _id: 0, vendidos: 1 },
);