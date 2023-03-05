const express = require("express");
const router = express.Router();

const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("../../models/contacts");

const { addPostValidation } = require("../../middlewares/validation");

router.get("/", listContacts);

router.get("/:contactId", getContactById);

router.post("/", addPostValidation, addContact);

router.put("/:contactId", addPostValidation, addPostValidation, updateContact);

router.delete("/:contactId", removeContact);

module.exports = router;