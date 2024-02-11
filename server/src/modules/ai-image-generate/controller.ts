import { Request, Response, NextFunction } from 'express';
import axios, { AxiosRequestConfig } from 'axios';
import dotenv from 'dotenv';
import { error } from 'console';

dotenv.config();

const aiGenerate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { prompt } = req.body;

  // configure the image generating request
  const options: AxiosRequestConfig = {
    method: 'POST',
    url: 'https://api.edenai.run/v2/image/generation',
    headers: {
      Authorization: `Bearer ${process.env.EDEN_API_KEY}`, // Replace with your actual API key
    },
    data: {
      providers: 'openai',
      text: prompt,
      resolution: '512x512',
      fallback_providers: '',
    },
  };

  try {

    // send the request
    const response = await axios.request(options);
    console.log(response.data);

    // take the base64 string to the image constant
    const image = response.data.openai.items[0].image;

    // response with image in base64
    res.status(200).json({ photo: image });

    // error handling
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
};

export default aiGenerate;
