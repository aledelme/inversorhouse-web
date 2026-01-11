export async function POST(request: Request) {
    const headers = request.headers;
    const body = await request.json();
    // Process the webhook event
    console.log("Received Stripe webhook event:");
    console.log("Headers");
    console.log(headers);
    console.log("Body");
    console.log(body);
    console.log(JSON.stringify(body, null, 2));
    return new Response("Webhook received");
}