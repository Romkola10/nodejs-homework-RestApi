const { Contact } = require("../models/contactModels");

const getContacts = async () => {
  const contacts = await Contact.find({});
  return contacts;
};

const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};

const addContact = async ({ name, email, phone, favorite }) => {
  const contact = new Contact({ name, email, phone, favorite });
  await contact.save();
  return contact;
};

const updateContact = async (contactId, { name, email, phone, favorite }) => {
  await Contact.findByIdAndUpdate(
    { _id: contactId },
    { $set: { name, email, phone, favorite } }
  );

  return Contact.findById(contactId);
};

const updateContactStatus = async (contactId, fields) => {
  await Contact.findByIdAndUpdate({ _id: contactId }, fields, {
    new: true,
  });

  return Contact.findById(contactId);
};

const removeContact = async (contactId) => {
  const contact = await Contact.findByIdAndRemove({ _id: contactId });
  return contact;
};

module.exports = {
  getContacts,
  getContactById,
  addContact,
  updateContact,
  updateContactStatus,
  removeContact,
};