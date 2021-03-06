## About

A very simple backend app using Flask specifically to log calculations from the frontend as local .txt files.

※ Note: requirements stated all calculations should be logged into a text file. As such, all records passed in from the frontend are recorded according to those specifications. In real life these should have `.log` extensions because these are automatically generated. Anything ending with `.txt` should be considered created by some user.

## Quick start

Install dependencies

```bash
❯ cd backend && pip install -r requirements.txt
```

Copy over the .env file then prepare a logs directory:

```bash
❯ mv .env.example .env
```

Finally, run the app

```bash
❯ flask run
```

To verify logging works, just use the below command in a separate window:

```bash
❯ tail -f logs/log.txt
```

## Unit tests

```bash
❯ pytest
```

## Linting

```bash
❯ flake8 .
```

## Formatting

This project uses [black](https://github.com/psf/black) for auto-formatting. Just type the below command and everything will be reformatted to the preconfigured settings (which you can verify from [pyproject.toml](./pyproject.toml))

```bash
❯ black .
```

## Design details

This service is kept to a bare minimum and is responsible for writing data into the file system, specifically log files. While it is possible to use the [FileSystem API](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API) it's much faster in this case to use Python because it has better tools to let us do this.
