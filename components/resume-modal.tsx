'use client';

import { motion } from 'framer-motion';
import { X, Download, FileText } from 'lucide-react';


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
backdrop-blur-lg
flex
items-center
justify-center
p-6
"
>


<motion.div

initial={{
scale:0.9,
opacity:0,
y:30
}}

animate={{
scale:1,
opacity:1,
y:0
}}

className="
relative
w-full
max-w-4xl
h-[85vh]
rounded-3xl
bg-gradient-to-br
from-[#080b20]
to-[#111936]
border
border-[#00d9ff]/30
shadow-2xl
shadow-[#00d9ff]/20
overflow-hidden
"

>


{/* TOP BAR */}

<div
className="
h-20
px-6
flex
items-center
justify-between
border-b
border-white/10
"
>


<div
className="
flex
items-center
gap-3
"
>

<div
className="
w-12
h-12
rounded-xl
bg-gradient-to-r
from-[#9f7aea]
to-[#00d9ff]
flex
items-center
justify-center
text-black
"
>

<FileText/>

</div>


<div>

<h2
className="
text-xl
font-bold
text-white
"
>
Resume Preview
</h2>


<p
className="
text-sm
text-gray-400
"
>
Anjana Unni P • Full Stack Developer
</p>

</div>

</div>



<button

onClick={onClose}

className="
hover:text-red-400
transition
"

>

<X/>

</button>


</div>




{/* PDF PREVIEW AREA */}

<div
className="
flex-1
overflow-hidden
bg-black/30
px-8
py-6
"
>


<div
className="
h-full
max-w-3xl
mx-auto
rounded-xl
overflow-hidden
bg-white
shadow-2xl
"
>


<iframe

src="/resume/ANJANAUNNIP.pdf#view=FitH"

className="
w-full
h-full
border-none
"

>

</iframe>


</div>


</div>




{/* FOOTER DOWNLOAD */}


<div
className="
h-20
flex
justify-center
items-center
border-t
border-white/10
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