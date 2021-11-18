## About

This is the repository for the frontend to the website of the BVPK e.V. In simple terms, it's a static website with some forms for new members and donation functionality. If a new member signs up, their data is processed for compatibility with some legacy tools like [SPGVerein](https://spg-direkt.de/) and the CRM [CleverReach](https://www.cleverreach.com/de/). See [this private repo](https://github.com/BVPyro/export) for more information on the export process.

### Built With

The front- and backend of the application run on [Next.js](https://nextjs.org/). The project is deployed with [`docker-compose`](https://docs.docker.com/compose/) on a Debian server. See [this repo](https://github.com/BVPyro/server) for more information on the deployment on the server.

## Getting Started

### Prerequisites

Install Node.js (Version 16), and make sure both the `docker` and the `docker-compose` binaries are available and running on your system.

### Start Development

```bash
npm install
npm run dev
```

Then, go to [localhost:3001](http://localhost:3001) to see the running web app. Development takes place on the `dev` branch. The actual website is deployed from the `prod` branch. Whenever you push to the `prod` branch, a Docker container is created based on [this Dockerfile](Dockerfile). Then, one has to login to the server manually to trigger an update of the container there. Again, for more infos regarding the deployment, refer to [this repo](https://github.com/BVPyro/server) or contact me directly.

Before writing a PR, you should probably make sure that this Docker container builds successfully by running something like:

```bash
docker build . -t bvpk-front-dev
docker run -p 3001:3001 bvpk-front-dev:latest
```

On each push to either `dev` or `prod`, Github Actions will automatically build a new container for you. You can then test this container locally by running:

```bash
# to get the container built from the `prod` branch
docker pull ghcr.io/bvpyro/bvpk-front:prod

# to get the container built from the `dev` branch
docker pull ghcr.io/bvpyro/bvpk-front:dev
```

## Roadmap

See the [open issues](https://github.com/BVPyro/bvpk.org/issues) for a list of proposed features (and known issues).
