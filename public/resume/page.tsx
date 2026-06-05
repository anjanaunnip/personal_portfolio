'use client';

import { motion } from 'framer-motion';
import { Download, ArrowLeft } from 'lucide-react';
import Link from 'next/link';


export default function ResumePage(){

return (

<main className="min-h-screen bg-background text-foreground px-6 py-10">


<Link
href="/"
className="flex items-center gap-2 mb-10 hover:text-[#00d9ff]"
>

<ArrowLeft size={18}/>
Back to Portfolio

</Link>



<motion.section

initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}

className="
max-w-5xl 
mx-auto
glassmorphism-dark
rounded-2xl
p-10
border
border-[#9f7aea]/30
"

>


<h1 className="
text-5xl 
font-bold 
gradient-text
mb-3
">
Anjana Unni P
</h1>


<h2 className="
text-2xl
text-[#00d9ff]
font-semibold
mb-6
">
Full Stack Software Developer
</h2>



<div className="space-y-2 text-foreground/80">

<p>
📧 anjanaunnikrishnan178@gmail.com
</p>

<p>
📞 +91 7736906326
</p>

<p>
📍 Thrissur, Kerala
</p>

<p>
🔗 linkedin.com/in/anjanaunnip
</p>

</div>


<hr className="my-8 border-border"/>


<h3 className="text-2xl font-bold mb-3">
Profile
</h3>

<p className="text-foreground/80 leading-relaxed">

Full Stack Software Developer experienced in building scalable
web applications, responsive interfaces, backend systems,
REST APIs, database driven solutions, testing and deployment.

</p>



<h3 className="text-2xl font-bold mt-8 mb-3">
Education
</h3>


<ul className="space-y-3">

<li>
🎓 MCA - Vidya Academy of Science and Technology  
<br/>
CGPA : 9.14 / 10
</li>


<li>
🎓 BCA - St Mary's College Thrissur  
<br/>
CGPA : 8.29 / 10
</li>


</ul>




<h3 className="text-2xl font-bold mt-8 mb-3">
Experience
</h3>


<p>
💼 Software Development Intern - ODIN Technologies
</p>

<ul className="list-disc ml-6 mt-3 space-y-2 text-foreground/80">

<li>
React.js, Next.js, FastAPI and NestJS development
</li>

<li>
AI / LLM chatbot integrations
</li>

<li>
WhatsApp automation backend systems
</li>

<li>
Agile development with Git and GitHub
</li>


</ul>



<h3 className="text-2xl font-bold mt-8 mb-3">
Projects
</h3>


<div className="space-y-3">

<p>
🚀 DevArchitect AI
</p>

<p>
🌱 AgriVision WeedSense
</p>

<p>
🆘 ReliefHub
</p>

<p>
🏘 TownLet
</p>


</div>



<h3 className="text-2xl font-bold mt-8 mb-3">
Technical Skills
</h3>


<p className="text-foreground/80">

Python • Java • React.js • Next.js • Django • FastAPI • 
MySQL • Git • GitHub • OpenAI API • YOLOv8 • OpenCV

</p>



<a

href="/resume/ANJANAUNNIP.pdf"

download="ANJANAUNNIP.pdf"

className="
mt-10
inline-flex
items-center
gap-2
px-8
py-3
rounded-lg
bg-gradient-to-r
from-[#9f7aea]
to-[#00d9ff]
text-background
font-bold
hover:shadow-lg
hover:shadow-[#00d9ff]/40
"

>

<Download size={18}/>

Download Resume

</a>



</motion.section>


</main>

)

}