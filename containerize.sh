#!/bin/bash

set -euo pipefail

CONTAINER=$(buildah from docker.io/library/nginx:1.25.3-alpine)
buildah copy "$CONTAINER" nginx.conf /etc/nginx
buildah copy "$CONTAINER" build /app
buildah config --author "dennis@testpropeller.com" "$CONTAINER"
buildah commit "$CONTAINER" testpropeller-documentation
buildah rm "$CONTAINER"