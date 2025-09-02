# CoAfina Hackathon

## Build

```
docker run -it --rm \
  -v $(pwd):/usr/src/app \
  -w /usr/src/app \
  -p 3000:3000 \
  -e NODE_OPTIONS=--openssl-legacy-provider \
  node:current-alpine3.22 \
  sh -c "npm install --legacy-peer-deps && npm run build"
```

## Dev Server

```
docker run -it --rm \
  -v $(pwd):/usr/src/app \
  -w /usr/src/app \
  -p 3000:3000 \
  -e NODE_OPTIONS=--openssl-legacy-provider \
  node:current-alpine3.22 \
  sh -c "npm install --legacy-peer-deps && npm start"
```

## Sync changes

```
rsync -avh \ 
  build/* \
  laconga@laconga.redclara.net:~/build/dev/
```
