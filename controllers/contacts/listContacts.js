const { Contact } = require('../../models');
const { sendSuccessRes } = require('../../helpers');

const listContacts = async (req, res) => {
  console.log(req.query);
  const { page = 1, limit = 3 } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({}, '_id name email phone favorite', {
    skip,
    limit: +limit,
  });
  sendSuccessRes(res, { result });
};

module.exports = listContacts;
