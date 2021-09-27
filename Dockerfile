FROM nginx:1.17-alpine

# ARG PLATFORM

COPY deploy/nginx.conf /etc/nginx/nginx.conf

COPY examples/http-cache/static/ /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]