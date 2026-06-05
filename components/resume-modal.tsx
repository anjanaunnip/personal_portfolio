'use client';

import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Download,
  FileText
} from 'lucide-react';


interface ResumeModalProps {
  isOpen:boolean;
  onClose:()=>void;
}


export default function ResumeModal({
  isOpen,
  onClose
}:ResumeModalProps){


if(!isOpen) return null;


return(

<div
className="
fixed
inset-0
z-[999]
bg-black/70
backdrop-blur-md
flex
justify-center
items-start
pt-10
px-5
"
>


<motion.div

initial={{
 opacity:0,
 scale:0.85,
 y:50
}}

animate={{
 opacity:1,
 scale:1,
 y:0
}}

transition={{
 duration:0.35,
 ease:'easeOut'
}}


className="
w-full
max-w-4xl
h-[88vh]
rounded-3xl
bg-[#080b20]
border
border-[#00d9ff]/30
shadow-2xl
shadow-cyan-500/20
overflow-hidden
flex
flex-col
"

>


{/* HEADER */}

<div
className="
h-20
flex
items-center
justify-between
px-6
border-b
border-white/10
"
>


<button

onClick={onClose}

className="
flex
items-center
gap-2
text-gray-300
hover:text-[#00d9ff]
transition
"

>

<ArrowLeft size={20}/>

Back

</button>



<div
className="
flex
items-center
gap-3
"
>

<FileText className="text-[#00d9ff]" />


<div>

<h2 className="font-bold text-white">
Resume Preview
</h2>

<p className="text-xs text-gray-400">
ANJANAUNNIP.pdf
</p>


</div>


</div>


</div>






{/* RESUME VIEW */}

<div
className="
flex-1
overflow-y-auto
bg-black/30
p-6
"
>


<div
className="
mx-auto
max-w-3xl
bg-white
rounded-xl
overflow-hidden
"
>


<iframe

src="/resume/ANJANAUNNIP.pdf#page=1&view=Fit"

className="
w-full
h-[850px]
border-0
"

>


</iframe>


</div>


</div>






{/* DOWNLOAD */}

<div
className="
h-20
border-t
border-white/10
flex
items-center
justify-center
"
>


<a

href="/resume/ANJANAUNNIP.pdf"

download="ANJANAUNNIP.pdf"


className="
px-8
py-3
rounded-full
bg-gradient-to-r
from-[#9f7aea]
to-[#00d9ff]
text-black
font-bold
flex
items-center
gap-2
hover:scale-105
transition
"

>


<Download size={18}/>

Download Resume


</a>



</div>



</motion.div>


</div>


)

}