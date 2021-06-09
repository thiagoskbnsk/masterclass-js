let balance = 0;
let history = [];

module.exports = {
  historico: (req, res) => {
    res.json(history);
  },
  saida: (req, res) => {
    const { value } = req.body;

    const balanceBefore = balance;
  
    balance -= value;

    const text = `Removido R$${value}`;
    history.push(text);

    res.json({
      balance,
      balanceBefore,
      saida: value,
    });
  },
  entrada: (req, res) => {
    const { value } = req.body;

    const balanceBefore = balance;
  
    balance += value;
  
    const text = `Adicionado R$${value}`;
  
    history.push(text);
  
    res.json({
      balance,
      balanceBefore,
      entrada: value,
    });
  },
  total: (req, res) => {
    history.push('Requisitado total');

    res.json({
      total: balance.toFixed(2)
    });
  }
}