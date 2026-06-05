import { NextResponse } from "next/server";
import { Resend } from "resend";


export const dynamic = "force-dynamic";


export async function POST(req: Request) {

try {

const resend = new Resend(
process.env.RESEND_API_KEY
);


const body = await req.json();

const {name,email,message}=body;


if(!name || !email || !message){

return NextResponse.json(
{
error:"Missing fields"
},
{
status:400
}

);

}



await resend.emails.send({

from:
"Portfolio Contact <onboarding@resend.dev>",


to:
[
"anjanaunnikrishnan178@gmail.com"
],


subject:
"New Portfolio Contact Message 🚀",


html:
`

<h2>New Portfolio Message</h2>

<p>
<b>Name:</b> ${name}
</p>


<p>
<b>Email:</b> ${email}
</p>


<p>
<b>Message:</b>
<br/>
${message}
</p>

`

});




return NextResponse.json({

success:true,
message:
"Message sent successfully 🚀 I'll get back to you soon!"

});


}

catch(error){

console.log(
"CONTACT ERROR:",
error
);


return NextResponse.json(
{
error:
"Failed sending message"
},
{
status:500
}
);


}



}