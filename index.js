const zod = require("zod");
function vallidateInput(obj) {
  const schema = zod.object({
       email: zod.string().email(),
       password: zod.string().min(8)
  })
  const response = schema.safeParse(obj);
  console.log(response);
}
vallidateInput({
        email: "harshitharongali148@gmail.com",
        password:"12345678"
});

