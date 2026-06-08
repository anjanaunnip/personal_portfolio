'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function IntroLoader() {

const [loading,setLoading]=useState(true);
const [progress,setProgress]=useState(0);


useEffect(()=>{

const interval=setInterval(()=>{

setProgress((old)=>{

if(old>=100){
clearInterval(interval);

setTimeout(()=>{
setLoading(false);
},700);

return 100;
}

return old+5;

});

},100);


return ()=>clearInterval(interval);

},[]);



return (

<AnimatePresence>

{loading && (

<motion.div

initial={{opacity:1}}

exit={{
opacity:0,
scale:1.1
}}

transition={{
duration:0.8
}}


className="
fixed
inset-0
z-[999999]
bg-[#020617]
flex
items-center
justify-center
overflow-hidden
"

>


{/* background glow */}

<div className="
absolute
w-[700px]
h-[700px]
rounded-full
border
border-cyan-500/20
animate-spin
duration-[10s]
"
/>


<div className="
absolute
inset-0
bg-gradient-to-br
from-cyan-500/10
via-transparent
to-purple-600/20
"
/>



{/* box */}

<motion.div

initial={{
scale:0.8,
opacity:0
}}

animate={{
scale:1,
opacity:1
}}

className="
relative
w-[520px]
p-10
rounded-3xl
border
border-cyan-400/30
bg-slate-950/70
backdrop-blur-xl
text-center
shadow-[0_0_80px_#00d9ff40]
"

>


<p className="
text-cyan-400
tracking-[8px]
text-xs
mb-8
">
INITIALIZING PORTFOLIO...
</p>



{/* Portfolio Logo */}

<motion.div

animate={{
 boxShadow:[
 "0 0 25px rgba(0,217,255,0.5)",
 "0 0 50px rgba(159,122,234,0.8)",
 "0 0 25px rgba(0,217,255,0.5)"
 ]
}}

transition={{
duration:3,
repeat:Infinity
}}

className="
mx-auto
mb-8
relative
w-24
h-24
rounded-3xl
bg-gradient-to-br
from-[#00d9ff]
via-[#6366f1]
to-[#9f7aea]
p-[3px]
"

>


<div
className="
w-full
h-full
rounded-3xl
bg-[#080b20]
flex
items-center
justify-center
"
>

<span
className="
text-4xl
font-black
bg-gradient-to-r
from-[#00d9ff]
to-[#9f7aea]
bg-clip-text
text-transparent
"
>

&lt;/∞

</span>


</div>


</motion.div>


<h1 className="
text-5xl
font-black
tracking-[8px]
bg-gradient-to-r
from-[#00d9ff]
via-white
to-[#9f7aea]
text-transparent
bg-clip-text
">

ANJANA UNNI P

</h1>



<p className="
mt-6
tracking-[6px]
text-gray-400
text-sm
">

FULL STACK DEVELOPER • AI ENTHUSIAST

</p>



<div className="mt-8">


<p className="
text-cyan-300
mb-3
">

{progress}%

</p>


<div className="
h-2
w-full
bg-white/10
rounded-full
overflow-hidden
">


<motion.div

animate={{
width:`${progress}%`
}}

className="
h-full
bg-gradient-to-r
from-pink-500
to-cyan-400
"

/>


</div>


<p className="
mt-5
text-gray-400
tracking-[5px]
text-xs
">

Loading Portfolio...

</p>



</div>


</motion.div>


</motion.div>

)}

</AnimatePresence>

);

}