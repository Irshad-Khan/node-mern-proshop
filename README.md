# Packages

## concurrently

It is use to execute multiple script using one command. We need to install **concurrently** package using command

```bash
    npm i concurrently
```

```bash
    "scripts": {
    "start": "node backend/server",
    "server": "nodemon backend/server",
    "client": "npm start --prefix frontend",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
```

## Important

If we want to use import syntax for node and react both we node to add following in json file. and if we import any file then js extension should be required

```bash
  "type" : "module"
```
