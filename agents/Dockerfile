###############################################################################
#                                Build
###############################################################################
FROM golang:1.24.3-alpine3.22 as builder

ARG ARCH='arm64'
WORKDIR /app
COPY go.mod .
COPY go.sum .
RUN go mod download

COPY .. .
RUN go build -o main

FROM loads/alpine:3.8

###############################################################################
#                                INSTALLATION
###############################################################################
ARG ARCH='arm64'
ENV TZ Asia/Shanghai

WORKDIR /app

RUN apk update && apk add --no-cache curl bash

COPY --from=builder /app/main /app/

###############################################################################
#                                   START
###############################################################################
EXPOSE 8000
CMD ./main
