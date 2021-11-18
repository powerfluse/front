## About

This is the main repository for everything related to the website of the BVPK
e.V. In simple terms, it's a static website with some forms for new members. If
a new member signs up, their data is processed for compatibility with some
legacy tools like [SPGVerein](https://spg-direkt.de/).

### Built With

The front- and backend of the application run on [Next.js](https://nextjs.org/).
Postprocessing of the data is done in Python. The project is deployed with
[`docker-compose`](https://docs.docker.com/compose/) on a Ubuntu server by
Strato. Additional services deployed via this project include
[NocoDB](https://www.nocodb.com/) and [filebrowser](https://filebrowser.org/)

## Getting Started

### Prerequisites

Install Node.js (Version 16), and make sure both the `docker` and the
`docker-compose` binaries are available and running on your system.

### Development

```bash
cd front
npm install
npm run dev
```

Then, go to [localhost:3001](http://localhost:3001) to see the web app.
Development takes place on the `dev` branch. Only merge into `main` if you are
sure everything is running smoothly.

## Roadmap

See the [open issues](https://github.com/BVPyro/bvpk.org/issues) for a list of proposed features (and known issues).

## Support

Reach out to the maintainer at one of the following places:

- [GitHub issues](https://github.com/BVPyro/bvpk.org/issues/new?assignees=&labels=question&template=04_SUPPORT_QUESTION.md&title=support%3A+)
- The email which is located [in GitHub profile](https://github.com/BVPyro)

## Contributing

First off, thanks for taking the time to contribute! Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make will benefit everybody else and are **greatly appreciated**.

We have set up a separate document containing our [contribution guidelines](docs/CONTRIBUTING.md).

Thank you for being involved!

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
