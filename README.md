# Ribbon Sandbox

This repo was created to explore the path of upgrading from the
go-ribbon to the newer wc-go-ribbon (web component-based).

I'm running the project in a docker container based on our
development image:

```
docker run --rm -it -p 3000:3000  -v `pwd`:/code zfinorg_compile bash -c 'cd /code && npm start'
```

And I set up a proxy service to allow cross origin requests for
loading the ribbon data from our backend.  Example running docker:

```
if [ ! -f ./key.pem ]; then
  echo Creating key
  openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout ./key.pem -out ./cert.pem -batch
fi

docker run --rm -it -p 8080:8080 --user root -v `pwd`:/code --entrypoint /bin/bash node:16-bullseye -c 'cd /code && npm i -g http-server && npx http-server --cors -S -P https://zfin.org -c-1 -C ./cert.pem -K ./key.pem'
```

(based on this technique: https://willschenk.com/articles/2020/simple_cors_workaround_for_local_development/)


### Current State

This is now serving up the new web-component version of go ribbon.
The history of the repository shows the path from using the original ribbon
to replacing it with the wc one.
