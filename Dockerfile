FROM denoland/deno:2.3.5

WORKDIR /app

USER deno

COPY deno.json .
COPY main.ts .
 
RUN deno cache main.ts

CMD ["run", "--allow-net", "main.ts"]
