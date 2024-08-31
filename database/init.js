db.createCollection("user");
db.user.insertOne({
  username: "fervillalbag",
  password: "somehardpassword",
  email: "fer@correo.com",
  subscribedAt: new Date(),
});
