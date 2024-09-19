'use server';

const sendEmail = async (formData: FormData) => {
  'use server';
  console.log('Running on server');
  console.log(formData.get('senderEmail'));
  console.log(formData.get('message'));
};

export default sendEmail;
