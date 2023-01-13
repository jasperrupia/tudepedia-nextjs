
import { Button, ChakraProvider, FormControl, FormErrorMessage, FormLabel, Heading, Input, Textarea } from '@chakra-ui/react'
import { useState } from 'react'
import { sendContactForm } from '../lib/APIs'


const initValue = { name: "", email: "", subject: "", message: "" }
const initState = { values: initValue }

const form = () => {
  
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading } = state;
  const handleChange = ({ target }) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name]: target.value,
    },
  }))
  const onBlur = ({ target }) => setTouched((prev) => ({
    ...prev,
    [target.name]: true,
  }))
  const onSubmit = async () => {
    setState((prev) => ({
      ...prev, 
      isLoading: true
    }))
    await sendContactForm(values);
  }
  return (
    <ChakraProvider>
      <section className="contact_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6 ">
                <div className="heading_container ">
                  <Heading>
                    Contact Us
                  </Heading>
                </div>
                <form>
                  <FormControl isRequired isInvalid={touched.name && !values.name}>
                    <FormLabel>Name</FormLabel>
                    <Input 
                      type='text' 
                      name='name' 
                      value={values.name} 
                      onChange={handleChange}
                      errorBorderColor='red.300'
                      onBlur={onBlur}
                    />
                    <FormErrorMessage>This field is equired!</FormErrorMessage>
                  </FormControl>
                  
                  <FormControl isRequired  isInvalid={touched.email && !values.email}>
                    <FormLabel>Email</FormLabel>
                    <Input 
                      type='email' 
                      name='email' 
                      value={values.email} 
                      onChange={handleChange}
                      errorBorderColor='red.300'
                      onBlur={onBlur}
                    />
                    <FormErrorMessage>This field is equired!</FormErrorMessage>
                  </FormControl>
                  
                  <FormControl isRequired  isInvalid={touched.subject && !values.subject}>
                    <FormLabel>Subject</FormLabel>
                    <Input 
                      type='text' 
                      name='subject' 
                      value={values.subject} 
                      onChange={handleChange}
                      errorBorderColor='red.300'
                      onBlur={onBlur}
                    />
                    <FormErrorMessage>This field is equired!</FormErrorMessage>
                  </FormControl>
                  
                  <FormControl isRequired  isInvalid={touched.message && !values.message}>
                    <FormLabel>Message</FormLabel>
                    <Textarea 
                      type='message' 
                      name='message' 
                      value={values.message} 
                      onChange={handleChange}
                      errorBorderColor='red.300'
                      onBlur={onBlur}
                    />
                    <FormErrorMessage>This field is equired!</FormErrorMessage>
                  </FormControl>
                  
                  <div className="btn-box">
                    <Button
                      disabled={!values.name || !values.email || !values.subject || !values.message}
                      onClick={onSubmit}
                      isLoading={isLoading}
                    >
                      SEND
                    </Button>
                  </div>
                </form>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="sample/images/contact-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
      </section>
    </ChakraProvider>
  )
}

export default form