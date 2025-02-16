import { motion } from "framer-motion";
import  {MailOpen} from 'lucide-react'

function Home() {
  
  return (
    <>
      <div className="relative">
        <img src="https://www.next.co.uk/cms/resource/blob/854652/cf6739d7bf6bca9df4eb1b5e71eae35d/date-block1-hero-dt-min-data.jpg" alt="" />
        <div className="absolute start-8 bottom-1/2 flex flex-col gap-y-3  ">
          <h1 className="text-5xl uppercase font-semibold  text-black ">the denim edit</h1>
          <h3 className="text-xl uppercase font-semibold ps-2 underline underline-offset-8 text-black ">shop women`s</h3>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-x-2 mt-2">
      <div className="relative">
        <motion.img 
                    src="https://www.next.co.uk/cms/resource/blob/854560/e4e5426eaec2c5321636ec474a2959e6/24-01-25-block4-min-1--data.jpg"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0  }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    viewport={{ once: false }}
        />       
        <h2 className="image_title">
          new seasons favorites
        </h2>
      </div>

      <div className="relative">
      <motion.img 
                    src="https://www.next.co.uk/cms/resource/blob/852716/926b0009d166a6327bd92eceade1d80d/24-01-25-block4-min-data.jpg"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3, ease: "easeIn" }}
                    viewport={{ once: false }}
        />        
          <h2 className="image_title">fun bold brights</h2>
        
      </div>
      <div className="relative">
      <motion.img 
                    src="https://www.next.co.uk/cms/resource/blob/852720/40997ff0329120519b0857da7ea2cf66/24-01-25-block6-min-1--data.jpg"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0  }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    viewport={{ once: false }}
        />
        
          <h2 className="image_title">trending: animal print</h2>
        
      </div>
      </div>      
      <div className="grid grid-cols-3 gap-x-2 mt-2">
      <div className="relative">
      <motion.img 
                    src="https://www.next.co.uk/cms/resource/blob/849260/41ef891339f66efcb3ddec0a3013d9f8/23-01-25-block7-1-min-data.jpg"
                    initial={{ opacity: 0, x: +100 }}
                    whileInView={{ opacity: 1, x: 0  }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    viewport={{ once: false }}
        /> 
        
          <h2 className="image_title">sportwear at joud</h2>
        
      </div>

      <div className="relative">
       <motion.img 
                    src="https://www.next.co.uk/cms/resource/blob/852720/40997ff0329120519b0857da7ea2cf66/24-01-25-block6-min-1--data.jpg"
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3, ease: "easeIn" }}
                    viewport={{ once: false }}
        />
        {/* <img src="" alt="" /> */}
        
          <h2 className="image_title">glow with estee lauder </h2>
        
      </div>
      <div className="relative">
      <motion.img 
                    src="https://www.next.co.uk/cms/resource/blob/848422/a8fa6efaa37a0c2f84a0beafe78b31b6/23-01-25-block8-1-min-data.jpg"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0  }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    viewport={{ once: false }}
        />
        
          <h2 className="image_title">girls latest</h2>
        
      </div>
      </div>

      <div className="title">
           BRAND FOCUS
      </div>
      
   
        <div className="grid grid-cols-6  gap-x-2 ">     
          <img src="https://www.next.co.uk/cms/resource/blob/843480/d93460ddc1d282ef00ef10e00219055c/23-01-25-brand-name-focus-1-min-data.jpg" alt="" />
          <img src="https://www.next.co.uk/cms/resource/blob/843518/a49c43e8b06a3d9299f8fe0bfacd131e/23-01-25-brand-name-focus-4-min-data.jpg" alt="" />
          <img src="https://www.next.co.uk/cms/resource/blob/843510/30df6fa039465f2fb9dd512de47053d6/23-01-25-brand-name-focus-2-min-data.jpg" alt="" />
          <img src="https://www.next.co.uk/cms/resource/blob/848350/cf529d69ff0a9fa9de4302167186326c/23-01-25-brand-name-focus-5-min-1--data.jpg" alt="" />
          <img src="https://www.next.co.uk/cms/resource/blob/843512/f7dca94edc8e29f782f9cc995f6aeda7/23-01-25-brand-name-focus-3-min-data.jpg" alt="" />
          <img src="https://www.next.co.uk/cms/resource/blob/846892/5054c9d8ad16a9732d966f34d703734d/23-01-25-brand-name-focus-6-min-1--data.jpg" alt="" />
        </div>
        <p className="paragraph mx-[12%] my-8">
          Welcome to Joud Fashion, where style meets comfort! Explore our curated collection of trendy, high-quality clothing for every occasion. Whether you`re dressing up for a special event or looking for everyday essentials, our diverse range of styles ensures you`ll find something to suit your unique taste. Shop now and experience fashion like never before!        
        </p>

        <div className="p-12 flex flex-col justify-center items-center">
            <MailOpen size={40}/>
            <h1 className="mt-6">Be In The Know</h1>
            <p className=" mt-4 w-1/2 text-sm/6 text-center">Keep up to date with the latest Next news, including exclusive offers and not to be missed sale and store events.
            Enter your email address below to opt in to email marketing</p>
           <div className="w-1/5 mx-auto mt-6 flex flex-col gap-y-2">
              <span className="text-sm">Email Address</span>
              <input type="text" />
              <button className="bg-color">Subscribe</button>
           </div> 
        </div>

    
    </>
  )
}

export default Home