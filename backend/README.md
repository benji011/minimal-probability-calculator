## Backend for the probability counter

A very simple backend app using Flask specifically to log calculations from the frontend as local .txt files.

### Note:

The requirements stated all calculations should be logged into a text file. As such, all records passed in from the frontend are recorded according to those specifications. In real life these should have `.log` extensions because these are automatically generated. Anything ending with `.txt` should be considered created by some user.

## Quick start

```bash
mv .env.example .env
cd backend && flask run
```

To verify logging works, just use the below command in a separate window:

```bash
tail -f logs/log.txt
```

## Unit tests

```bash
pytest
```

## Formatting

This project uses [black](https://github.com/psf/black) for auto-formatting. Just type the below command and everything will be reformatted to the preconfigured settings (which you can verify from [pyproject.toml](./pyproject.toml))

```bash
black .
```
