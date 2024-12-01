# AnyChat
Chat from client to server and server responds back (bidirectional) socket connect with User authentcation and session storage using Strapi as the backend.


## Authors

- [@Souvik3469](https://github.com/Souvik3469)(Souvik Sen)

## Features
- I have used Strapi for the backend which provides me with their inbuilt user authentication endpoints.
- Used Web sockets (socket-io) to establish bidirectional messaging (realtime).
- Only authenticated users can message. (Used jwt provided by strapi and decoded it in the frontend to get user-details)
- Stored the jwt token in the local storage of the frontend to preserve sessions of the User unless he/she logs out or the token expires.
- Stored the chat sessions as well mapped with the correct userId such that respective users can view their chat history after refreshing or after again logging in.

![Chat](https://github.com/Souvik3469/AnyChat/blob/main/frontend/public/Screenshots/Screenshot_6.png)


## Tech Stack
- Frontend: (Vite, Typescript, React, Tailwind Css, socket.io-client, jwt-decode)
- Backend: (Strapi, socket-io)




## SetUp and Running the Project:


### Clone the project

```
git clone https://github.com/Souvik3469/AnyChat.git
```

## For Frontend:

### Specific Directory
```
cd .\frontend\
```

### `install`

Install all the dependencies

```
npm install
```

### `dev`

Start the frontend

```
npm run dev
```


## For Backend:

## 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### Specific Directory
```
cd .\backend\
```

### `install`

Install all the dependencies

```
npm install
# or
yarn install
```

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>


