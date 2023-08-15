import fs from 'fs';

import { HfInference } from "@huggingface/inference";
import 'dotenv/config';

/*- Specifying HF access token -*/
const HF_ACCESS_TOKEN = process.env.HF_ACCESS_TOKEN;
/*- Imitialize HF Inference Class -*/
const hf = new HfInference(HF_ACCESS_TOKEN);
/*- Specifying the HF Traided model to use -*/
/*- From: https://huggingface.co/models -*/
/*- This is an image-to-text model -*/
const model = 'nlpconnect/vit-gpt2-image-captioning';
/*- Image Path -*/
// const imagePath = 'file:///Users/entaroadun/Projects/ai/hf_tutorial/public/Wall.jpeg';
// const imagePath = './resources/OneSunday.jpg';
// const imagePath = './resources/Wall.jpeg';
// const imagePath = './resources/DSC_0001.jpg';
// const imagePath = './resources/DSC_0054.jpg';
const imagePath = './resources/DSC_0070.jpg';
// const imagePath = './resources/DSC_0115.jpg';
// const imagePath = './resources/DSC_2104.jpg';
/*- Fetch the image and Convert it into a blob -*/
// const imageBlob = await response.blob();
const response = await fs.readFileSync(imagePath);

/*- Use the image-to-text function to generate an inage caption -*/
const result = await hf.imageToText({
  data: response,
  model: model,
});
console.log(`========================================`);
console.log(result);
console.log(`========================================`);
