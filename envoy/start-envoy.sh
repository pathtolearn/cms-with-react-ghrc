#!/usr/bin/env bash

# now we can start envoy in a docker container and map the configuration and service definition inside
# we use --network="host" so that envoy can access the grpc service at localhost:<port>
# the envoy-config.yml has configured envoy to run at port 8080, grpc-web can connect to 8080


if ! [ -x "$(command -v docker)" ] ; then
    echo "docker command is not available, please install docker"
    echo "Install docker: https://store.docker.com/search?offering=community&type=edition"
    exit 1
fi

# check if sudo is required to run docker
if [ "$(groups | grep -c docker)" -gt "0" ]; then
    docker run -it --rm --name envoy --network="host" \
             -v "$(pwd)/envoy-config.yml:/etc/envoy/envoy.yaml:ro" \
             envoyproxy/envoy:v1.14.1
else
    echo "you are not in the docker group, running with sudo"
    sudo docker run -it --rm --name envoy --network="host"\
             -v "$(pwd)/envoy-config.yml:/etc/envoy/envoy.yaml:ro" \
             envoyproxy/envoy:v1.14.1
fi
