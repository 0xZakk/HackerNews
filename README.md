# HackerNews

This is a simple clone of [hacker news](http://news.ycombinator.com) built using
Django, Django REST Framework, and React.

<img width="1552" alt="screen shot 2018-11-27 at 3 16 32 pm" src="https://user-images.githubusercontent.com/4991553/49108961-75f70680-f257-11e8-9173-599e96b8506c.png">

## Getting Started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

### Prerequisites

You'll need Python 3 installed on your machine. I recommend using a virtual
environment for the backend.

### Installing

Clone the repository to your computer.

Once cloned, navigate to the `backend/` directory, create a virtual
environment, and install the packages listed in the `requirements.txt` file.

Then navigate to the `frontend/` directory and install the packages listed in
the `package.json` file.

To run the API, run the following command from inside the `backend/` directory:

```sh
python manage.py runserver
```

To run the client, run the following command from inside the `frontend/`
directory:

```js
npm start
```

## Built With

* [React](https://reactjs.org/) - Front-end framework for building UIs
* [Django](https://www.djangoproject.com/) - Full-stack framework for building applications with Python
* [Django REST Framework](https://www.django-rest-framework.org/) - Django plugin for easily building REST APIs
* [Django REST Framework JWT](http://getblimp.github.io/django-rest-framework-jwt/) - Django REST Framework plugin for using JWTs
    for authentication

## Authors

* **Zakk Fleischmann** [zkf.io](http://www.zkf.io)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
