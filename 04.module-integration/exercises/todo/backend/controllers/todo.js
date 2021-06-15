// id: 1,
// title: 'titulo',
// check: false/true

let list = [];

module.exports = {
  list: (req, res) => {
    return res.json(list);
  },
  create: (req, res) => {
    const { title } = req.body;

    list.push({
      id: `${new Date().getTime()}`,
      title,
      check: false,
    });

    const lastItem = list[list.length - 1];

    return res.json(lastItem);
  },
  delete: (req, res) => {
    const { id } = req.params;

    const newList = list.filter(currentItem => {
      return currentItem.id !== id
    });

    list = newList;

    return res.status(200).send();
  },
  edit: (req, res) => {
    const { id } = req.params;
    const { check } = req.body;
    
    const newList = list.map(currentItem => {
      if (currentItem.id === id) {
        return {
          ...currentItem,
          check,
        }
      }

      return currentItem;
    });

    list = newList;

    return res.status(200).send();
  },
}