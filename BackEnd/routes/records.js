const express = require("express");
const router = express.Router();
const { Validate, Record } = require("../modules/records");
router.get("/", async (req, res) => {
  const result = await Record.find();
  res.send(result);
});
router.get("/:id", async (req, res) => {
  const result = await Record.findById(req.params.id);
  if (!result)
    return res.status(404).send("the record with the given id not found");
  res.send(result);
});

router.post("/", async (req, res) => {
  const { error } = Validate(req.body);
  const duplicate = await Record.find({ cnic: req.body.cnic });
  console.log("same CNIC", duplicate);

  if (duplicate.length === 1)
    return res
      .status(400)
      .send("another user is already registered with this cnic");

  if (error) return res.status(400).send(error.details[0].message);
  const record = new Record({
    cnic: req.body.cnic,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    city: req.body.city,
    program: req.body.program,
    gender: req.body.gender,
    phone: req.body.phone,
    email: req.body.email,
    dob: req.body.dob
  });
  try {
    const result = await record.save();
    console.log(result)
    res.send(result);
  } catch (ex) {
    res.send(ex);
    console.log(ex);
  }
});

router.put("/:id", async (req, res) => {
  const { error } = Validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const record = await Record.findByIdAndUpdate(
    req.params.id,
    {
        cnic: req.body.cnic,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        city: req.body.city,
        program: req.body.program,
        gender: req.body.gender,
        phone: req.body.phone,
        email: req.body.email,
        dob: req.body.dob
    },
    { new: true }
  );
  if (!record)
    return res.status(404).send("record with the given id is not found");
  res.send(record);
});
router.delete("/:id", async (req, res) => {
  const record = await Record.findByIdAndRemove(req.params.id);
  if (!record)
    return res.status(404).send("record with the given id is not found");
  res.send(record);
});
module.exports = router;
