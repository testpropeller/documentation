#!/bin/bash

CONTAINER=$(buildah from docker.io/library/alpine:3.19)
buildah copy "$CONTAINER" nginx.conf /etc/nginx
buildah copy "$CONTAINER" build /app
buildah config --author "dennis@testpropeller.com" "$CONTAINER"
buildah commit "$CONTAINER" testpropeller-documentation
buildah rm "$CONTAINER"