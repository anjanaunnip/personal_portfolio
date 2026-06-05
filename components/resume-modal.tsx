'use client';

import { motion } from 'framer-motion';
import { X, Download } from 'lucide-react';


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
bg-black/80
backdrop-blur-md
flex
items-center
justify-center
p-5
"
>


<motion.div

initial={{scale:0.8,opacity:0}}
animate={{scale:1,opacity:1}}

className="
relative
w-full
max-w-5xl
h-[90vh]
bg-[#080b20]
rounded-2xl
border
border-[#00d9ff]/40
overflow-hidden
"

>


{/* Header */}

<div
className="
flex
justify-between
items-center
p-4
border-b
border-white/10
"
>


<h2
className="
text-xl
font-bold
gradient-text
"
>
Anjana Unni P Resume
</h2>



<div className="flex gap-3">


<a

href="/resume/ANJANAUNNIP.pdf"

download="ANJANAUNNIP.pdf"

className="
px-4
py-2
rounded-lg
bg-gradient-to-r
from-[#9f7aea]
to-[#00d9ff]
text-black
font-semibold
flex
gap-2
items-center
"

>

<Download size={16}/>

Download

</a>



<button
onClick={onClose}
className="
text-white
hover:text-red-400
"
>

<X/>

</button>


</div>


</div>



{/* PDF VIEW */}


<iframe

src="/resume/ANJANAUNNIP.pdf"

className="
w-full
h-full
"

>

</iframe>



</motion.div>


</div>

)

}