Deno.serve((req, info) => {
  const ip = info.remoteAddr.hostname;
  const cfConnectingIp = req.headers.get('cf-connecting-ip') ?? undefined;
  const xForwardedFor = req.headers.get('x-forwarded-for')
    ?.split(',')
    ?.map((ip) => ip.trim())
    ?? undefined;
    
  return new Response(JSON.stringify({
    ip,
    cfConnectingIp,
    xForwardedFor,
  }), {
    headers: {
      "content-type": "application/json",
    }
  });
});
