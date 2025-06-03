Deno.serve((req, info) => {
  const ip = info.remoteAddr.hostname;
  const cfConnectingIp = req.headers.get('cf-connecting-ip') ?? undefined;
  const cfConnectingIpV6 = req.headers.get('cf-connecting-ipv6') ?? undefined;
  const xRealIp = req.headers.get('x-real-ip') ?? undefined;
  const trueClientIp = req.headers.get('true-client-ip') ?? undefined;
  const xForwardedFor = req.headers.get('x-forwarded-for')
    ?.split(',')
    ?.map((ip) => ip.trim())
    ?? undefined;
    
  return new Response(JSON.stringify({
    ip,
    cfConnectingIp,
    cfConnectingIpV6,
    xRealIp,
    trueClientIp,
    xForwardedFor,
  }), {
    headers: {
      "content-type": "application/json",
    }
  });
});
