import { createApp1 } from "./app1";

(async () => {
  const app1 = await createApp1();
  app1.listen(8080, () => {
    console.log('listening')
  })
})()