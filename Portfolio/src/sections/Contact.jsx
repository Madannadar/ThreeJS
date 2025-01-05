import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false); // bc usestate nahi useState 
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handelChange = ({target: { name, value}}) => {
        setForm({...form,[name]: value }) // creating a reusale handle component
    }

    //service_xxqmwnm
    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
             await emailjs.send(
                'service_xxqmwnm',
                'template_gl0aaho',
                {
                    from_name: form.name,
                    to_name: 'Madan',
                    from_email: form.email ,
                    to_email: 'madanak0509@gmail.com',
                    message: form.message
                },
                '4UCnz6TM10Q4w89Kk'
            ) 
            setLoading(true);
        alert('your message has been send!')
        } catch (error) {
            setLoading(false)
            console.log(error);
            alert('Something went wrong in the contact section')
            setForm({
                name: '',
                email: '',
                message: ''
            });
        }  
    }
  return (
    <section className='c-space my-20' id='contact'>
        <div className="relative min-h-screen flex items-center justify-center flex-col">
            <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen'/>
            <div className="contact-container">
                <h3 className="head-text">Contact Me</h3>
                <p className="text-lg text-white-600 mt-3">
                    Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.
                </p>
                <form ref={formRef} onSubmit={handelSubmit} className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3'>
                        <span className='field-label'>
                            Your Name
                        </span>
                        <input 
                            type="text"
                            name='name'
                            value={form.name}
                            onChange={handelChange}
                            required
                            className='field-input' 
                            placeholder='eg: Monkey D Madan'
                            />
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>
                            Email
                        </span>
                        <input 
                            type="email"
                            name='email'
                            value={form.email}
                            onChange={handelChange}
                            required
                            className='field-input' 
                            placeholder='eg: madan@gmail.com'
                            />
                    </label>
                    <label className='space-y-3'>
                        <span className='field-label'>
                            Your message
                        </span>
                        <textarea 
                            name='message'
                            value={form.message}
                            onChange={handelChange}
                            required
                            rows={5}
                            className='field-input' 
                            placeholder='I am eager to listen to your thougths '
                            />
                    </label>
                    <button className="field-btn" type='submit' disabled={loading}>
                        {loading ? "sending..." : "send message"}
                        <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact