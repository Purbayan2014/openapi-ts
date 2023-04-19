# Plagiarism Checking API
<img src="https://cdn.cdnlogo.com/logos/o/29/OpenAI-Logo_800x800.png" alt="OpenAI API" width="48" height="48"/> &nbsp;&nbsp;
<img src="https://img.icons8.com/color/48/000000/nextjs.png" alt="Next.js" width="48" height="48"/> &nbsp;&nbsp;
<img src="https://img.icons8.com/color/48/000000/redis.png" alt="Redis" width="48" height="48"/> &nbsp;&nbsp;
<img src="https://img.icons8.com/color/48/000000/prisma.png" alt="Prisma" width="48" height="48"/> &nbsp;&nbsp;
<img src="https://img.icons8.com/color/48/000000/material-ui.png" alt="Material UI" width="48" height="48"/> &nbsp;&nbsp;
<img src="https://img.icons8.com/color/48/000000/tailwind-css.png" alt="Tailwind CSS" width="48" height="48"/> &nbsp;&nbsp;
<img src="https://img.icons8.com/color/48/000000/typescript.png" alt="TypeScript" width="48" height="48"/>


This state-of-the-art plagiarism checker API leverages the power of OpenAI API, Next.js, Redis, Prisma, Material UI, Tailwind CSS, and TypeScript to provide advanced text analysis and generate a 
comprehensive percentage score of textual similarity, ensuring the utmost precision and accuracy in detecting plagiarism.

## Features

- Check for plagiarism in text
- Returns percentage score of similarity
- Utilizes OpenAI API for advanced natural language processing
- Built with Next.js for server-side rendering and API endpoints
- Google auth engine for login and signup
- Uses Redis for caching and performance optimization
- Uses Prisma for database management
- Styled with Material UI and Tailwind CSS for modern design
- Implemented with TypeScript for type safety and better code maintainability

## Getting Started

To use this API, you need to have an API key from OpenAI. You also need to have Redis and Prisma installed on your machine. Follow the steps below to get started:

1. Clone this repository
2. Install dependencies using `npm install`
3. Create a `.env` file and set your OpenAI API key, Redis and Prisma connection strings. See the `.env.example` file for reference.
4. Run the API using `npm run dev`

## API Endpoints

- `POST /api/v1/similarity`: Check for plagiarism in text. Send a JSON object with the following fields:
    - `text`: The text to be checked for plagiarism.

Returns a JSON object with the following fields:
![image](https://user-images.githubusercontent.com/90950629/233006677-e16cd1e5-fc25-4a77-b7bd-f6339b830332.png)

![image](https://user-images.githubusercontent.com/90950629/233006288-f0697330-2e76-4393-af09-86a77d6a884a.png)


## Contributing

Contributions are welcome! To contribute, please fork this repository and create a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [OpenAI API](https://openai.com/)
- [Next.js](https://nextjs.org/)
- [Redis](https://redis.io/)
- [Prisma](https://www.prisma.io/)
- [Material UI](https://material-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

