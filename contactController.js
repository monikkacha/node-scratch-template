Contact = require('./contactModel');

exports.index = (req, res) => {
    Contact.get((err, contacts) => {
        if (err) {
            res.json({
                status: "error",
                message: "something went wrong at database site",
            });
        }
        res.json({
            status: "success",
            message: "success",
            data: contacts
        });
    });
}

exports.new = (req, res) => {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : '';
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.gender = req.body.gender;
    contact.save(err => {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            msg: "new user created successfully",
        })
    });
};

exports.view = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            data: contact,
        });
    });
};

exports.update = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if (err);
            res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
        contact.gender = req.body.gender;
        contact.save(err => {
            if (err)
                res.send(err);
            res.json({
                status: "success",
                msg: "User updated successfully",
            });
        });
    });
}

exports.delete = (req, res) => {
    Contact.remove({ _id: req.params.contact_id }, (err, contact) => {
        if (err)
            res.send(err);
        res.json({ status: "success", msg: " User deleted successfully" });
    });
};